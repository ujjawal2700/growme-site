import React from 'react';
import Button from '../ui/Button';
import SectionEyebrow from '../ui/SectionEyebrow';
import FloatingOrbs from '../ui/FloatingOrbs';

export default function Hero() {
  const heroStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '120px 48px 80px',
    position: 'relative',
    overflow: 'hidden',
  };

  const gridBgStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(91,60,245,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(91,60,245,0.07) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
    zIndex: 0,
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-spartan)',
    fontWeight: 800,
    fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
    lineHeight: 0.95,
    letterSpacing: '-0.03em',
    maxWidth: '900px',
    opacity: 0,
    animation: 'fadeUp 0.9s 0.35s forwards',
    position: 'relative',
    zIndex: 1,
  };

  const subStyle: React.CSSProperties = {
    marginTop: '36px',
    fontSize: '1.1rem',
    fontWeight: 300,
    color: 'var(--text-muted)',
    maxWidth: '480px',
    lineHeight: 1.7,
    opacity: 0,
    animation: 'fadeUp 0.9s 0.55s forwards',
    position: 'relative',
    zIndex: 1,
  };

  const actionsStyle: React.CSSProperties = {
    marginTop: '52px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    flexWrap: 'wrap',
    opacity: 0,
    animation: 'fadeUp 0.9s 0.7s forwards',
    position: 'relative',
    zIndex: 1,
  };

  return (
    <section style={heroStyle}>
      <div style={gridBgStyle} />
      
      <FloatingOrbs color="rgba(91,60,245,0.25)" size={600} top="-100px" right="-100px" />
      <FloatingOrbs color="rgba(0,255,178,0.12)" size={400} bottom="0" left="10%" animationDelay="2s" animationDirection="reverse" />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionEyebrow delay={0.2}>Digital Growth Agency · Est. 2024</SectionEyebrow>
        
        <h1 style={titleStyle}>
          We Build<br />
          <span style={{ color: 'var(--purple-light)' }}>Digital</span><br />
          <span style={{ position: 'relative', display: 'inline-block', color: 'var(--white)' }}>
            Empires.
            <span style={{
              content: '""', position: 'absolute', left: 0, bottom: '4px', right: 0, height: '6px',
              background: 'var(--accent)', zIndex: -1, transform: 'scaleX(0)', transformOrigin: 'left',
              animation: 'lineReveal 0.6s 1.2s forwards'
            }} />
          </span>
        </h1>
        
        <p style={subStyle}>
          From sleek websites to AI-powered chatbots — GrowMe crafts digital experiences that convert, scale, and dominate.
        </p>
        
        <div style={actionsStyle}>
          <Button variant="primary" href="/contact">Build With Us</Button>
          <Button variant="ghost" href="#services">Explore Services</Button>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          section { padding: 100px 24px 60px !important; }
        }
      `}</style>
    </section>
  );
}
