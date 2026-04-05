import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const dynamic = 'force-dynamic';

// Initialize Resend (Safely check for API key)
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(req: Request) {
  if (!resend) {
    console.error('CRITICAL: RESEND_API_KEY is missing from .env');
    return NextResponse.json({ 
      success: false, 
      error: 'Email service configuration missing. Please add RESEND_API_KEY to your .env file.' 
    }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { name, email, company, services, budget, timeline, description, phone } = body;

    console.log('--- NEW PROJECT INQUIRY RECEIVED ---', { name, email });

    // 1. SAVE TO GOOGLE SHEETS
    let sheetStatus = 'Pending';
    try {
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || '', serviceAccountAuth);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];

      await sheet.addRow({
        'Date': new Date().toLocaleString(),
        'Name': name,
        'Email': email,
        'Company': company || 'N/A',
        'Services': services.join(', '),
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
      if (sheetError.message.includes('403')) {
        console.error('👉 ACTION REQUIRED: Share your Google Sheet with the Service Account email found in your .env');
      }
    }

    // 2. SEND EMAIL VIA RESEND
    let emailStatus = 'Pending';
    try {
      const { data, error } = await resend.emails.send({
        from: 'GrowMe Leads <leads@growme.in>', // Updated to your actual domain
        to: [process.env.OWNER_EMAIL || 'hello@growme.in'],
        replyTo: email,
        subject: `🚀 New Project Inquiry: ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 40px; border-radius: 12px; background: #fff;">
            <h2 style="color: #3B82F6; margin-bottom: 24px;">New Project Inquiry</h2>
            <p style="font-size: 16px;">A new lead has just submitted a request through the website.</p>
            
            <div style="background: #f8fafc; padding: 24px; border-radius: 8px; margin: 24px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || 'N/A'}</p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            </div>

            <p><strong>Services Needed:</strong><br/> ${services.join(', ')}</p>
            <p><strong>Budget Range:</strong> ${budget}</p>
            <p><strong>Expected Timeline:</strong> ${timeline}</p>
            
            <p><strong>Project Description:</strong></p>
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; font-style: italic;">
              ${description}
            </div>

            <p style="margin-top: 32px; font-size: 14px; color: #64748b;">
              Lead destination status: Google Sheets (${sheetStatus})
            </p>
          </div>
        `,
      });

      if (error) {
        emailStatus = `Failed: ${error.message}`;
        console.error('❌ Resend API Error:', error.message);
      } else {
        emailStatus = 'Success';
        console.log('✅ Email sent successfully:', data?.id);
      }
    } catch (emailError: any) {
      emailStatus = `Failed: ${emailError.message}`;
      console.error('❌ Email Network Error:', emailError.message);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      debug: { sheet: sheetStatus, email: emailStatus }
    });

  } catch (error: any) {
    console.error('❌ General API Error:', error.message);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
