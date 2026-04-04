import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const footerStyle: React.CSSProperties = {
    padding: '60px 48px 40px',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    background: 'var(--black)',
  };

  const topStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '48px',
    flexWrap: 'wrap',
    gap: '40px',
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: 'var(--font-syne)',
    fontWeight: 800,
    fontSize: '2rem',
    letterSpacing: '-0.02em',
    color: 'var(--white)',
    textDecoration: 'none',
  };

  const taglineStyle: React.CSSProperties = {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    marginTop: '6px',
    fontStyle: 'italic',
  };

  const linksGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 140px)',
    gap: '40px',
  };

  const colTitleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-space-mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '16px',
  };

  const linkStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    marginBottom: '8px',
    transition: 'color 0.2s',
  };

  const bottomStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '28px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    flexWrap: 'wrap',
    gap: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div style={topStyle}>
        <div>
          <Link href="/" style={logoStyle}>
            GROW<span style={{ color: 'var(--purple)' }}>ME</span>
          </Link>
          <div style={taglineStyle}>Boost your social media & digital presence.</div>
        </div>
        
        <div style={linksGridStyle} className="footer-links-grid">
          <div>
            <div style={colTitleStyle}>Services</div>
            <Link href="#" style={linkStyle}>Web Development</Link>
            <Link href="#" style={linkStyle}>App Development</Link>
            <Link href="#" style={linkStyle}>AI Chatbots</Link>
            <Link href="#" style={linkStyle}>UI/UX Design</Link>
            <Link href="#" style={linkStyle}>Marketing</Link>
          </div>
          <div>
            <div style={colTitleStyle}>Industries</div>
            <Link href="#" style={linkStyle}>E-Commerce</Link>
            <Link href="#" style={linkStyle}>Quick Commerce</Link>
            <Link href="#" style={linkStyle}>Food Delivery</Link>
            <Link href="#" style={linkStyle}>Web3</Link>
            <Link href="#" style={linkStyle}>SaaS</Link>
          </div>
          <div>
            <div style={colTitleStyle}>Company</div>
            <Link href="/about" style={linkStyle}>About</Link>
            <Link href="/#testimonials" style={linkStyle}>Work</Link>
            <Link href="/blog" style={linkStyle}>Blog</Link>
            <Link href="/contact" style={linkStyle}>Contact</Link>
            <Link href="/terms" style={linkStyle}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
      
      <div style={bottomStyle}>
        <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
          © {new Date().getFullYear()} GrowMe · All Rights Reserved · growme.in
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="#" style={{...linkStyle, fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em'}}>Instagram</Link>
          <Link href="#" style={{...linkStyle, fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em'}}>LinkedIn</Link>
          <Link href="/contact" style={{...linkStyle, fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em'}}>WhatsApp</Link>
          <Link href="#" style={{...linkStyle, fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em'}}>Twitter</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 48px 24px 32px !important; }
          .footer-links-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
