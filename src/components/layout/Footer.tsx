'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerStyle: React.CSSProperties = {
    background: '#020204',
    padding: '100px 48px 40px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  };

  const backgroundTextStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '-0.1em',
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: 'var(--font-syne)',
    fontWeight: 900,
    fontSize: '12vw', // Reduced further to 12vw to ensure the full "GROWME" never clips
    lineHeight: 1,
    color: 'rgba(255,255,255,0.15)', // Visible yet light/subtle
    letterSpacing: '-0.03em',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    pointerEvents: 'none',
    zIndex: 1,
    width: '100%',
  };

  const contentWrapperStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2, // Sits above the background text
    width: '100%',
  };

  const sidebarStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '60px',
    marginBottom: '80px',
  };

  const navColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-space-mono)',
    fontSize: '0.7rem',
    color: 'rgba(255,255,255,0.4)',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    transition: 'color 0.2s',
  };

  const headerLabelStyle: React.CSSProperties = {
    ...linkStyle,
    color: '#ffffff',
    fontSize: '0.6rem',
    marginBottom: '8px',
    opacity: 0.8,
  };

  const footerBottomStyle: React.CSSProperties = {
    paddingTop: '32px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    fontFamily: 'var(--font-space-mono)',
    fontSize: '0.6rem',
    color: 'rgba(255,255,255,0.2)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#ffffff';
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
  };

  return (
    <footer style={containerStyle}>
      {/* Massive Background Text */}
      <div style={backgroundTextStyle}>GROWME</div>

      {/* Overlaid Content */}
      <div style={contentWrapperStyle}>
        <div style={sidebarStyle}>
          <div style={navColumnStyle}>
            <span style={headerLabelStyle}>Navigation</span>
            <Link href="/about" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>The Agency</Link>
            <Link href="/#services" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Capabilities</Link>
            <Link href="/blog" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>The Journal</Link>
            <Link href="/#testimonials" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Our Impact</Link>
          </div>

          <div style={navColumnStyle}>
            <span style={headerLabelStyle}>Get in Touch</span>
            <Link href="mailto:hello@growme.agency" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>hello@growme.agency</Link>
            <Link href="/contact" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Submit Brief</Link>
          </div>

          <div style={navColumnStyle}>
            <span style={headerLabelStyle}>Socials</span>
            <a href="#" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Twitter / X</a>
            <a href="#" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>LinkedIn</a>
            <a href="#" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Instagram</a>
          </div>
        </div>

        <div style={footerBottomStyle}>
          <div>© {currentYear} GROWME DIGITAL LTD.</div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 60px 24px 32px !important; }
          .sidebarStyle { gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
