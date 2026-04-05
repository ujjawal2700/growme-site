'use client';

import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  const heroStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '160px 48px 100px',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
    zIndex: 10
  };

  const badgeStyle: React.CSSProperties = {
    padding: '8px 20px',
    display: 'inline-block',
    borderRadius: '20px',
    background: '#E0E5EC',
    boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.6)',
    fontFamily: 'var(--font-inter)',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'var(--primary)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '40px'
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-outfit)',
    fontWeight: 800,
    fontSize: 'clamp(3rem, 7vw, 6rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: 'var(--text)',
    maxWidth: '1000px',
    marginBottom: '32px'
  };

  const subStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 400,
    color: 'var(--text-muted)',
    maxWidth: '600px',
    lineHeight: 1.8,
    marginBottom: '56px',
    fontFamily: 'var(--font-inter)'
  };

  return (
    <section style={heroStyle}>
      {/* SOFT TEXTURE LAYER */}
      <div style={{
         position: 'absolute',
         top: '15%',
         right: '5%',
         width: '400px',
         height: '400px',
         borderRadius: '50%',
         background: 'rgba(59, 130, 246, 0.05)',
         filter: 'blur(100px)',
         zIndex: 0,
         pointerEvents: 'none'
      }} />

      <div style={containerStyle}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        >
          <div style={badgeStyle}>Digital Success · Est. 2024</div>
          
          <h1 style={titleStyle}>
            Empower Your Business<br /> 
            With <span style={{ 
              color: 'var(--primary)', 
              textShadow: '0 10px 20px rgba(59, 130, 246, 0.1)' 
            }}>High-End</span> Digital Solutions.
          </h1>
          
          <p style={subStyle}>
            We help you build websites and tools that growth your revenue—without the technical headaches. Simple. Fast. Effective.
          </p>
          
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" href="/contact">Get Started Today</Button>
            <Button variant="ghost" href="#services">See What We Do</Button>
          </div>
        </motion.div>
      </div>

      {/* FLOATING DECORATIVE (Neumorphic Depth) */}
      {!true /* desktop logic */ && (
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '200px',
            height: '280px',
            borderRadius: '40px',
            background: '#E0E5EC',
            boxShadow: '20px 20px 40px rgba(163, 177, 198, 0.3), -20px -20px 40px rgba(255, 255, 255, 0.5)',
            zIndex: 1,
            transform: 'rotate(15deg)'
          }}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          section { padding: 120px 24px 60px !important; }
        }
      `}</style>
    </section>
  );
}
