'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const sections = [
    { title: 'Agreement to Terms', content: 'These Terms and Conditions constitute a legally binding agreement made between you and GrowMe Digital concerning your access to and use of our services.' },
    { title: 'Intellectual Property Rights', content: 'Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics are owned or controlled by us.' },
    { title: 'User Responsibilities', content: 'By using the Services, you represent and warrant that all registration information you submit will be true, accurate, current, and complete.' },
    { title: 'Services & Deliverables', content: 'GrowMe will provide the services as agreed upon in specific Statements of Work (SOW) or project proposals. Timelines are estimates and subject to client cooperation and providing necessary assets.' },
    { title: 'Payment Terms', content: 'Invoices are due within 15 days of receipt unless otherwise specified. Late payments may be subject to a 1.5% monthly late fee.' },
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#F8FAFC' }}>
      <Navbar />
      
      <div style={{ 
        paddingTop: 'clamp(120px, 15vh, 180px)', 
        paddingBottom: '120px', 
        paddingLeft: 'clamp(20px, 5vw, 48px)', 
        paddingRight: 'clamp(20px, 5vw, 48px)', 
        display: 'flex', 
        gap: '80px', 
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap' 
      }}>
        
        {/* SIDEBAR NAVIGATION */}
        <div style={{ flex: '0 0 280px', position: 'sticky', top: '140px', height: 'fit-content' }} className="md-hidden">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px', borderRadius: '20px',
            background: '#F8FAFC',
            boxShadow: 'inset 4px 4px 8px rgba(203, 213, 225, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.6)',
            fontFamily: 'var(--font-inter)', fontSize: '0.75rem', fontWeight: 600,
            color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase'
          }}>
            <span style={{ fontSize: '1.2rem' }}>⚖️</span> LEGAL DESK
          </div>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {sections.map((s, i) => (
              <li key={i}>
                <a href={`#section-${i}`} style={{ 
                  textDecoration: 'none', 
                  color: 'var(--text-muted)', 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: '0.95rem', 
                  fontWeight: 600,
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    minWidth: '28px', height: '28px', borderRadius: '50%',
                    background: '#F8FAFC',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    boxShadow: '4px 4px 8px rgba(203, 213, 225, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.6)',
                    color: 'var(--primary)'
                  }}>{i+1}</div>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: '1', maxWidth: '800px', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{ 
              fontFamily: 'var(--font-outfit)', 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: 800, 
              color: 'var(--text)',
              marginBottom: '16px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              Terms & Conditions
            </h1>
            <p style={{ 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-inter)', 
              fontSize: '0.85rem', 
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '60px' 
            }}>
              Last Updated: April 2026
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {sections.map((s, i) => (
              <motion.section 
                key={i} 
                id={`section-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ 
                  borderRadius: '32px',
                  padding: 'clamp(32px, 5vw, 48px)',
                  background: '#F8FAFC',
                  boxShadow: '9px 9px 16px rgba(203, 213, 225, 0.5), -9px -9px 16px rgba(255, 255, 255, 0.7)',
                }}
              >
                <div style={{ 
                  display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' 
                }}>
                   <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: '#F8FAFC',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    boxShadow: 'inset 4px 4px 8px rgba(203, 213, 225, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.6)',
                    color: 'var(--primary)'
                  }}>{i+1}</div>
                  <h2 style={{ 
                    fontFamily: 'var(--font-outfit)', 
                    fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
                    fontWeight: 800, 
                    color: 'var(--text)',
                    margin: 0
                  }}>
                    {s.title}
                  </h2>
                </div>
                
                <p style={{ 
                  color: 'var(--text-muted)', 
                  fontFamily: 'var(--font-inter)',
                  fontSize: '1.05rem', 
                  lineHeight: 1.8, 
                  fontWeight: 400 
                }}>
                  {s.content}
                </p>
              </motion.section>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '80px', 
              padding: '48px', 
              textAlign: 'center',
              borderRadius: '32px',
              background: '#F8FAFC',
              boxShadow: 'inset 5px 5px 10px rgba(203, 213, 225, 0.4), inset -5px -5px 10px rgba(255, 255, 255, 0.6)',
            }}
          >
            <h3 style={{ 
              fontFamily: 'var(--font-outfit)', 
              fontSize: '1.8rem', 
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: '20px' 
            }}>
              Questions about our terms?
            </h3>
            <a 
              href="/contact" 
              style={{ padding: '0 24px', display: 'inline-block' }}
            >
              <div style={{
                padding: '16px 32px',
                borderRadius: '99px',
                background: '#F8FAFC',
                boxShadow: '6px 6px 12px rgba(203, 213, 225, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                Contact Legal Team →
              </div>
            </a>
          </motion.div>
        </div>
      </div>
      
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .md-hidden { display: none !important; }
        }
      `}</style>
    </main>
  );
}
