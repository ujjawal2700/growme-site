'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    featured: true,
    quote: "GrowMe didn't just build our website — they redesigned how we think about our business. Our customers find it so much easier to use now. The team is responsive, creative, and genuinely cares about your success.",
    reviewer: 'Rohan Agarwal',
    role: 'Owner · FreshCart India',
    initials: 'RA'
  },
  {
    featured: false,
    quote: "Our new app went from an idea to reality in just 6 weeks. The process was simple, transparent, and the quality is exceptional.",
    reviewer: 'Priya Khatri',
    role: 'Founder · QuickBite',
    initials: 'PK'
  },
  {
    featured: false,
    quote: "The automation tools they built for us saved us hours of work every week. Simple tools that just work. Incredible value for money.",
    reviewer: 'Arjun Mehta',
    role: 'Manager · NexaCommerce',
    initials: 'AM'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '140px 48px', background: 'transparent' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '80px' }}
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
          }}>SUCCESS STORIES</div>

          <h2 style={{ 
            fontFamily: 'var(--font-outfit)', 
            fontWeight: 800, 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.1, 
            color: 'var(--text)',
            letterSpacing: '-0.02em'
          }}>
            What Our <span style={{ color: 'var(--primary)' }}>Clients</span> Say.
          </h2>
        </motion.div>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                padding: '48px',
                borderRadius: '32px',
                background: '#E0E5EC',
                boxShadow: '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                gridColumn: t.featured ? 'span 2' : 'auto'
              }}
            >
              <div style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>“</div>
              
              <p style={{ 
                fontSize: t.featured ? '1.25rem' : '1.1rem', 
                lineHeight: 1.7, 
                fontWeight: 450, 
                color: 'var(--text)', 
                fontFamily: 'var(--font-inter)',
                flexGrow: 1
              }}>
                {t.quote}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: '#E0E5EC',
                  boxShadow: '4px 4px 10px rgba(163, 177, 198, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '1rem',
                  color: 'var(--primary)'
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
                    {t.reviewer}
                  </div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .test-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        
        @media (max-width: 1024px) {
          #testimonials { padding: 100px 24px !important; }
          .test-grid { grid-template-columns: 1fr; }
          .test-grid div { grid-column: auto !important; }
        }
      `}</style>
    </section>
  );
}
