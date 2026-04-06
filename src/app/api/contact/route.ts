import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  // 1. PRE-FLIGHT: ENVIRONMENT VALIDATION
  const requiredVars = [
    'RESEND_API_KEY',
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_PRIVATE_KEY',
    'GOOGLE_SHEET_ID',
    'OWNER_EMAIL'
  ];

  const missingVars = requiredVars.filter(v => !process.env[v]);
  
  if (missingVars.length > 0) {
    console.error('❌ CRITICAL: Missing Environment Variables:', missingVars.join(', '));
    return NextResponse.json({ 
      success: false, 
      error: 'Server configuration error. Contact administrator.',
      debug: `Missing keys: ${missingVars.join(', ')}` 
    }, { status: 500 });
  }

  // Initialize Resend
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, company, description, budget, timeline, phone } = body;
    
    // Input Sanitization
    const sanitizedServices = Array.isArray(body.services) ? body.services.join(', ') : 'None specified';

    console.log('--- NEW PROJECT INQUIRY RECEIVED ---', { name, email });

    // 2. PARSE PRIVATE KEY ROBUSTLY
    const rawKey = process.env.GOOGLE_PRIVATE_KEY || '';
    const formattedKey = rawKey
      .replace(/\\n/g, '\n') // Handle escaped newlines
      .replace(/"/g, '')     // Remove surrounding quotes if any
      .trim();               // Final whitespace cleanup

    // 3. ATTEMPT GOOGLE SHEETS (NON-BLOCKING)
    let sheetStatus = 'Pending';
    try {
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: formattedKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];

      await sheet.addRow({
        'Date': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        'Name': name,
        'Email': email,
        'Company': company || 'N/A',
        'Service': sanitizedServices,
        'Services': sanitizedServices,
        'Services Needed': sanitizedServices,
        'Budget': budget,
        'Timeline': timeline,
        'Description': description,
        'Phone': phone || 'N/A',
      });
      sheetStatus = 'Success';
      console.log('✅ Successfully saved to Google Sheets');
    } catch (sheetError: any) {
      sheetStatus = `Failed: ${sheetError.message}`;
      console.error('❌ Google Sheets Error:', sheetError.message);
    }

    // 4. ATTEMPT EMAIL NOTIFICATION (NON-BLOCKING)
    let emailStatus = 'Pending';
    try {
      const { data, error } = await resend.emails.send({
        from: 'GrowMe Leads <leads@growme.in>',
        to: [process.env.OWNER_EMAIL!],
        replyTo: email,
        subject: `🚀 New Project Inquiry: ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 40px; border-radius: 12px;">
            <h2 style="color: #3B82F6; margin-bottom: 24px;">New Lead Captured</h2>
            <div style="background: #f8fafc; padding: 24px; border-radius: 8px; margin: 24px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <p><strong>WhatsApp:</strong> ${phone || 'N/A'}</p>
            </div>
            <p><strong>Services:</strong> ${sanitizedServices}</p>
            <p><strong>Description:</strong></p>
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">${description}</div>
            <p style="margin-top: 32px; font-size: 12px; color: #94a3b8;">
              Status: Sheets (${sheetStatus})
            </p>
          </div>
        `,
      });

      if (error) {
        emailStatus = `Failed: ${error.message}`;
        console.error('❌ Resend API Error:', error.message);
      } else {
        emailStatus = 'Success';
        console.log('✅ Email sent successfully');
      }
    } catch (emailError: any) {
      emailStatus = `Failed: ${emailError.message}`;
      console.error('❌ Email Notification Error:', emailError.message);
    }

    // 5. RESPOND BASED ON OUTCOMES
    if (sheetStatus === 'Success' || emailStatus === 'Success') {
      return NextResponse.json({ 
        success: true, 
        message: 'Project request received!',
        debug: { sheet: sheetStatus, email: emailStatus }
      });
    }

    throw new Error('All destination services failed.');

  } catch (error: any) {
    console.error('❌ FINAL API FAILURE:', error.message);
    return NextResponse.json({ 
      success: false, 
      error: 'Form submission failed. Please try again or email directly.',
      debug: error.message
    }, { status: 500 });
  }
}
