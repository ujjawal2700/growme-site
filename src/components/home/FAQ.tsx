'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is the purpose of this service?",
    answer: "We are a digital growth agency dedicated to transforming your ideas into high-performing web platforms. Our purpose is to engineer solutions that scale your revenue and user engagement seamlessly."
  },
  {
    question: "How long does a typical project take?",
    answer: "Most of our web development and branding projects transition from concept to launch within 4 to 8 weeks, depending on the complexity and scope."
  },
  {
    question: "What is your pricing model for agencies?",
    answer: "We offer both fixed-project pricing and flexible monthly retainers. Our goal is to provide high-end digital solutions that perfectly scale with your agency's growth trajectory."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. Every project includes a 30-day post-launch support period, and we offer dedicated maintenance packages for long-term peace of mind and continuous optimization."
  },
  {
    question: "What technologies do you use for development?",
    answer: "We specialize in modern, high-performance stacks like Next.js, React, and Tailwind CSS, ensuring your digital products are fast, secure, and incredibly reliable."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ position: 'relative', padding: 'clamp(80px, 10vh, 120px) 5%', background: '#F8FAFC', scrollMarginTop: '120px', overflow: 'hidden' }}>
      
      {/* ACETERNITY UI SUBTLE BACKGROUND DOME EFFECT */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '60vw',
        maxHeight: '800px',
        maxWidth: '800px',
        background: 'radial-gradient(circle, rgba(226, 232, 240, 0.8) 0%, rgba(248, 250, 252, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontWeight: 600, /* Slightly lighter weight than before, matching Aceternity */
              color: '#334155', /* Dark slate */
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '16px'
            }}
          >
            Frequently asked questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#64748B',
              lineHeight: 1.6,
              maxWidth: '540px',
              margin: '0 auto'
            }}
          >
            We are here to help you with any questions you may have. If you
            don't find what you need, please contact us at <br className="md-hidden" />
            <a href="mailto:support@growme.com" style={{ color: '#3B82F6', textDecoration: 'underline', transition: 'color 0.2s' }}>support@growme.com</a>
          </motion.p>
        </div>

        {/* ACCORDION LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              faq={faq} 
              isOpen={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        borderRadius: '16px',
        background: '#ffffff',
        border: '1px solid #e2e8f0', /* Very subtle border */
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        {/* Aceternity Style Chevron on the LEFT */}
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.div>

        <span style={{ 
          fontFamily: 'var(--font-inter)', 
          fontSize: '1.05rem', 
          fontWeight: 600, 
          color: '#334155' 
        }}>
          {faq.question}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div style={{ 
              padding: '0 32px 32px 76px', /* Indented to align with text, bypassing chevron */
              fontFamily: 'var(--font-inter)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: '#64748B'
            }}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 480px) {
          button { padding: 20px 24px !important; gap: 16px !important; }
          div[style*="padding: 0 32px 32px 76px"] { padding: 0 24px 24px 60px !important; }
        }
        @media (max-width: 360px) {
          button { padding: 16px !important; gap: 12px !important; }
          div[style*="padding: 0 24px 24px 60px"] { padding: 0 16px 20px 48px !important; }
          button span { font-size: 0.95rem !important; }
        }
      `}</style>
    </motion.div>
  );
}
