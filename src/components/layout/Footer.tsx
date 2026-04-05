'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '100px 48px 60px',
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* MASSIVE BACKGROUND TEXT (Extremely Subtle) */}
      <div style={{
        position: 'absolute',
        bottom: '-0.1em',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-outfit)',
        fontWeight: 900,
        fontSize: '15vw',
        lineHeight: 1,
        color: 'rgba(0,0,0,0.02)',
        letterSpacing: '-0.05em',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 0,
        width: '100%',
      }}>
        GROWME
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '60px',
          marginBottom: '80px',
        }}>
          {/* BRAND COLUMN */}
          <div style={{ flex: '1 1 300px' }}>
            <div style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              fontSize: '1.5rem',
              color: 'var(--text)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              GrowMe<span style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%', marginTop: '6px' }} />
            </div>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '260px'
            }}>
              We build high-end digital experiences that help your business grow.
            </p>
          </div>

          {/* NAV COLUMNS */}
          <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>Agency</span>
              <Link href="/about" style={linkStyle}>About Us</Link>
              <Link href="/#services" style={linkStyle}>Services</Link>
              <Link href="/contact" style={linkStyle}>Contact</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>Socials</span>
              <a href="#" style={linkStyle}>LinkedIn</a>
              <a href="#" style={linkStyle}>Instagram</a>
              <a href="#" style={linkStyle}>Twitter / X</a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid rgba(0,0,0,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontFamily: 'var(--font-inter)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          fontWeight: 500
        }}>
          <div>© {currentYear} GrowMe Digital Ltd.</div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 60px 24px 40px !important; }
        }
      `}</style>
    </footer>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  fontSize: '0.9rem',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s',
};
