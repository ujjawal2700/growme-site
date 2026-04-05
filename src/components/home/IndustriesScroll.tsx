'use client';

import React, { useRef, useState } from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import { motion } from 'framer-motion';

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

  return (
    <section id="industries" style={{ padding: '120px 48px', position: 'relative', background: 'transparent' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionEyebrow>Sectors We Dominate</SectionEyebrow>
        <h2 style={{ 
          fontFamily: 'var(--font-outfit)', 
          fontWeight: 800, 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          lineHeight: 1.1, 
          color: 'var(--text)',
          letterSpacing: '-0.02em'
        }}>
          Digital Success<br/>Across Industries
        </h2>
      </div>

      <div 
        style={{
          display: 'flex',
          gap: '32px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '60px 48px 40px',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }} 
        className="no-scrollbar"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (!isDragging || !scrollRef.current) return;
          e.preventDefault();
          const x = e.pageX - scrollRef.current.offsetLeft;
          const walk = (x - startX) * 2;
          scrollRef.current.scrollLeft = scrollLeft - walk;
        }}
      >
        {industries.map((ind, i) => (
          <motion.div 
            key={i} 
            whileHover={{ translateY: -10 }}
            style={{
              flex: '0 0 340px',
              padding: '48px 32px',
              background: '#E0E5EC',
              borderRadius: '32px',
              boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.5), -10px -10px 20px rgba(255, 255, 255, 0.7)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '24px' }}>{ind.icon}</div>
            <h4 style={{ 
              fontFamily: 'var(--font-outfit)', 
              fontWeight: 800, 
              fontSize: '1.4rem', 
              color: 'var(--text)',
              marginBottom: '12px' 
            }}>
              {ind.name}
            </h4>
            <p style={{ 
              fontFamily: 'var(--font-inter)',
              fontSize: '0.95rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.6,
              flexGrow: 1
            }}>
              {ind.detail}
            </p>
            
            {/* Soft underline accent */}
            <div style={{
              marginTop: '32px',
              height: '4px',
              width: '40px',
              borderRadius: '2px',
              background: 'var(--primary)',
              opacity: 0.3
            }} />
          </motion.div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
