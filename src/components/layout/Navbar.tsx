'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Work', href: '/#work' },
];

function AuroraLink({ children, href, onHover }: { children: React.ReactNode; href: string; onHover: (e: React.MouseEvent) => void }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link 
      href={href}
      onMouseEnter={(e) => {
        setIsHovered(true);
        onHover(e);
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: '16px 24px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isHovered ? '#fff' : 'rgba(255,255,255,0.4)',
        fontFamily: 'var(--font-space-mono)',
        fontSize: '0.65rem',
        textTransform: 'uppercase',
        letterSpacing: '0.25em',
        transition: 'color 0.4s cubic-bezier(0.2, 1, 0.3, 1)',
        zIndex: 2
      }}
    >
      <span style={{ position: 'relative' }}>
        {children}
        <motion.span 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: 0,
            right: 0,
            height: '1px',
            background: 'var(--accent)',
            transformOrigin: 'left',
            boxShadow: '0 0 10px var(--accent)'
          }}
        />
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [time, setTime] = useState('');
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const auroraX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const [showAurora, setShowAurora] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().slice(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const depth = useTransform(scrollY, [0, 5000], [0, 100]);
  const displayDepth = useSpring(depth, { stiffness: 100, damping: 30 });
  
  const navHeight = mobile ? '60px' : '70px';
  const navTop = useTransform(scrollY, [0, 100], ['2.5rem', '1.5rem']);
  const springNavTop = useSpring(navTop, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
  };

  return (
    <>
      <motion.nav
        onMouseEnter={() => setShowAurora(true)}
        onMouseLeave={() => setShowAurora(false)}
        onMouseMove={handleMouseMove}
        style={{
          position: 'fixed',
          left: '50%',
          x: '-50%',
          top: springNavTop,
          width: '95vw',
          maxWidth: '1400px',
          height: navHeight,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(40px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: mobile ? '0 24px' : '0 40px',
          borderRadius: '2px', 
          border: 'none',
          boxShadow: '0 20px 80px rgba(0,0,0,0.6)',
          overflow: 'hidden'
        }}
      >
        {/* AURORA LIGHT BLOB */}
        {!mobile && (
          <motion.div 
            style={{
              position: 'absolute',
              top: '-50%',
              left: auroraX,
              width: '300px',
              height: '200%',
              x: '-50%',
              background: 'radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, rgba(255, 0, 255, 0.03) 50%, transparent 100%)',
              opacity: showAurora ? 1 : 0,
              pointerEvents: 'none',
              zIndex: 1,
              filter: 'blur(40px)',
              transition: 'opacity 0.8s ease'
            }}
          />
        )}

        {/* LEFT HUD: IDENTITY & DEPTH */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', zIndex: 2 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ 
              fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: mobile ? '1.2rem' : '1.4rem', 
              color: '#fff', letterSpacing: '-0.04em' 
            }}>
              G<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
          </Link>
          {!mobile && (
            <div style={{ 
              fontFamily: 'var(--font-space-mono)', fontSize: '0.45rem', 
              color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em', 
              textTransform: 'uppercase', marginTop: '4px' 
            }}>
              SYS_STAT: PASSIVE // D-Z: {displayDepth.get().toFixed(2)}
            </div>
          )}
        </div>

        {/* CENTER: NAVIGATION (Desktop Only) */}
        {!mobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2 }}>
            {navLinks.map((link) => (
              <AuroraLink 
                key={link.name} 
                href={link.href}
                onHover={(e) => mouseX.set(e.clientX - (e.currentTarget.parentElement?.parentElement?.getBoundingClientRect().left || 0))}
              >
                {link.name}
              </AuroraLink>
            ))}
          </div>
        )}

        {/* RIGHT HUD: TIME & ACTION */}
        <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? '16px' : '40px', zIndex: 2 }}>
          {!mobile && (
            <div style={{ 
              fontFamily: 'var(--font-space-mono)', fontSize: '0.45rem', 
              color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em', textTransform: 'uppercase' 
            }}>
              {time}
            </div>
          )}

          {mobile ? (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '1.2rem',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          ) : (
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ letterSpacing: '0.4em', color: '#fff' }}
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-space-mono)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  transition: 'all 0.4s cubic-bezier(0.2, 1, 0.3, 1)'
                }}
              >
                Initiate Project
              </motion.div>
            </Link>
          )}
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        style={{
          position: 'fixed',
          top: 'calc(2.5rem + 70px)', // Rough estimate, fixed below with scrollY integration if needed
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95vw',
          maxWidth: '1400px',
          background: 'rgba(5, 5, 5, 0.95)',
          backdropFilter: 'blur(30px)',
          zIndex: 999,
          borderRadius: '2px',
          overflow: 'hidden',
          display: mobile ? 'block' : 'none',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.8rem',
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '8px 0' }} />
          <Link 
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.8rem',
              color: 'var(--accent)',
              textDecoration: 'none',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 800
            }}
          >
            [ START PROJECT ]
          </Link>
        </div>
      </motion.div>
    </>
  );
}
