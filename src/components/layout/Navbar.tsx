'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 1024);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: mobile ? '1rem' : '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000
    }}>
      {/* THE NEUMORPHIC PILL */}
      <motion.div 
        animate={{ 
          padding: scrolled ? '12px 24px' : '16px 32px',
          borderRadius: scrolled ? '32px' : '40px'
        }}
        initial={false}
        style={{
          background: '#E0E5EC',
          boxShadow: '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s cubic-bezier(0.2, 1, 0.3, 1)'
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ textDecoration: 'none' }}>
           <div style={{
             fontFamily: 'var(--font-outfit)',
             fontWeight: 800,
             fontSize: '1.4rem',
             color: 'var(--text)',
             letterSpacing: '-0.02em',
             display: 'flex',
             alignItems: 'center',
             gap: '4px'
           }}>
             GrowMe<span style={{ 
               width: '8px', height: '8px', background: 'var(--primary)', 
               borderRadius: '50%', marginTop: '8px',
               boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
             }} />
           </div>
        </Link>

        {/* DESKTOP LINKS */}
        {!mobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
            ))}
            <Link href="/contact" style={{ textDecoration: 'none', marginLeft: '16px' }}>
              <motion.div 
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '24px',
                  background: 'var(--primary)',
                  color: '#fff',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  boxShadow: '4px 4px 10px rgba(59, 130, 246, 0.3)'
                }}
              >
                Let&apos;s Talk
              </motion.div>
            </Link>
          </div>
        )}

        {/* MOBILE TRIGGER */}
        {mobile && (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              boxShadow: isMenuOpen 
                ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                : '4px 4px 8px rgba(163, 177, 198, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.8)',
              color: 'var(--text)',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && mobile && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            style={{
              marginTop: '1rem',
              background: '#E0E5EC',
              boxShadow: '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  padding: '8px 16px'
                }}
              >
                {link.name}
              </Link>
            ))}
            <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '8px 0' }} />
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--primary)',
                textDecoration: 'none',
                padding: '8px 16px'
              }}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textDecoration: 'none',
        padding: '10px 20px',
        borderRadius: '16px',
        fontFamily: 'var(--font-inter)',
        fontSize: '0.85rem',
        fontWeight: 500,
        color: isHovered ? 'var(--primary)' : 'var(--text)',
        background: '#E0E5EC',
        boxShadow: isHovered 
          ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.6)'
          : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </Link>
  );
}
