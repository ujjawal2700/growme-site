'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { 
    icon: '💻', 
    name: 'Website Development', 
    desc: 'We build beautiful, fast, and easy-to-use websites that turn visitors into loyal customers.', 
    accent: '#3B82F6'
  },
  { 
    icon: '📱', 
    name: 'Mobile Apps', 
    desc: 'Reach your customers anywhere with sleek mobile apps designed for phones and tablets.', 
    accent: '#3B82F6'
  },
  { 
    icon: '🤖', 
    name: 'AI & Automation', 
    desc: 'Smart tools that handle repetitive tasks for you, so you can focus on running your business.', 
    accent: '#3B82F6'
  },
  { 
    icon: '✨', 
    name: 'Design & Experience', 
    desc: 'We make sure your brand looks professional and feels welcoming to every visitor.', 
    accent: '#3B82F6'
  },
  { 
    icon: '🚀', 
    name: 'Marketing & SEO', 
    desc: 'Helping your business get found on Google and social media by the right people.', 
    accent: '#3B82F6'
  },
  { 
    icon: '📈', 
    name: 'Business Growth', 
    desc: 'Expert strategy and consulting to help you scale your operations and increase profits.', 
    accent: '#3B82F6'
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        padding: '48px 40px',
        borderRadius: '32px',
        background: '#E0E5EC',
        boxShadow: '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
      whileHover={{ 
        translateY: -5,
        boxShadow: '12px 12px 24px rgba(163, 177, 198, 0.7), -12px -12px 24px rgba(255, 255, 255, 0.9)',
      }}
    >
      <div style={{ 
        fontSize: '3rem', 
        padding: '16px',
        borderRadius: '24px',
        background: '#E0E5EC',
        boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.6)',
        marginBottom: '8px'
      }}>{service.icon}</div>
      
      <h3 style={{ 
        fontFamily: 'var(--font-outfit)', 
        fontWeight: 700, 
        fontSize: '1.5rem', 
        color: 'var(--text)',
        letterSpacing: '-0.01em'
      }}>
        {service.name}
      </h3>

      <p style={{ 
        fontSize: '1rem', 
        color: 'var(--text-muted)', 
        lineHeight: 1.6, 
        fontFamily: 'var(--font-inter)',
        fontWeight: 400 
      }}>
        {service.desc}
      </p>

      <motion.div 
        style={{
          marginTop: 'auto',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}
        whileHover={{ x: 5 }}
      >
        Learn more <span>→</span>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section 
      id="services" 
      style={{ position: 'relative', padding: '140px 48px', background: 'transparent' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '80px', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: '20px',
            background: '#E0E5EC',
            boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.5)',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--primary)',
            letterSpacing: '0.1em',
            marginBottom: '24px'
          }}>OUR CAPABILITIES</div>

          <h2 style={{ 
            fontFamily: 'var(--font-outfit)', 
            fontWeight: 800, 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.1, 
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            maxWidth: '800px',
            margin: '0 auto 24px'
          }}>
            Solutions Designed for <span style={{ color: 'var(--primary)' }}>Your Success.</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-inter)',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We help you navigate the digital world with simple, powerful tools built specifically for your business needs.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '32px',
        }}>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section { padding: 100px 24px !important; }
        }
        @media (max-width: 480px) {
          section { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
