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
          background: '#F8FAFC',
          boxShadow: '9px 9px 16px rgba(203, 213, 225, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.8)',
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
             gap: '8px'
           }}>
             GrowMe
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
                ? 'inset 4px 4px 8px rgba(203, 213, 225, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                : '4px 4px 8px rgba(203, 213, 225, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.8)',
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

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(224, 229, 236, 0.85)',
              backdropFilter: 'blur(20px) saturate(180%)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px'
            }}
          >
            {/* CLOSE BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#F8FAFC',
                boxShadow: '4px 4px 10px rgba(203, 213, 225, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.6)',
                border: 'none',
                color: 'var(--text)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </motion.button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'center' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      color: 'var(--text)',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                style={{ marginTop: '20px' }}
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '20px 48px',
                      borderRadius: '40px',
                      background: 'var(--primary)',
                      color: '#fff',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    Get Started
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* FOOTER DECOR */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               style={{
                 position: 'absolute',
                 bottom: '3rem',
                 fontFamily: 'var(--font-inter)',
                 fontSize: '0.8rem',
                 color: 'var(--text-muted)',
                 letterSpacing: '0.1em',
                 textTransform: 'uppercase'
               }}
            >
              GrowMe Agency · Mumbai, India
            </motion.div>
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
        background: '#F8FAFC',
        boxShadow: isHovered 
          ? 'inset 4px 4px 8px rgba(203, 213, 225, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.6)'
          : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </Link>
  );
}
