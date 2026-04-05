'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most of our web development and branding projects transition from concept to launch within 4 to 8 weeks, depending on the complexity and scope."
  },
  {
    question: "What is your pricing model for agencies?",
    answer: "We offer both fixed-project pricing and flexible monthly retainers. Our goal is to provide high-end digital solutions that scale with your agency's growth."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. Every project includes a 30-day post-launch support period, and we offer dedicated maintenance packages for long-term peace of mind."
  },
  {
    question: "How do we get started with GrowMe?",
    answer: "Simply click 'Let's Talk' to book a discovery call. We'll discuss your goals, draft a proposal, and begin the onboarding process within 48 hours."
  },
  {
    question: "What technologies do you use for development?",
    answer: "We specialize in modern, high-performance stacks like Next.js, React, and Tailwind CSS, ensuring your digital products are fast, secure, and scalable."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: '100px 5%', background: 'transparent', scrollMarginTop: '120px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '16px'
            }}
          >
            Got Questions?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
        borderRadius: '24px',
        background: '#E0E5EC',
        boxShadow: isOpen 
          ? 'inset 6px 6px 12px rgba(163, 177, 198, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.6)'
          : '8px 8px 16px rgba(163, 177, 198, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ 
          fontFamily: 'var(--font-outfit)', 
          fontSize: '1.2rem', 
          fontWeight: 700, 
          color: 'var(--text)' 
        }}>
          {faq.question}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          style={{ 
            fontSize: '1.5rem', 
            color: 'var(--primary)',
            fontWeight: 300
          }}
        >
          +
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div style={{ 
              padding: '0 32px 32px 32px',
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'var(--text-muted)'
            }}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
