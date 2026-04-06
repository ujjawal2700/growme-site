'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = "GROWME".split("");

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  // Start hidden if we've already shown it this session
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show if NOT already seen in this browser session
    if (sessionStorage.getItem('growme_loaded')) {
      return; // skip — already shown
    }

    // First load: show it and mark session
    setShow(true);
    document.body.style.overflow = 'hidden';

    // Randomized but steady progress for a premium feel
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            document.body.style.overflow = 'unset';
            // Mark as shown so it never appears again this session
            sessionStorage.setItem('growme_loaded', '1');
          }, 800); 
          return 100;
        }
        const step = prev < 30 ? 12 : prev < 70 ? 8 : 5;
        return Math.min(prev + (Math.random() * step + 5), 100);
      });
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: 'blur(10px)',
            transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#F8FAFC',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* INTERACTIVE MESH GRADIENT BACKDROP */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.4 }}>
            <motion.div 
              animate={{ 
                x: [-100, 100, -100], 
                y: [-100, 50, -100],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <motion.div 
              animate={{ 
                x: [100, -100, 100], 
                y: [100, -50, 100],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />
          </div>

          {/* CHECKERED GRID OVERLAY */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(203, 213, 225, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(203, 213, 225, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }} />

          {/* MAIN CENTERPIECE */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
            
            {/* FLOATING GLASS PLATE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                width: '240px',
                height: '240px',
                borderRadius: '60px',
                background: '#F8FAFC',
                boxShadow: '20px 20px 40px rgba(203, 213, 225, 0.5), -20px -20px 40px rgba(255, 255, 255, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* THE MORPHING G LOGO */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '120px',
                  height: '120px',
                  position: 'relative'
                }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Signature G - Adjusted starting point for larger gap */}
                  <motion.path 
                    d="M82 35 A38 38 0 1 0 82 68 L82 52 H55"
                    stroke="var(--primary)" 
                    strokeWidth="9" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 0.5 }}
                    style={{ filter: 'url(#glow)' }}
                  />
                  
                  {/* Outer Progress Ring */}
                  <circle 
                    cx="50" cy="50" r="48" 
                    stroke="rgba(203, 213, 225, 0.1)" 
                    strokeWidth="1" 
                  />
                  <motion.circle 
                    cx="50" cy="50" r="48" 
                    stroke="var(--primary)" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    style={{
                      pathLength: progress / 100,
                      opacity: 0.3,
                      transform: 'rotate(-90deg)',
                      transformOrigin: '50% 50%'
                    }}
                  />
                </svg>
              </motion.div>

              {/* FLOATING ORBS IN CORNERS */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '40px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                }}
              />
            </motion.div>

            {/* STAGGERED TEXT REVEAL */}
            <div style={{ marginTop: '50px', display: 'flex', gap: '8px' }}>
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                  animate={{ 
                    opacity: progress > (index * 15) ? 1 : 0,
                    y: progress > (index * 15) ? 0 : 10,
                    filter: progress > (index * 15) ? 'blur(0px)' : 'blur(5px)'
                  }}
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    letterSpacing: '0.2em',
                    color: 'var(--text)',
                    textShadow: '2px 2px 4px rgba(203, 213, 225, 0.3)'
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* SUBTITLE REVEAL */}
            <motion.div
              animate={{ opacity: progress > 90 ? 1 : 0 }}
              style={{
                marginTop: '15px',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                opacity: 0.6
              }}
            >
              Excellence Redefined
            </motion.div>

            {/* PERCENTAGE INDICATOR */}
            <div style={{
              position: 'fixed',
              bottom: '50px',
              fontFamily: 'var(--font-outfit)',
              fontSize: '4rem',
              fontWeight: 900,
              color: 'rgba(203, 213, 225, 0.1)',
              userSelect: 'none',
              pointerEvents: 'none'
            }}>
              {Math.floor(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
