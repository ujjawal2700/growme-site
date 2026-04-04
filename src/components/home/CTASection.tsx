import React from 'react';
import Button from '../ui/Button';
import RevealWrapper from '../ui/RevealWrapper';

export default function CTASection() {
  const sectionStyle: React.CSSProperties = {
    padding: '140px 48px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const ctaBgStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(91,60,245,0.18) 0%, transparent 70%)',
    zIndex: 0,
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-spartan)',
    fontWeight: 800,
    fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
    lineHeight: 1,
    letterSpacing: '-0.03em',
    position: 'relative',
    zIndex: 1,
    marginBottom: '28px',
  };

  const subStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    marginBottom: '52px',
    position: 'relative',
    zIndex: 1,
  };

  const actionsStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
    flexWrap: 'wrap',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={ctaBgStyle} />
      
      <RevealWrapper>
        <h2 style={titleStyle}>
          Ready to<br/>
          <span style={{ color: 'var(--accent)' }}>Grow?</span>
        </h2>
        <p style={subStyle}>
          Let's turn your vision into a digital reality. DM us, WhatsApp us, or start a project.
        </p>
        
        <div style={actionsStyle} className="cta-actions">
          {/* Re-using primary for neon accent style */}
          <Button variant="primary" href="/contact" style={{ background: 'var(--accent)', color: 'var(--black)' }}>
            Start a Project
          </Button>
          <Button variant="outline" href="https://wa.me/">
            WhatsApp Us
          </Button>
        </div>
      </RevealWrapper>

      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 100px 24px !important; }
          .cta-actions { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </section>
  );
}
