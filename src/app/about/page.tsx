import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingOrbs from '@/components/ui/FloatingOrbs';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function AboutPage() {
  const pageStyle: React.CSSProperties = {
    paddingTop: '120px',
  };

  const values = [
    { icon: '💡', title: 'Innovation', desc: 'We don’t follow trends; we set them with cutting-edge tech.' },
    { icon: '⚡', title: 'Speed', desc: 'Agile execution designed to beat your competitors to market.' },
    { icon: '💎', title: 'Quality', desc: 'Zero compromises. Pixel-perfect UI and bug-free code.' },
    { icon: '🔍', title: 'Transparency', desc: 'Clear communication, open timelines, no hidden fees.' },
    { icon: '🤝', title: 'Partnership', desc: 'Your success is our success. We scale with you.' },
    { icon: '🏆', title: 'Excellence', desc: 'Delivering work that defines industry standards.' },
  ];

  const team = [
    { role: 'CEO / Founder', name: 'Alaric Voss', grad: 'linear-gradient(135deg, #5b3cf5, #ff3d6b)' },
    { role: 'CTO', name: 'Elena Rostova', grad: 'linear-gradient(135deg, #00ffb2, #5b3cf5)' },
    { role: 'Head of Design', name: 'Julian Vance', grad: 'linear-gradient(135deg, #ff3d6b, #00ffb2)' },
    { role: 'Marketing Lead', name: 'Maya Lin', grad: 'linear-gradient(135deg, #8b6fff, #5b3cf5)' },
  ];

  return (
    <main>
      <Navbar />
      
      <div style={pageStyle}>
        {/* HERO */}
        <section style={{ padding: '80px 48px', position: 'relative', textAlign: 'center' }}>
          <FloatingOrbs color="rgba(91,60,245,0.2)" size={500} top="-100px" left="50%" className="-translate-x-1/2" />
          <SectionEyebrow className="justify-center">About GrowMe</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font-spartan)', fontWeight: 800, fontSize: 'clamp(3rem, 6vw, 5rem)', position: 'relative', zIndex: 1 }}>
            Building Tomorrow's<br/>
            <span style={{ color: 'var(--accent)' }}>Digital Infrastructure.</span><br/>
            Today.
          </h1>
        </section>

        {/* MISSION & VISION */}
        <section style={{ padding: '60px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <RevealWrapper>
              <div className="skeuo-raised" style={{ padding: '40px', height: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-spartan)', fontSize: '1.5rem', marginBottom: '16px', color: 'var(--purple-light)' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>To architect scalable, high-performance digital ecosystems that empower brands to dominate their respective markets. We engineer growth through ruthless optimization and breathtaking design.</p>
              </div>
            </RevealWrapper>
            <RevealWrapper delayIndex={1}>
              <div className="skeuo-pressed" style={{ padding: '40px', height: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-spartan)', fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>Our Vision</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>We envision a web where aesthetic brilliance and technical supremacy are inextricably linked, establishing a new baseline for what digital products can achieve for human interaction.</p>
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: '60px 48px', background: 'var(--gray)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
            {[{v:'2024', l:'Founded'}, {v:'200+', l:'Projects'}, {v:'50+', l:'Clients'}, {v:'15+', l:'Experts'}].map((stat, i) => (
              <RevealWrapper key={i} delayIndex={i}>
                <div style={{ fontFamily: 'var(--font-spartan)', fontSize: '3rem', fontWeight: 800, color: 'var(--white)' }}>{stat.v}</div>
                <div style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.8rem', color: 'var(--accent)' }}>{stat.l}</div>
              </RevealWrapper>
            ))}
          </div>
        </section>

        {/* CORE VALUES */}
        <section style={{ padding: '120px 48px' }}>
          <SectionEyebrow>Our DNA</SectionEyebrow>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: '3rem', marginBottom: '60px' }}>Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {values.map((v, i) => (
              <RevealWrapper key={i} delayIndex={i}>
                <div className="skeuo-raised" style={{ padding: '32px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{v.icon}</div>
                  <h4 style={{ fontFamily: 'var(--font-spartan)', fontSize: '1.2rem', marginBottom: '8px' }}>{v.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section style={{ padding: '120px 48px', background: 'var(--gray)' }}>
          <SectionEyebrow>The Minds</SectionEyebrow>
          <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: '3rem', marginBottom: '60px' }}>Meet The Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {team.map((t, i) => (
              <RevealWrapper key={i} delayIndex={i}>
                <div className="skeuo-raised" style={{ padding: '32px', textAlign: 'center' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: t.grad, margin: '0 auto 24px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }} />
                  <h4 style={{ fontFamily: 'var(--font-spartan)', fontSize: '1.2rem', marginBottom: '4px' }}>{t.name}</h4>
                  <p style={{ fontFamily: 'var(--font-poppins)', color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>{t.role}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
