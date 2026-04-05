'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            document.body.style.overflow = 'unset';
          }, 1200);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 1;
        return Math.min(prev + step, 100);
      });
    }, 100);

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
            transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#050505',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* AURORA BRAND BACKDROP */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.05) 40%, transparent 70%)',
              filter: 'blur(100px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          {/* SCANNING GRID */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundSize: '60px 60px',
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)',
            maskImage: 'radial-gradient(circle at center, black, transparent)',
            pointerEvents: 'none',
            zIndex: 1
          }} />

          {/* MAIN BRAND MODULE */}
          <div style={{ position: 'relative', marginBottom: '80px', zIndex: 2 }}>
            
            {/* BASE ENTITY (Hollow) */}
            <div style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: '10rem',
              color: 'rgba(255,255,255,0.03)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              position: 'relative',
              WebkitTextStroke: '2px rgba(255,255,255,0.08)'
            }}>
              G
            </div>

            {/* SYNC JITTER FILL LAYER (Motion Graphic) */}
            <motion.div 
              animate={{ 
                x: progress < 100 ? [0, -1, 1, -1, 0] : 0, 
                opacity: progress < 100 ? [0.8, 1, 0.8] : 1 
              }}
              transition={{ duration: 0.1, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: '10rem',
                color: 'var(--accent)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                zIndex: 2,
                // LIQUID SLOSH MASK
                clipPath: `inset(${100 - progress}% 0 0 0)`, 
                textShadow: '0 0 40px rgba(0, 255, 255, 0.6)'
              }}
            >
              G
              {/* DIAGONAL SHIMMER / GLINT */}
              <motion.div 
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  mixBlendMode: 'overlay',
                  pointerEvents: 'none'
                }}
              />
            </motion.div>

            {/* THE BRAND DOT */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ 
                scale: progress === 100 ? 1 : 0,
                rotate: progress === 100 ? 0 : 45
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                position: 'absolute',
                right: '-10%',
                bottom: '12%',
                width: '1.4rem',
                height: '1.4rem',
                background: 'var(--accent)',
                boxShadow: '0 0 30px var(--accent)',
                zIndex: 4
              }}
            />
          </div>

          {/* UX HUD */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            zIndex: 5
          }}>
            <div style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.6em',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <span style={{ color: 'var(--accent)' }}>PREPARING GROWTH</span>
              <span style={{ minWidth: '45px', textAlign: 'right', color: '#fff', fontWeight: 800 }}>
                {Math.min(progress, 100)}%
              </span>
            </div>
            
            <div style={{
              width: '280px',
              height: '1px',
              background: 'rgba(255,255,255,0.06)',
              position: 'relative'
            }}>
              <motion.div 
                style={{
                  position: 'absolute',
                  top: '-1px',
                  left: 0,
                  height: '3px',
                  width: `${progress}%`,
                  background: 'var(--accent)',
                  boxShadow: '0 0 20px var(--accent)'
                }}
              />
            </div>
          </div>

          {/* TELEMETRY CORNER */}
          <div style={{
            position: 'absolute',
            bottom: '48px',
            right: '48px',
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.55rem',
            color: 'rgba(255,255,255,0.15)',
            textAlign: 'right',
            letterSpacing: '0.25em',
            lineHeight: 2
          }}>
            {progress < 100 ? (
              <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ repeat: Infinity, duration: 0.8 }}>
                [ SYSTEM_HANDSHAKE: RUNNING ]<br />
                [ ASSET_SYNC: {progress}% ]<br />
                [ RENDER_ENGINE: INITIALIZED ]
              </motion.div>
            ) : (
              <div style={{ color: 'var(--accent)' }}>
                [ SYNC COMPLETE: 0x8892 ]<br />
                [ GROWTH READY: REDIRECTING ]<br />
                [ BRIDGE OPEN: SUCCESS ]
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
