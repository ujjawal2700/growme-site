'use client';

import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

// --- SHOOTING STARS EFFECT ---
const ShootingStar = ({ delay, top, left, duration }: { delay: number, top: string, left: string, duration: number }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, rotate: 135 }}
      animate={{ x: -1200, y: 1200, opacity: [0, 1, 1, 0] }}
      transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "linear" }}
      style={{
        position: 'absolute',
        top,
        left,
        width: '140px',
        height: '2px',
        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.4) 50%, var(--primary) 100%)',
        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))',
        zIndex: 0
      }}
    >
       {/* Glowing comet head */}
       <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '3px', height: '3px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px 4px rgba(59, 130, 246, 0.8)' }} />
    </motion.div>
  );
}

const StarsBackground = () => {
  // Prevent hydration errors by only rendering dynamic stars on the client
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <ShootingStar delay={0.2} top="5%" left="40%" duration={2.2} />
      <ShootingStar delay={1.5} top="-10%" left="70%" duration={2.8} />
      <ShootingStar delay={0.8} top="20%" left="110%" duration={2.5} />
      <ShootingStar delay={2.5} top="-5%" left="90%" duration={2.4} />
      <ShootingStar delay={3.8} top="35%" left="120%" duration={3.0} />
      <ShootingStar delay={4.2} top="15%" left="30%" duration={2.2} />
      <ShootingStar delay={5.5} top="-20%" left="80%" duration={2.6} />
    </div>
  );
};


export default function CTASection() {
  return (
    <section id="contact" style={{ padding: 'clamp(60px, 8vh, 140px) clamp(16px, 4vw, 48px)', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <StarsBackground />
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
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
            <Button variant="ghost" href="https://wa.me/918769959424">WhatsApp Us</Button>
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
          #contact { padding: 80px 20px !important; }
        }
        @media (max-width: 360px) {
          #contact { padding: 60px 14px !important; }
          #contact h2 { font-size: 1.8rem !important; }
          #contact p { font-size: 0.9rem !important; }
          #contact div[style*="padding: 80px"] { padding: 40px 20px !important; border-radius: 24px !important; }
          #contact div[style*="display: flex"][style*="gap: 24px"] {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
          #contact div[style*="display: flex"][style*="gap: 24px"] a,
          #contact div[style*="display: flex"][style*="gap: 24px"] button {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
