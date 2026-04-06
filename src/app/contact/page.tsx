'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import MultiStepForm from '@/components/contact/MultiStepForm';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      
      <div style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative' }}>
        <div style={{ padding: '0 48px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionEyebrow className="justify-center">Start a Project</SectionEyebrow>
            <h1 style={{ 
              fontFamily: 'var(--font-outfit)', 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              Let&apos;s build your<br/>
              <span style={{ color: 'var(--primary)' }}>Success Story.</span>
            </h1>
          </div>

          <MultiStepForm />

          <div style={{ marginTop: '140px', borderTop: '2px solid rgba(0,0,0,0.03)', paddingTop: '100px' }}>
            <h3 style={{ 
              fontFamily: 'var(--font-outfit)', 
              fontSize: '1.75rem', 
              fontWeight: 700,
              textAlign: 'center', 
              marginBottom: '56px',
              color: 'var(--text)'
            }}>Alternative Ways to Reach Us</h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '32px' 
            }}>
              {[
                { icon: '💬', title: 'WhatsApp', detail: '+91 87699 59424', link: 'https://wa.me/918769959424' },
                { icon: '✉️', title: 'Email', detail: 'hello@growme.in', link: 'mailto:hello@growme.in' },
                { icon: '📸', title: 'Instagram', detail: '@growme.in', link: '#' },
                { icon: '💼', title: 'LinkedIn', detail: 'GrowMe Digital', link: '#' }
              ].map((m, i) => (
                <motion.a 
                  key={i} 
                  href={m.link} 
                  whileHover={{ translateY: -5 }}
                  style={{ 
                    padding: '40px 32px', 
                    textAlign: 'center', 
                    textDecoration: 'none', 
                    display: 'block',
                    borderRadius: '24px',
                    background: '#F8FAFC',
                    boxShadow: '9px 9px 16px rgba(203, 213, 225, 0.5), -9px -9px 16px rgba(255, 255, 255, 0.7)',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{m.icon}</div>
                  <div style={{ 
                    fontFamily: 'var(--font-outfit)', 
                    fontSize: '1.2rem', 
                    fontWeight: 700,
                    color: 'var(--text)', 
                    marginBottom: '8px' 
                  }}>{m.title}</div>
                  <div style={{ 
                    fontFamily: 'var(--font-inter)', 
                    fontSize: '0.85rem', 
                    fontWeight: 500,
                    color: 'var(--text-muted)' 
                  }}>{m.detail}</div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
