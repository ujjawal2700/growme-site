'use client';

import React, { useRef } from 'react';
import Button from '../ui/Button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  
  // Mouse position state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid parallax
  const springX = useSpring(mouseX, { stiffness: 100, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -0.5 to 0.5 from center
    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly
    mouseX.set(0);
    mouseY.set(0);
  };

  // Helper to generate dynamic parallax depths
  const createParallax = (depthX: number, depthY: number) => {
    return {
      x: useTransform(springX, [-0.5, 0.5], [depthX * -1, depthX]),
      y: useTransform(springY, [-0.5, 0.5], [depthY * -1, depthY]),
    };
  };

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-section" 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(100px, 12vh, 180px) clamp(20px, 5vw, 48px) clamp(60px, 8vh, 100px)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* SOFT TEXTURE LAYER */}
      <div style={{
         position: 'absolute', bottom: '20%', left: '-5%',
         width: 'clamp(300px, 50vw, 600px)', height: 'clamp(300px, 50vw, 600px)',
         borderRadius: '50%', background: 'rgba(59, 130, 246, 0.04)',
         filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
         position: 'absolute', top: '15%', right: '-10%',
         width: 'clamp(200px, 40vw, 500px)', height: 'clamp(200px, 40vw, 500px)',
         borderRadius: '50%', background: 'rgba(168, 85, 247, 0.03)',
         filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none'
      }} />

      {/* PARALLAX FLOATING IMAGES (Desktop Only) */}
      <div className="parallax-images" style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
        <motion.div 
          className="p-img"
          style={{ position: 'absolute', top: '10%', left: '8%', width: '280px', rotate: '-6deg', ...createParallax(60, 40) }}
        >
          <img src="/project1.png" alt="Project 1" style={{ width: '100%', borderRadius: '16px', boxShadow: '8px 8px 24px rgba(203, 213, 225, 0.5), -8px -8px 24px rgba(255, 255, 255, 0.8)' }} />
        </motion.div>
        
        <motion.div 
          className="p-img"
          style={{ position: 'absolute', top: '15%', right: '5%', width: '320px', rotate: '4deg', ...createParallax(-40, 80) }}
        >
          <img src="/project2.png" alt="Project 2" style={{ width: '100%', borderRadius: '16px', boxShadow: '8px 8px 24px rgba(203, 213, 225, 0.4)' }} />
        </motion.div>
        
        <motion.div 
          className="p-img"
          style={{ position: 'absolute', bottom: '15%', left: '5%', width: '300px', rotate: '8deg', ...createParallax(-80, -50) }}
        >
          <img src="/project3.png" alt="Project 3" style={{ width: '100%', borderRadius: '16px', boxShadow: '8px 8px 24px rgba(203, 213, 225, 0.4)' }} />
        </motion.div>

        <motion.div 
          className="p-img"
          style={{ position: 'absolute', bottom: '10%', right: '8%', width: '260px', rotate: '-4deg', ...createParallax(50, -90) }}
        >
          <img src="/project4.png" alt="Project 4" style={{ width: '100%', borderRadius: '16px', boxShadow: '8px 8px 24px rgba(203, 213, 225, 0.4)' }} />
        </motion.div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="hero-container" style={{
        maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
      }}>
        <motion.div
           className="hero-content"
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9, type: "spring", bounce: 0.4 }}
           style={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             zIndex: 10
           }}
        >
          <div style={{
            padding: '8px 20px', display: 'inline-block', borderRadius: '20px',
            background: '#F8FAFC',
            boxShadow: 'inset 4px 4px 8px rgba(203, 213, 225, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.6)',
            fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
            fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: 'clamp(20px, 5vw, 40px)'
          }}>
            Digital Success · Est. 2024
          </div>
          
          <h1 className="hero-title" style={{
            fontFamily: 'var(--font-outfit)', fontWeight: 800,
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 1.1,
            letterSpacing: '-0.02em', color: 'var(--text)',
            maxWidth: '900px', marginBottom: 'clamp(16px, 4vw, 32px)'
          }}>
            State of the art,<br/>
            cutting edge <span style={{ color: 'var(--primary)', textShadow: '0 10px 20px rgba(59, 130, 246, 0.1)' }}>solutions</span>, everywhere.
          </h1>
          
          <p className="hero-subtext" style={{
            fontSize: 'clamp(1rem, 3.5vw, 1.25rem)', fontWeight: 500,
            color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.6,
            marginBottom: 'clamp(32px, 7vw, 48px)', fontFamily: 'var(--font-inter)',
            margin: '0 auto 40px'
          }}>
            Move your mouse to see the parallax effect. We build websites and tools that grow your revenue seamlessly at different speeds and scales.
          </p>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" href="/contact">Get Started Today</Button>
            <Button variant="ghost" href="#services" className="md-hidden">See What We Do</Button>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* ── MOBILE & TABLET LAYOUT ADJUSTMENTS ── */
        @media (max-width: 1200px) {
          .p-img { width: 220px !important; }
        }

        @media (max-width: 1024px) {
          /* Hide parallax images on tablet/mobile where mouse events don't map well */
          .parallax-images { display: none !important; }
          .hero-content {
            background: transparent !important;
            backdrop-filter: none !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important;
            text-align: center !important;
            padding: 120px 20px 50px !important;
          }
          .hero-title {
            font-size: clamp(2.4rem, 10vw, 5.5rem) !important;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-subtext {
            max-width: 100% !important;
            line-height: 1.5 !important;
          }
          .hero-buttons {
            justify-content: center !important;
            width: 100%;
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 360px) {
          .hero-section {
            padding: 100px 14px 36px !important;
          }
          .hero-title {
            font-size: 2.1rem !important;
            line-height: 1.2 !important;
          }
          .hero-subtext {
            font-size: 0.95rem !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
          }
          .hero-buttons a, .hero-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
