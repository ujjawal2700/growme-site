'use client';

import React from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import { motion } from 'framer-motion';

const industries = [
  {
    icon: '🛍️',
    name: 'E-Commerce',
    detail: 'Custom Shopify stores, checkout optimization, product catalog management and conversion funnels built to drive revenue.',
    color: '#F59E0B',
    wide: true,   // spans 2 cols on desktop
  },
  {
    icon: '⚡',
    name: 'Quick Commerce',
    detail: '10-min delivery platforms & real-time logistics dashboards.',
    color: '#EF4444',
    wide: false,
  },
  {
    icon: '🍔',
    name: 'Food Delivery',
    detail: 'Restaurant apps, ordering systems & kitchen management.',
    color: '#F97316',
    wide: false,
  },
  {
    icon: '🔗',
    name: 'Web3 & Crypto',
    detail: 'DeFi platforms, NFT marketplaces & DAO tooling — built for the decentralized web.',
    color: '#8B5CF6',
    wide: true,   // spans 2 cols
  },
  {
    icon: '🏥',
    name: 'Healthcare',
    detail: 'Telemedicine apps, patient portals & health dashboards.',
    color: '#10B981',
    wide: false,
  },
  {
    icon: '🎓',
    name: 'EdTech',
    detail: 'LMS platforms, live classes & progress tracking.',
    color: '#3B82F6',
    wide: false,
  },
  {
    icon: '🏢',
    name: 'SaaS & Startups',
    detail: 'From MVPs to full products — subscription billing, onboarding flows, and growth infrastructure that scales.',
    color: '#06B6D4',
    wide: true,   // spans all 3 cols on last row
  },
];

function IndustryCard({ ind, i }: { ind: typeof industries[0]; i: number }) {
  return (
    <motion.div
      className={`ind-card${ind.wide ? ' ind-wide' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: i * 0.07 }}
      whileHover={{ translateY: -4 }}
      style={{
        borderRadius: '22px',
        background: '#F8FAFC',
        boxShadow: '8px 8px 16px rgba(163,177,198,0.5), -8px -8px 16px rgba(255,255,255,0.85)',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: ind.wide ? 'row' : 'column',
        alignItems: ind.wide ? 'center' : 'flex-start',
      }}
    >
      {/* Colored side bar (wide) or top bar (narrow) */}
      {ind.wide ? (
        <div style={{
          width: '4px',
          alignSelf: 'stretch',
          background: `linear-gradient(180deg, ${ind.color}, ${ind.color}55)`,
          flexShrink: 0,
        }} />
      ) : (
        <div style={{
          height: '3px',
          width: '100%',
          background: `linear-gradient(90deg, ${ind.color}, ${ind.color}55)`,
        }} />
      )}

      {/* Card body */}
      <div style={{
        padding: ind.wide ? '22px 24px' : '14px 14px 18px',
        flex: 1,
        display: 'flex',
        flexDirection: ind.wide ? 'row' : 'column',
        alignItems: ind.wide ? 'center' : 'flex-start',
        gap: ind.wide ? '20px' : '10px',
      }}>
        {/* Icon */}
        <div style={{
          width: ind.wide ? '52px' : '38px',
          height: ind.wide ? '52px' : '38px',
          minWidth: ind.wide ? '52px' : '38px',
          borderRadius: ind.wide ? '16px' : '12px',
          background: `${ind.color}18`,
          border: `1.5px solid ${ind.color}33`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: ind.wide ? '1.6rem' : '1.2rem',
        }}>
          {ind.icon}
        </div>

        {/* Text block */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <h4 style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: ind.wide ? '1.05rem' : '0.88rem',
              color: 'var(--text)',
              margin: 0,
              lineHeight: 1.2,
            }}>
              {ind.name}
            </h4>
            <span style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              fontSize: '0.58rem',
              color: ind.color,
              background: `${ind.color}15`,
              border: `1px solid ${ind.color}33`,
              borderRadius: '6px',
              padding: '2px 7px',
              marginLeft: '8px',
              whiteSpace: 'nowrap',
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: ind.wide ? '0.82rem' : '0.7rem',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
            margin: 0,
          }}>
            {ind.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustriesScroll() {
  return (
    <section id="industries" style={{
      padding: 'clamp(56px, 8vw, 110px) clamp(16px, 5vw, 48px)',
      position: 'relative',
      background: 'transparent',
    }}>
      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: 'clamp(24px, 4vw, 48px)' }}>
        <SectionEyebrow>Sectors We Dominate</SectionEyebrow>
        <h2 style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 800,
          fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
          lineHeight: 1.1,
          color: 'var(--text)',
          letterSpacing: '-0.02em',
          marginTop: '12px',
        }}>
          Digital Success<br />Across Industries
        </h2>
      </div>

      {/* Bento grid */}
      <div className="bento-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {industries.map((ind, i) => (
          <IndustryCard key={i} ind={ind} i={i} />
        ))}
      </div>

      <style>{`
        /* ─── DESKTOP bento: 3 columns ─── */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto;
          gap: 18px;
        }

        /* Wide cards span 2 columns, last wide spans full row */
        .ind-wide:nth-child(1) { grid-column: span 2; }
        .ind-wide:nth-child(4) { grid-column: span 2; }
        .ind-wide:nth-child(7) { grid-column: span 3; }

        /* ─── TABLET: 2 columns ─── */
        @media (max-width: 900px) {
          #industries { padding: 52px 18px !important; }
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px; }
          .ind-wide:nth-child(1) { grid-column: span 2; }
          .ind-wide:nth-child(4) { grid-column: span 2; }
          .ind-wide:nth-child(7) { grid-column: span 2; }
        }

        /* ─── MOBILE: 2 columns, alternate wide full-width ─── */
        @media (max-width: 640px) {
          #industries { padding: 44px 14px !important; }
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px; }

          /* Override: wide cards take full width on mobile */
          .ind-wide { grid-column: span 2 !important; flex-direction: row !important; align-items: center !important; }
          .ind-wide .ind-bar-side { display: block; }
        }

        /* ─── MOBILE S ─── */
        @media (max-width: 400px) {
          #industries { padding: 36px 12px !important; }
          .bento-grid { gap: 8px !important; }
        }

        .ind-card:hover {
          box-shadow: 10px 10px 20px rgba(163,177,198,0.55), -10px -10px 20px rgba(255,255,255,0.9) !important;
        }
      `}</style>
    </section>
  );
}
