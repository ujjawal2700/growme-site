'use client';

import React from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import RevealWrapper from '../ui/RevealWrapper';

const testimonials = [
  {
    featured: true,
    quote: "GrowMe didn't just build our e-commerce platform — they redesigned how we think about online retail. Our conversion rate tripled in the first month. The team is responsive, creative, and genuinely invested in your success. I wouldn't go anywhere else.",
    reviewer: 'Rohan Agarwal',
    role: 'CEO · FreshCart India',
    initials: 'RA'
  },
  {
    featured: false,
    quote: "Our food delivery app went from concept to App Store in 6 weeks. GrowMe's process is fast, transparent, and the quality is exceptional.",
    reviewer: 'Priya Khatri',
    role: 'Founder · QuickBite',
    initials: 'PK'
  },
  {
    featured: false,
    quote: "The AI chatbot they built handles 80% of our customer queries automatically. Support costs dropped, customer satisfaction went up. Incredible ROI.",
    reviewer: 'Arjun Mehta',
    role: 'CTO · NexaCommerce',
    initials: 'AM'
  }
];

export default function Testimonials() {
  const sectionStyle: React.CSSProperties = {
    padding: '120px 48px',
    background: 'var(--gray)',
    borderTop: '1px solid rgba(255,255,255,0.03)',
  };

  return (
    <section id="testimonials" style={sectionStyle}>
      <RevealWrapper>
        <SectionEyebrow>Client Stories</SectionEyebrow>
        <h2 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em'}}>
          What Clients<br/>Say
        </h2>
      </RevealWrapper>

      <div className="test-grid" style={{ marginTop: '60px' }}>
        {testimonials.map((t, i) => (
          <RevealWrapper key={i} delayIndex={i} className={t.featured ? "test-card-featured" : ""}>
            <div 
              style={{
                padding: '40px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="skeuo-raised"
            >
              <div style={{ fontSize: '0.8rem', marginBottom: '16px', color: '#ffd700', letterSpacing: '2px' }}>★★★★★</div>
              
              <div 
                style={{ 
                  fontSize: t.featured ? '1.2rem' : '1rem', 
                  lineHeight: 1.7, fontWeight: 300, marginBottom: '28px', color: 'rgba(240,238,232,0.85)',
                  flexGrow: 1
                }}
              >
                "{t.quote}"
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--purple), var(--accent))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-spartan)', fontWeight: 800, fontSize: '0.85rem'
                }} className="skeuo-raised">
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-spartan)', fontWeight: 700, fontSize: '0.9rem' }}>{t.reviewer}</div>
                  <div style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      <style>{`
        .test-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .test-card-featured {
          grid-row: span 2;
        }
        
        @media (max-width: 768px) {
          #testimonials { padding: 80px 24px !important; }
          .test-grid { grid-template-columns: 1fr; }
          .test-card-featured { grid-row: auto; }
        }
      `}</style>
    </section>
  );
}
