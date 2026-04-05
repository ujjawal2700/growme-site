'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We take the time to understand your unique business goals and who your customers are.' },
  { num: '02', title: 'Design', desc: 'We create a clean, modern look for your project that reflects your professional brand.' },
  { num: '03', title: 'Build', desc: 'Our team builds your site with the latest tech to ensure it is fast, secure, and reliable.' },
  { num: '04', title: 'Launch & Grow', desc: "We help you go live and stay by your side to ensure your business keeps growing." },
];

export default function ProcessSteps() {
  return (
    <section id="process" style={{ padding: '140px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '100px', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: '20px',
            background: '#E0E5EC',
            boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.5)',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--primary)',
            letterSpacing: '0.1em',
            marginBottom: '24px'
          }}>HOW WE WORK</div>

          <h2 style={{ 
            fontFamily: 'var(--font-outfit)', 
            fontWeight: 800, 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.1, 
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            From <span style={{ color: 'var(--primary)' }}>Idea</span> to Success in 4 Simple Steps.
          </h2>
        </motion.div>

        <div className="process-grid" style={{ position: 'relative' }}>
          {/* THE SOFT CONNECTING LINE (Recessed) */}
          <div 
            style={{
              position: 'absolute', top: '32px', left: '10%', right: '10%', height: '8px',
              background: '#E0E5EC',
              boxShadow: 'inset 2px 2px 4px rgba(163, 177, 198, 0.4), inset -2px -2px 4px rgba(255, 255, 255, 0.6)',
              borderRadius: '4px',
              zIndex: 0
            }}
            className="md-hide"
          />

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
            >
              <div 
                style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: '#E0E5EC',
                  boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 28px', 
                  fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '1.25rem',
                  color: 'var(--primary)'
                }}
              >
                {step.num}
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-outfit)', 
                fontWeight: 700, 
                fontSize: '1.25rem', 
                marginBottom: '16px',
                color: 'var(--text)'
              }}>
                {step.title}
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                color: 'var(--text-muted)', 
                lineHeight: 1.6,
                fontFamily: 'var(--font-inter)',
                maxWidth: '240px',
                margin: '0 auto' 
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr; gap: 40px; }
          .md-hide { display: none !important; }
        }
        @media (max-width: 1024px) {
          section { padding: 100px 24px !important; }
          .process-grid { grid-template-columns: 1fr 1fr; gap: 60px 40px; }
        }
      `}</style>
    </section>
  );
}
