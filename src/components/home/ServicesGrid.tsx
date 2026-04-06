'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* ─── Animated Skeleton Illustrations ─── */

function WebDevSkeleton() {
  return (
    <div style={{ padding: '20px 16px 8px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FCA5A5' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FCD34D' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6EE7B7' }} />
        <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#E5E7EB', marginLeft: '6px' }} />
      </div>
      {[90, 70, 80, 55, 75, 60].map((w, i) => (
        <motion.div key={i}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          style={{
            height: '7px', borderRadius: '3px', width: w + '%',
            background: i % 3 === 0 ? '#BFDBFE' : i % 3 === 1 ? '#DDD6FE' : '#E5E7EB',
            marginLeft: i % 2 === 1 ? '12px' : '0'
          }}
        />
      ))}
    </div>
  );
}

function MobileAppSkeleton() {
  const msgs = [
    { text: 'Your order is ready! 🎉', self: false },
    { text: 'On my way 🏃', self: true },
    { text: 'Arrived at location.', self: false },
    { text: 'Thanks! 👍', self: true },
  ];
  return (
    <div style={{ padding: '16px 14px 8px', flex: 1 }}>
      <div style={{ border: '1.5px solid #E5E7EB', borderRadius: '14px', padding: '10px', background: '#FAFAFA' }}>
        {msgs.map((m, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: m.self ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.3 }}
            style={{ display: 'flex', justifyContent: m.self ? 'flex-end' : 'flex-start', marginBottom: '6px' }}
          >
            <div style={{
              maxWidth: '75%', padding: '5px 9px', borderRadius: '10px',
              background: m.self ? '#8B5CF6' : '#E5E7EB',
              color: m.self ? '#fff' : '#374151',
              fontSize: '0.6rem', fontFamily: 'var(--font-inter)', fontWeight: 500
            }}>
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AISkeleton() {
  return (
    <div style={{ padding: '16px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 160 100" style={{ width: '100%', maxWidth: '170px' }}>
        {[24, 80, 136].map((x, i) => (
          <motion.line key={i} x1="80" y1="30" x2={x} y2="62"
            stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}
          />
        ))}
        {[
          { cx: 80, cy: 22, r: 16, fill: '#06B6D4', label: 'AI', white: true },
          { cx: 24, cy: 68, r: 12, fill: '#E5E7EB', label: 'CRM', white: false },
          { cx: 80, cy: 68, r: 12, fill: '#E5E7EB', label: 'Email', white: false },
          { cx: 136, cy: 68, r: 12, fill: '#E5E7EB', label: 'Data', white: false },
        ].map((n, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.3 }}>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} />
            <text x={n.cx} y={n.cy + 3.5} textAnchor="middle"
              fill={n.white ? '#fff' : '#6B7280'} fontSize="6.5" fontWeight="700">{n.label}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function DesignSkeleton() {
  const swatches = ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981', '#EF4444'];
  return (
    <div style={{ padding: '20px 16px 8px', flex: 1 }}>
      <div style={{ border: '1.5px dashed #D1D5DB', borderRadius: '10px', padding: '10px', marginBottom: '10px', background: '#FAFAFA' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <motion.div whileInView={{ scale: [0.8, 1] }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            style={{ width: '32px', height: '32px', borderRadius: '7px', background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center' }}>
            <div style={{ height: '6px', borderRadius: '3px', background: '#E5E7EB', width: '70%' }} />
            <div style={{ height: '5px', borderRadius: '3px', background: '#E5E7EB', width: '50%' }} />
          </div>
        </div>
        <div style={{ height: '5px', borderRadius: '3px', background: '#E5E7EB', marginBottom: '4px' }} />
        <div style={{ height: '5px', borderRadius: '3px', background: '#E5E7EB', width: '80%' }} />
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
        {swatches.map((c, i) => (
          <motion.div key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06, type: 'spring' }}
            style={{ width: '18px', height: '18px', borderRadius: '50%', background: c }}
          />
        ))}
      </div>
    </div>
  );
}

function MarketingSkeleton() {
  const bars = [40, 60, 45, 80, 55, 90, 70];
  return (
    <div style={{ padding: '16px 14px 8px', flex: 1 }}>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
        {[{ l: 'CTR', v: '4.2%', up: true }, { l: 'CPC', v: '₹12', up: false }, { l: 'ROAS', v: '6.8x', up: true }].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: '6px 8px', border: '1px solid #E5E7EB', borderRadius: '8px', background: '#FAFAFA' }}>
            <div style={{ fontSize: '0.5rem', color: '#9CA3AF', fontFamily: 'var(--font-inter)', fontWeight: 600, marginBottom: '2px' }}>{s.l}</div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: s.up ? '#10B981' : '#EF4444', fontFamily: 'var(--font-outfit)' }}>{s.v}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '50px' }}>
        {bars.map((h, i) => (
          <motion.div key={i}
            initial={{ scaleY: 0, originY: 1 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
            style={{ flex: 1, height: h + '%', borderRadius: '3px 3px 0 0',
              background: i === 5 ? '#10B981' : i === 3 ? '#3B82F6' : '#E5E7EB' }}
          />
        ))}
      </div>
    </div>
  );
}

function GrowthSkeleton() {
  return (
    <div style={{ padding: '16px 14px 8px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        { label: 'Revenue', value: '↑ 127%', color: '#10B981' },
        { label: 'Leads', value: '↑ 340%', color: '#3B82F6' },
        { label: 'Conv. Rate', value: '↑ 89%', color: '#8B5CF6' },
      ].map((kpi, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.4 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 12px', borderRadius: '10px', border: '1px solid #F3F4F6', background: '#FAFAFA' }}
        >
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.65rem', color: '#6B7280', fontWeight: 600 }}>{kpi.label}</span>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.78rem', fontWeight: 800, color: kpi.color }}>{kpi.value}</span>
        </motion.div>
      ))}
      <div style={{ marginTop: '2px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontSize: '0.55rem', color: '#9CA3AF', fontFamily: 'var(--font-inter)' }}>Q4 Goal</span>
          <span style={{ fontSize: '0.55rem', color: '#10B981', fontFamily: 'var(--font-inter)', fontWeight: 700 }}>78%</span>
        </div>
        <div style={{ height: '5px', borderRadius: '3px', background: '#E5E7EB', overflow: 'hidden' }}>
          <motion.div initial={{ width: 0 }} whileInView={{ width: '78%' }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg,#10B981,#3B82F6)' }}
          />
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    id: 'website-development', name: 'Website Development',
    desc: 'Beautiful, fast websites that convert visitors into loyal customers.',
    color: '#3B82F6', skeleton: <WebDevSkeleton />,
  },
  {
    id: 'mobile-apps', name: 'Mobile Apps',
    desc: 'Sleek native & cross-platform apps for iOS and Android.',
    color: '#8B5CF6', skeleton: <MobileAppSkeleton />,
  },
  {
    id: 'ai-and-automation', name: 'AI & Automation',
    desc: 'Smart workflows that run your business on autopilot.',
    color: '#06B6D4', skeleton: <AISkeleton />,
  },
  {
    id: 'design-and-ux', name: 'Design & UX',
    desc: 'Premium branding & interfaces that leave a lasting impression.',
    color: '#F59E0B', skeleton: <DesignSkeleton />,
  },
  {
    id: 'marketing-and-seo', name: 'Marketing & SEO',
    desc: 'Rank higher, reach further, and grow your acquisition.',
    color: '#10B981', skeleton: <MarketingSkeleton />,
  },
  {
    id: 'business-growth', name: 'Business Growth',
    desc: 'Strategy, consulting, and execution to scale your revenue.',
    color: '#EF4444', skeleton: <GrowthSkeleton />,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" style={{ position: 'relative', padding: '80px 40px', background: 'transparent' }}>
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
            display: 'inline-block', padding: '6px 18px', borderRadius: '20px', background: '#E0E5EC',
            boxShadow: 'inset 4px 4px 8px rgba(163,177,198,0.3), inset -4px -4px 8px rgba(255,255,255,0.5)',
            fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--primary)',
            letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: '16px',
          }}>Our Capabilities</div>

          <h2 style={{
            fontFamily: 'var(--font-outfit)', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: 1.1,
            color: 'var(--text)', letterSpacing: '-0.02em',
            margin: '0 auto 14px', maxWidth: '700px',
          }}>
            Solutions Built for <span style={{ color: 'var(--primary)' }}>Your Growth.</span>
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: 'var(--text-muted)',
            fontFamily: 'var(--font-inter)', lineHeight: 1.6,
            maxWidth: '520px', margin: '0 auto',
          }}>
            Everything you need to build, grow, and scale your business online.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="services-bento">
          {services.map((s, i) => (
            <motion.a
              key={s.id}
              href="/contact"
              className="service-bento-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                background: '#fff',
                borderRadius: '20px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.03)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                cursor: 'pointer',
                minHeight: '240px',
              }}
            >
              {/* Illustration area */}
              <div style={{ flex: 1, borderBottom: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden', background: '#FAFAFA' }}>
                <div style={{ height: '3px', background: 'linear-gradient(90deg,' + s.color + ',' + s.color + '66)' }} />
                {s.skeleton}
              </div>

              {/* Text area */}
              <div style={{ padding: '16px 18px 18px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-outfit)', fontWeight: 700,
                  fontSize: '0.95rem', color: '#111827', margin: '0 0 5px 0', lineHeight: 1.3
                }}>
                  {s.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.78rem',
                  color: '#6B7280', lineHeight: 1.5, margin: '0 0 10px 0'
                }}>
                  {s.desc}
                </p>
                <motion.div whileHover={{ x: 3 }} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  color: s.color, fontFamily: 'var(--font-inter)',
                  fontSize: '0.75rem', fontWeight: 700
                }}>
                  Explore <span style={{ fontSize: '0.82rem' }}>→</span>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .services-bento {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .service-bento-card:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04) !important;
        }
        @media (max-width: 1024px) {
          #services { padding: 60px 24px !important; }
          .services-bento { grid-template-columns: repeat(2, 1fr) !important; gap: 16px; }
        }
        @media (max-width: 768px) {
          #services { padding: 52px 16px !important; }
          .services-bento { grid-template-columns: repeat(2, 1fr) !important; gap: 12px; }
        }
        @media (max-width: 400px) {
          .services-bento { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
