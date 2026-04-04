'use client';

import React, { useRef, useState } from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import RevealWrapper from '../ui/RevealWrapper';

const industries = [
  { icon: '🛍️', name: 'E-Commerce', detail: 'Shopify, custom stores, checkout optimization, product catalog management and conversion funnels.' },
  { icon: '⚡', name: 'Quick Commerce', detail: '10-minute delivery platforms, inventory systems, and real-time logistics dashboards.' },
  { icon: '🍔', name: 'Food Delivery', detail: 'Zomato-style apps, restaurant management systems, and seamless ordering experiences.' },
  { icon: '🔗', name: 'Web3 & Crypto', detail: 'DeFi platforms, NFT marketplaces, DAO tools, and blockchain-integrated applications.' },
  { icon: '🏥', name: 'Healthcare', detail: 'Patient portals, telemedicine apps, appointment systems, and health monitoring dashboards.' },
  { icon: '🎓', name: 'EdTech', detail: 'LMS platforms, interactive learning apps, progress tracking and live class infrastructure.' },
  { icon: '🏢', name: 'SaaS & Startups', detail: 'MVPs to full products, subscription billing, onboarding flows, and growth infrastructure.' },
];

export default function IndustriesScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const sectionStyle: React.CSSProperties = {
    padding: '120px 48px',
    background: 'var(--gray)',
    borderTop: '1px solid rgba(255,255,255,0.03)',
    borderBottom: '1px solid rgba(255,255,255,0.03)',
  };

  const scrollContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    overflowX: 'auto',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none',  // IE/Edge
    paddingBottom: '20px',
    marginTop: '60px',
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  const cardStyle: React.CSSProperties = {
    flex: '0 0 320px',
    padding: '36px 28px',
    position: 'relative',
    transition: 'transform 0.3s, border-color 0.3s',
    userSelect: 'none',
  };

  return (
    <section id="industries" style={sectionStyle}>
      <RevealWrapper>
        <SectionEyebrow>Sectors We Dominate</SectionEyebrow>
        <h2 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em'}}>
          Digital Empires<br/>Across Industries
        </h2>
      </RevealWrapper>

      <RevealWrapper delayIndex={2}>
        <div 
          style={scrollContainerStyle} 
          className="no-scrollbar"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {industries.map((ind, i) => (
            <div key={i} style={cardStyle} className="skeuo-raised group">
              <div style={{ fontSize: '2.2rem', marginBottom: '18px' }}>{ind.icon}</div>
              <div style={{ fontFamily: 'var(--font-spartan)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '8px' }}>
                {ind.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {ind.detail}
              </div>
              {/* Animated bottom line on hover */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--purple), var(--accent))',
                transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 0.3s'
              }} className="group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </RevealWrapper>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          #industries { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
