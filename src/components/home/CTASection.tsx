'use client';

import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="contact" style={{ padding: '140px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
           style={{
             padding: '80px 40px',
             borderRadius: '48px',
             background: '#E0E5EC',
             boxShadow: '12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.8)',
             textAlign: 'center',
             position: 'relative',
             zIndex: 1
           }}
        >
          {/* DECORATIVE ACCENT */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '40px',
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'var(--primary)',
            boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)',
            zIndex: -1,
            transform: 'rotate(-15deg)'
          }} />

          <h2 style={{ 
            fontFamily: 'var(--font-outfit)', 
            fontWeight: 800, 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            lineHeight: 1.1, 
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: '32px'
          }}>
            Let’s Build Something<br/>
            <span style={{ color: 'var(--primary)' }}>Great Together.</span>
          </h2>
          
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-muted)', 
            marginBottom: '56px',
            maxWidth: '600px',
            margin: '0 auto 56px',
            lineHeight: 1.6,
            fontFamily: 'var(--font-inter)'
          }}>
            Ready to grow your business with a world-class digital experience? Reach out to us today for a free consultation.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Button variant="primary" href="/contact">Start a Project</Button>
            <Button variant="ghost" href="https://wa.me/">WhatsApp Us</Button>
          </div>
        </motion.div>
      </div>

      {/* OVERLAY BLOOM */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'rgba(59, 130, 246, 0.04)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <style>{`
        @media (max-width: 768px) {
          section { padding: 100px 24px !important; }
          div[style*="padding: 80px 40px"] { padding: 60px 24px !important; border-radius: 32px !important; }
        }
      `}</style>
    </section>
  );
}
