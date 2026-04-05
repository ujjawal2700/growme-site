'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { num: '200+', label: 'Projects Completed' },
  { num: '98%', label: 'Client Satisfaction' },
  { num: '50+', label: 'Team Members' },
  { num: '5yr', label: 'Agency Experience' },
];

export default function StatsTicker() {
  // We duplicate the stats to create a seamless infinite loop
  const duplicatedStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <div style={{
      padding: '40px 0',
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* THE NEUMORPHIC INSET TRACK */}
      <div style={{
        margin: '0 48px',
        padding: '24px 0',
        borderRadius: '24px',
        background: '#E0E5EC',
        boxShadow: 'inset 6px 6px 12px rgba(163, 177, 198, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.6)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <motion.div 
           animate={{ x: ['0%', '-50%'] }}
           transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
           style={{
             display: 'flex',
             gap: '100px',
             whiteSpace: 'nowrap',
             width: 'max-content',
             paddingLeft: '50px'
           }}
        >
          {duplicatedStats.map((stat, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 800,
                fontSize: '1.75rem',
                color: 'var(--primary)',
                textShadow: '0 4px 10px rgba(59, 130, 246, 0.1)'
              }}>{stat.num}</span>
              
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--text-muted)'
              }}>{stat.label}</span>
              
              {/* SOFT DIVIDER DOT */}
              <div style={{ 
                width: '6px', 
                height: '6px', 
                borderRadius: '50%', 
                background: 'rgba(163, 177, 198, 0.3)',
                marginLeft: '40px' 
              }} />
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
         @media (max-width: 768px) {
           div { margin: 0 24px !important; }
         }
      `}</style>
    </div>
  );
}
