'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "GrowMe didn't just build our website — they redesigned how we think about our business. Our customers find it so much easier to use now. The team is responsive, creative, and genuinely cares.",
    reviewer: 'James Kim', // Updated to match screenshot style or keep our logic
    role: 'Engineering Lead at DataPro',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises. The process was simple, transparent, and the quality is exceptional.",
    reviewer: 'Priya Khatri',
    role: 'Founder · QuickBite',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop'
  },
  {
    quote: "GrowMe took our boring old site and turned it into a premium lead-generation machine. Their attention to minor details and modern design sense is completely unparalleled.",
    reviewer: 'Sarah Jenkins',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    quote: "The automation tools they built for us saved us hours of work every week. Simple tools that just work. Incredible value for money.",
    reviewer: 'Arjun Mehta',
    role: 'Manager · NexaCommerce',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    quote: "I was blown away by the speed and flawless quality. They delivered our MVP ahead of schedule, featuring an incredibly intuitive UI that our users love.",
    reviewer: 'David Chen',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  }
];

// Fixed rotations so it doesn't jump on hydration
const backgroundRotations = [-6, 4, -4, 5, -5];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[active];

  return (
    <section id="testimonials" style={{ padding: 'clamp(80px, 10vh, 140px) clamp(20px, 4vw, 48px)', background: 'transparent' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 'clamp(40px, 8vw, 80px)' }} // Left aligned to match Aceternity
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px', borderRadius: '20px',
            background: '#E0E5EC',
            boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.5)',
            fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 600,
            color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase'
          }}>
            <span style={{ fontSize: '1.2rem' }}>💬</span> USER REVIEWS
          </div>

          <h2 style={{ 
            fontFamily: 'var(--font-outfit)', fontWeight: 800, 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, 
            color: 'var(--text)', letterSpacing: '-0.02em',
          }}>
            Client Success Stories
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '1.1rem', color: 'var(--text-muted)',
            marginTop: '16px', lineHeight: 1.6
          }}>
            See how we've helped businesses transform their digital presence and drive unprecedented growth.
          </p>
        </motion.div>

        {/* ACETERNITY UI LAYOUT */}
        <div className="testimonial-layout">
          
          {/* LEFT: IMAGE STACK */}
          <div className="image-stack" style={{ position: 'relative', width: '100%', aspectRatio: '1', maxWidth: '400px', margin: '0 auto' }}>
            <AnimatePresence>
              {testimonials.map((t, idx) => {
                const isActive = active === idx;
                
                // Calculate zIndex properly so the active is strictly on top
                const zIndex = isActive ? 10 : (testimonials.length - idx);

                return (
                  <motion.div
                    key={t.reviewer}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1 : 0.88,
                      rotate: isActive ? 0 : backgroundRotations[idx],
                      zIndex: zIndex,
                      y: isActive ? 0 : 15 // push inactive images slightly down
                    }}
                    transition={{
                      type: "spring", stiffness: 200, damping: 20, mass: 1
                    }}
                    style={{
                      position: 'absolute',
                      inset: '0 8%', // give some horizontal breathing room
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: isActive 
                        ? '12px 12px 30px rgba(163, 177, 198, 0.4), -12px -12px 30px rgba(255, 255, 255, 0.8)' 
                        : 'none',
                    }}
                  >
                    <img 
                      src={t.image} 
                      alt={t.reviewer} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT: CONTENT CONTENT */}
          <div className="content-stack" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ 
                  fontFamily: 'var(--font-outfit)', 
                  fontWeight: 800, 
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                  color: 'var(--text)',
                  marginBottom: '4px'
                }}>
                  {currentTestimonial.reviewer}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: '0.95rem', 
                  color: 'var(--text-muted)', 
                  marginBottom: '32px',
                  fontWeight: 500
                }}>
                  {currentTestimonial.role}
                </p>
                <div style={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', 
                  lineHeight: 1.7, 
                  color: 'var(--text)', 
                  fontWeight: 400
                }}>
                  {/* Subtle fade effect matching Aceternity */}
                  {currentTestimonial.quote.split(" ").map((word, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.02 }}
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* NAVIGATION BUTTONS */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '48px' }}>
              <button 
                onClick={handlePrev}
                style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%',
                  background: '#E0E5EC',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '4px 4px 10px rgba(163, 177, 198, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  border: 'none',
                  color: 'var(--text)',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <button 
                onClick={handleNext}
                style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%',
                  background: '#E0E5EC',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '4px 4px 10px rgba(163, 177, 198, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  border: 'none',
                  color: 'var(--text)',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: center;
        }

        /* Fix button tap highlighting on mobile */
        button {
          -webkit-tap-highlight-color: transparent;
        }
        
        button:active {
          box-shadow: inset 4px 4px 10px rgba(163, 177, 198, 0.4), inset -4px -4px 10px rgba(255, 255, 255, 0.6) !important;
        }

        @media (max-width: 900px) {
          .testimonial-layout {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .image-stack {
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}
