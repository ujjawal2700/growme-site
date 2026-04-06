'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { 
    icon: '💻', 
    name: 'Website Development', 
    desc: 'Beautiful, fast websites that convert visitors into loyal customers.',
    color: '#3B82F6',        // blue
    bg: 'rgba(59,130,246,0.07)',
  },
  { 
    icon: '📱', 
    name: 'Mobile Apps', 
    desc: 'Sleek native & cross-platform apps for iOS and Android.',
    color: '#8B5CF6',        // violet
    bg: 'rgba(139,92,246,0.07)',
  },
  { 
    icon: '🤖', 
    name: 'AI & Automation', 
    desc: 'Smart workflows that run your business on autopilot.',
    color: '#06B6D4',        // cyan
    bg: 'rgba(6,182,212,0.07)',
  },
  { 
    icon: '✨', 
    name: 'Design & UX', 
    desc: 'Premium branding & interfaces that leave a lasting impression.',
    color: '#F59E0B',        // amber
    bg: 'rgba(245,158,11,0.07)',
  },
  { 
    icon: '🚀', 
    name: 'Marketing & SEO', 
    desc: 'Rank higher, reach further, and grow your acquisition.',
    color: '#10B981',        // emerald
    bg: 'rgba(16,185,129,0.07)',
  },
  { 
    icon: '📈', 
    name: 'Business Growth', 
    desc: 'Strategy, consulting, and execution to scale your revenue.',
    color: '#EF4444',        // red
    bg: 'rgba(239,68,68,0.07)',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ translateY: -4 }}
      style={{
        borderRadius: '20px',
        background: '#E0E5EC',
        boxShadow: '8px 8px 16px rgba(163,177,198,0.55), -8px -8px 16px rgba(255,255,255,0.85)',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Colored top accent bar */}
      <div style={{
        height: '4px',
        background: `linear-gradient(90deg, ${service.color}, ${service.color}88)`,
      }} />

      <div style={{ padding: '18px 16px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Top row: icon + number */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* Icon bubble */}
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            background: service.bg,
            border: `1.5px solid ${service.color}33`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            flexShrink: 0,
          }}>
            {service.icon}
          </div>

          {/* Number badge */}
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            fontSize: '0.65rem',
            color: service.color,
            background: service.bg,
            border: `1px solid ${service.color}33`,
            borderRadius: '8px',
            padding: '2px 7px',
            letterSpacing: '0.05em',
          }}>
            {num}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 700,
          fontSize: '0.95rem',
          color: 'var(--text)',
          lineHeight: 1.25,
          margin: 0,
        }}>
          {service.name}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          margin: 0,
          flex: 1,
        }}>
          {service.desc}
        </p>

        {/* Arrow CTA */}
        <motion.div
          whileHover={{ x: 3 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.72rem',
            fontWeight: 600,
            fontFamily: 'var(--font-inter)',
            color: service.color,
            marginTop: '2px',
          }}
        >
          Explore <span style={{ fontSize: '0.8rem' }}>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section
      id="services"
      style={{ position: 'relative', padding: '80px 40px', background: 'transparent' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(32px, 6vw, 64px)', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            padding: '6px 18px',
            borderRadius: '20px',
            background: '#E0E5EC',
            boxShadow: 'inset 4px 4px 8px rgba(163,177,198,0.3), inset -4px -4px 8px rgba(255,255,255,0.5)',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.72rem',
            fontWeight: 600,
            color: 'var(--primary)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>Our Capabilities</div>

          <h2 style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            margin: '0 auto 14px',
            maxWidth: '700px',
          }}>
            Solutions Built for <span style={{ color: 'var(--primary)' }}>Your Growth.</span>
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-inter)',
            lineHeight: 1.6,
            maxWidth: '520px',
            margin: '0 auto',
          }}>
            Everything you need to build, grow, and scale your business online.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        /* ── DESKTOP ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          #services { padding: 60px 24px !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          #services { padding: 52px 16px !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px; }
        }

        /* ── MOBILE S ── */
        @media (max-width: 400px) {
          #services { padding: 40px 12px !important; }
          .services-grid { gap: 10px !important; }
        }

        /* ── HOVER shadow boost ── */
        .service-card:hover {
          box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.9) !important;
        }
      `}</style>
    </section>
  );
}
