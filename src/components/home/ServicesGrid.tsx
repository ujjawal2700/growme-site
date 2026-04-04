'use client';

import React from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import RevealWrapper from '../ui/RevealWrapper';

const services = [
  { num: '01', icon: '💻', name: 'Web Development', desc: 'Performant, scalable, and responsive web applications built with modern stacks.', tags: ['React', 'Next.js', 'Node'] },
  { num: '02', icon: '📱', name: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences that users love.', tags: ['React Native', 'Flutter', 'Swift'] },
  { num: '03', icon: '🤖', name: 'AI Chatbots', desc: 'Intelligent conversational agents that automate customer support and sales.', tags: ['OpenAI', 'LangChain', 'Python'] },
  { num: '04', icon: '✨', name: 'UI/UX Design', desc: 'Data-driven, aesthetic, and user-centric design systems.', tags: ['Figma', 'Prototyping', 'Systems'] },
  { num: '05', icon: '🚀', name: 'Digital Marketing', desc: 'Data-backed performance marketing and SEO strategies for rapid scaling.', tags: ['SEO', 'Ads', 'Analytics'] },
  { num: '06', icon: '📈', name: 'Growth Strategy', desc: 'End-to-end consulting to align product, market, and operations.', tags: ['Strategy', 'Operations', 'GTM'] },
];

export default function ServicesGrid() {
  const sectionStyle: React.CSSProperties = {
    padding: '120px 48px',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '72px',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-spartan)',
    fontWeight: 800,
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
  };

  const subStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-poppins)',
    maxWidth: '200px',
    textAlign: 'right',
    lineHeight: 1.6,
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  };

  const cardStyle: React.CSSProperties = {
    padding: '40px 36px',
    position: 'relative',
    transition: 'transform 0.3s',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '1.8rem',
    marginBottom: '20px',
    display: 'block',
    filter: 'grayscale(0.3)',
  };

  const numStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '24px',
    fontFamily: 'var(--font-poppins)',
    fontSize: '0.6rem',
    color: 'var(--gray2)',
    letterSpacing: '0.1em',
  };

  const nameStyle: React.CSSProperties = {
    fontFamily: 'var(--font-spartan)',
    fontWeight: 700,
    fontSize: '1.15rem',
    marginBottom: '10px',
    letterSpacing: '-0.01em',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
    lineHeight: 1.65,
    fontWeight: 300,
    flexGrow: 1,
  };

  const tagsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: '20px',
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
  };
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <section id="services" style={sectionStyle}>
      <RevealWrapper>
        <div style={headerStyle}>
          <div>
            <SectionEyebrow delay={0}>Our Expertise</SectionEyebrow>
            <h2 style={titleStyle}>End-to-End<br/>Scale Engine</h2>
          </div>
          <div style={subStyle} className="md-hidden-sub">
            We don't just build, we engineer for hyper-growth.
          </div>
        </div>
      </RevealWrapper>

      <div style={gridStyle}>
        {services.map((service, i) => (
          <RevealWrapper key={i} delayIndex={i} style={{ height: '100%' }}>
            <div 
              style={cardStyle} 
              className="skeuo-raised"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={numStyle}>{service.num}</div>
              <div style={iconStyle}>{service.icon}</div>
              <div style={nameStyle}>{service.name}</div>
              <div style={descStyle}>{service.desc}</div>
              <div style={tagsContainerStyle}>
                {service.tags.map(tag => (
                  <span key={tag} className="skeuo-tag font-[family-name:var(--font-poppins)] text-[0.58rem] tracking-wider uppercase text-[var(--purple-light)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .md-hidden-sub { display: none !important; }
          #services { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
