'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { 
    title: 'Discovery & Analytics', 
    desc: 'We take the time to deeply understand your unique business goals and who your target customers are. Our data-driven approach ensures every decision is backed by real metrics.'
  },
  { 
    title: 'Premium UX/UI Design', 
    desc: 'We create a clean, modern, and highly-converting look for your project that perfectly reflects your professional brand. Beautiful aesthetics combined with intuitive user experience.'
  },
  { 
    title: 'Rapid Development', 
    desc: 'Our team builds your digital presence with the absolute latest technologies to ensure it is fast, secure, and infinitely reliable. We leverage modern frameworks to crush load times.'
  },
  { 
    title: 'Launch & Scale', 
    desc: 'We help you go live smoothly and stay by your side to ensure your business keeps growing. We provide continuous support, monitoring, and feature updates as you rapidly scale.'
  },
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" style={{ padding: 'clamp(80px, 10vh, 140px) clamp(20px, 4vw, 48px)', background: 'transparent' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 'clamp(40px, 8vw, 80px)', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block', padding: '8px 20px', borderRadius: '20px',
            background: '#E0E5EC',
            boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.5)',
            fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 600,
            color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase'
          }}>HOW WE WORK</div>
          <h2 style={{ 
            fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.02em', maxWidth: '850px', margin: '0 auto'
          }}>
            From <span style={{ color: 'var(--primary)' }}>Idea</span> to Product in 4 Simple Steps.
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1.1rem', color: 'var(--text-muted)',
            maxWidth: '600px', margin: '24px auto 0', lineHeight: 1.6
          }}>
            Supercharge your digital growth workflow with intelligent strategies that understand your market.
          </p>
        </motion.div>

        {/* ACETERNITY UI STYLE FEATURE LAYOUT */}
        <div className="feature-layout">
          
          {/* LEFT: Accordion Tabs */}
          <div className="feature-tabs" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              
              return (
                <div 
                  key={i} 
                  onClick={() => setActiveStep(i)}
                  className={`feature-tab ${isActive ? 'active' : ''}`}
                  style={{
                    padding: isActive ? '32px' : '24px 32px',
                    background: isActive ? '#E0E5EC' : 'transparent',
                    boxShadow: isActive ? '8px 8px 16px rgba(163, 177, 198, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.6)' : 'none',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <h3 style={{ 
                    fontFamily: 'var(--font-outfit)', 
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
                    fontWeight: isActive ? 800 : 500, 
                    color: isActive ? 'var(--text)' : 'var(--text-muted)',
                    transition: 'color 0.3s ease'
                  }}>
                    {step.title}
                  </h3>
                  
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ 
                          // Need a wrapper div to ensure padding/margins don't break height measurement
                          paddingTop: '16px',
                          fontFamily: 'var(--font-inter)', 
                          fontSize: '0.95rem', 
                          lineHeight: 1.6, 
                          color: 'var(--text)', 
                          margin: 0
                        }}>
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Stacked Isometric Boxes Visual */}
          <div className="feature-visual">
            <svg 
              viewBox="-40 -20 240 360" 
              style={{ width: '100%', height: '100%', maxHeight: '500px', overflow: 'visible' }}
            >
              {[0, 1, 2, 3].map((stepIndex) => {
                const isActive = activeStep === stepIndex;
                const yOffset = stepIndex * 65; // vertical gap between stacked isometric cubes

                return (
                  <g key={stepIndex} transform={`translate(0, ${yOffset})`}>
                    {/* BASE WIREFRAMES - Drawn for all cubes */}
                    
                    {/* Top Face */}
                    <polygon 
                      points="60,0 120,30 60,60 0,30" 
                      fill="transparent" 
                      stroke="rgba(163, 177, 198, 0.6)" 
                      strokeWidth="1.5" 
                      strokeLinejoin="round" 
                    />
                    
                    {/* Left Face */}
                    <polygon 
                      points="0,30 60,60 60,120 0,90" 
                      fill="transparent" 
                      stroke="rgba(163, 177, 198, 0.4)" 
                      strokeWidth="1.5" 
                      strokeLinejoin="round" 
                    />
                    
                    {/* Right Face (base hidden under active popup if active) */}
                    <polygon 
                      points="60,60 120,30 120,90 60,120" 
                      fill="transparent" 
                      stroke="rgba(163, 177, 198, 0.4)" 
                      strokeWidth="1.5" 
                      strokeLinejoin="round" 
                    />

                    {/* Inner wireframe architectural details */}
                    <path 
                      d="M 60 15 L 100 35 L 60 55 L 20 35 Z" 
                      fill="transparent" 
                      stroke="rgba(163, 177, 198, 0.3)" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                      strokeLinejoin="round" 
                    />

                    {/* ACETERNITY HIGHLIGHT POP-OUT FACE (Visible only when step is active) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.g
                          initial={{ opacity: 0, x: -10, y: -5 }}
                          animate={{ opacity: 1, x: 24, y: 12 }}
                          exit={{ opacity: 0, x: -10, y: -5 }}
                          transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
                          style={{ filter: 'drop-shadow(6px 12px 16px rgba(59, 130, 246, 0.3))' }}
                        >
                          {/* Glowing solid card background */}
                          <polygon 
                            points="60,60 120,30 120,90 60,120" 
                            fill="#F8FAFC" 
                            stroke="var(--primary)" 
                            strokeWidth="2.5" 
                            strokeLinejoin="round" 
                          />
                          
                          {/* Inner blueprint lines mapping perfectly to the isometric rotation */}
                          <line x1="75" y1="52.5" x2="75" y2="112.5" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
                          <line x1="90" y1="45"   x2="90" y2="105"   stroke="var(--primary)" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
                          <line x1="105" y1="37.5" x2="105" y2="97.5" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
                        </motion.g>
                      )}
                    </AnimatePresence>
                  </g>
                );
              })}
            </svg>
          </div>

        </div>
      </div>

      <style>{`
        .feature-visual {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 80px);
          align-items: center;
        }

        .feature-tab:hover:not(.active) h3 {
          color: var(--primary) !important;
        }

        @media (max-width: 1024px) {
          .feature-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .feature-visual {
            min-height: 280px !important;
            height: 300px;
            order: -1;
            padding: 10px 0;
          }
        }

        @media (max-width: 768px) {
          .feature-visual {
            min-height: 220px !important;
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
}
