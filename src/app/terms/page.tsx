import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

export default function TermsPage() {
  const sections = [
    { title: 'Agreement to Terms', content: 'These Terms and Conditions constitute a legally binding agreement made between you and GrowMe Digital Agency concerning your access to and use of our services.' },
    { title: 'Intellectual Property Rights', content: 'Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics are owned or controlled by us.' },
    { title: 'User Responsibilities', content: 'By using the Services, you represent and warrant that all registration information you submit will be true, accurate, current, and complete.' },
    { title: 'Services & Deliverables', content: 'GrowMe will provide the services as agreed upon in specific Statements of Work (SOW) or project proposals. Timelines are estimates and subject to client cooperation and providing necessary assets.' },
    { title: 'Payment Terms', content: 'Invoices are due within 15 days of receipt unless otherwise specified. Late payments may be subject to a 1.5% monthly late fee.' },
  ];

  return (
    <main>
      <Navbar />
      
      <div style={{ paddingTop: '160px', paddingBottom: '120px', paddingLeft: '48px', paddingRight: '48px', display: 'flex', gap: '60px', flexDirection: 'row', flexWrap: 'wrap' }}>
        
        {/* SIDEBAR */}
        <div style={{ flex: '0 0 250px', position: 'sticky', top: '120px', height: 'fit-content' }} className="md-hidden">
          <SectionEyebrow>Legal</SectionEyebrow>
          <ul style={{ listStyle: 'none', borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '20px' }}>
            {sections.map((s, i) => (
              <li key={i} style={{ marginBottom: '16px' }}>
                <a href={`#section-${i}`} style={{ textDecoration: 'none', color: i === 0 ? 'var(--accent)' : 'var(--text-muted)', fontFamily: 'var(--font-poppins)', fontSize: '0.8rem', transition: 'color 0.2s' }}>
                  0{i+1}. {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTENT */}
        <div style={{ flex: '1', maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'var(--font-spartan)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px' }}>
            Terms & Conditions
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-poppins)', fontSize: '0.8rem', marginBottom: '60px' }}>
            LAST UPDATED: APRIL 2026
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {sections.map((s, i) => (
              <section key={i} id={`section-${i}`} className="skeuo-pressed" style={{ padding: '40px' }}>
                <div style={{ fontFamily: 'var(--font-poppins)', color: 'var(--purple-light)', fontSize: '0.9rem', marginBottom: '16px' }}>
                  SECTION 0{i+1}
                </div>
                <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px' }}>
                  {s.title}
                </h2>
                <p style={{ color: 'var(--white)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
                  {s.content}
                </p>
              </section>
            ))}
          </div>

          <div className="skeuo-raised" style={{ marginTop: '80px', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-spartan)', fontSize: '1.5rem', marginBottom: '16px' }}>Questions about our terms?</h3>
            <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-poppins)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              Contact Legal Team →
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .md-hidden { display: none !important; }
        }
      `}</style>
    </main>
  );
}
