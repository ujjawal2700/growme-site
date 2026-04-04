'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 48px',
    // Skeuomorphic dark bar header (not glassmorphism)
    background: scrolled 
      ? 'linear-gradient(180deg, #0a0a10 0%, #050508 100%)' 
      : 'linear-gradient(180deg, rgba(10,10,16,0.95) 0%, transparent 100%)',
    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05) inset' : 'none',
    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.8)' : '1px solid transparent',
    transition: 'background 0.3s, box-shadow 0.3s, border-color 0.3s',
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: 'var(--font-archivo)', fontWeight: 900,
    fontSize: '1.4rem',
    letterSpacing: '-0.02em',
    textDecoration: 'none',
    color: 'var(--white)',
  };

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-poppins)',
    fontSize: '0.72rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
  };

  const linksContainerStyle: React.CSSProperties = {
    display: typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches ? 'none' : 'flex',
    gap: '36px',
    listStyle: 'none',
    alignItems: 'center',
  };

  // Mobile navigation overlay
  const mobileOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--black)',
    zIndex: 99,
    display: mobileMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    padding: '24px',
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--white)';
  };
  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--text-muted)';
  };

  return (
    <>
      <nav style={navStyle}>
        <Link href="/" style={logoStyle}>
          GROW<span style={{ color: 'var(--purple)' }}>ME</span>
          <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</em>
        </Link>
        
        <ul style={linksContainerStyle} className="desktop-links">
          <li><Link href="/about" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>About</Link></li>
          <li><Link href="/#services" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Services</Link></li>
          <li><Link href="/blog" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Blog</Link></li>
          <li><Link href="/#testimonials" style={linkStyle} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Work</Link></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Button variant="outline" href="/contact" style={{ padding: '10px 22px' }}>
            Start a Project
          </Button>

          {/* Mobile hamburger toggle (Hidden on desktop via css class ideally, but using simple inline styles for quick implementation) */}
          <button 
            className="md-hidden"
            style={{ 
              display: 'block', 
              background: 'none', 
              border: 'none', 
              color: 'var(--white)', 
              fontSize: '1.5rem' 
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={mobileOverlayStyle}>
        <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{...linkStyle, fontSize: '1.2rem', color: 'var(--white)'}}>About</Link>
        <Link href="/#services" onClick={() => setMobileMenuOpen(false)} style={{...linkStyle, fontSize: '1.2rem', color: 'var(--white)'}}>Services</Link>
        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{...linkStyle, fontSize: '1.2rem', color: 'var(--white)'}}>Blog</Link>
        <Link href="/#testimonials" onClick={() => setMobileMenuOpen(false)} style={{...linkStyle, fontSize: '1.2rem', color: 'var(--white)'}}>Work</Link>
        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{...linkStyle, fontSize: '1.2rem', color: 'var(--accent)'}}>Start a Project</Link>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .md-hidden { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          nav { padding: 16px 24px !important; }
        }
      `}</style>
    </>
  );
}
