'use client';

import React from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import RevealWrapper from '../ui/RevealWrapper';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We deep-dive into your goals, audience, and competition to shape a winning strategy.' },
  { num: '02', title: 'Design', desc: 'Wireframes, prototypes, and pixel-perfect UI — all signed off before a line of code is written.' },
  { num: '03', title: 'Build', desc: 'Agile sprints, clean code, rigorous QA. We build fast without breaking things.' },
  { num: '04', title: 'Launch & Grow', desc: "Deployment, monitoring, marketing activation. We don't ship and disappear — we scale with you." },
];

export default function ProcessSteps() {
  const sectionStyle: React.CSSProperties = {
    padding: '120px 48px',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <section id="process" style={sectionStyle}>
      <RevealWrapper>
        <SectionEyebrow>How we work</SectionEyebrow>
        <h2 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em'}}>
          From Idea to<br/>Launch in 4 Steps
        </h2>
      </RevealWrapper>

      <div className="process-grid" style={{ marginTop: '72px', position: 'relative' }}>
        {/* Gradient Connecting Line */}
        <div 
          className="process-line"
          style={{
            position: 'absolute', top: '28px', left: '12%', right: '12%', height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--purple), var(--accent), transparent)',
            zIndex: 0
          }}
        />

        {steps.map((step, i) => (
          <RevealWrapper key={i} delayIndex={i} className="process-step">
            <div 
              style={{
                width: '56px', height: '56px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', fontFamily: 'var(--font-poppins)', fontSize: '0.8rem',
                position: 'relative', zIndex: 1, transition: 'all 0.3s'
              }}
              className="skeuo-raised step-circle group"
            >
              <span className="text-[var(--purple-light)] group-hover:text-[var(--accent)] transition-colors inline-block">{step.num}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-spartan)', fontWeight: 700, fontSize: '1rem', marginBottom: '10px' }}>
              {step.title}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              {step.desc}
            </div>
          </RevealWrapper>
        ))}
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .process-step {
          text-align: center;
          padding: 0 20px;
        }
        
        @media (max-width: 768px) {
          #process { padding: 80px 24px !important; }
          .process-grid { grid-template-columns: 1fr 1fr; gap: 40px 20px; }
          .process-line { display: none; }
        }
      `}</style>
    </section>
  );
}
