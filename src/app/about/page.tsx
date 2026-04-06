'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    { icon: '💡', title: 'Innovation', desc: 'We build high-end solutions that help your business stay ahead of the curve.' },
    { icon: '⚡', title: 'Speed', desc: 'Fast, efficient delivery to ensure your business grows without delay.' },
    { icon: '💎', title: 'Quality', desc: 'Zero compromises. We deliver beautiful, professional, and reliable work.' },
    { icon: '🔍', title: 'Clarity', desc: 'Simple communication, transparent timelines, and no technical jargon.' },
    { icon: '🤝', title: 'Partnership', desc: 'We work by your side to ensure your business reaches its full potential.' },
    { icon: '🏆', title: 'Excellence', desc: 'Exceeding expectations to provide you with a world-class digital presence.' },
  ];

  const team = [
    { role: 'Founder & CEO', name: 'Alaric Voss', initials: 'AV' },
    { role: 'Lead Architect', name: 'Elena Rostova', initials: 'ER' },
    { role: 'Creative Director', name: 'Julian Vance', initials: 'JV' },
    { role: 'Strategy Lead', name: 'Maya Lin', initials: 'ML' },
  ];

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      
      <div style={{ paddingTop: '160px' }}>
        {/* HERO */}
        <section style={{ padding: '80px 48px', position: 'relative', textAlign: 'center' }}>
          <SectionEyebrow className="justify-center">About GrowMe</SectionEyebrow>
          <h1 style={{ 
            fontFamily: 'var(--font-outfit)', 
            fontWeight: 800, 
            fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
            color: 'var(--text)', 
            letterSpacing: '-0.02em',
            margin: '24px auto',
            maxWidth: '1000px',
            lineHeight: 1.1
          }}>
            Building High-End Digital<br/>
            <span style={{ color: 'var(--primary)' }}>Empowering Your Success.</span>
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-inter)', 
            fontSize: '1.25rem', 
            color: 'var(--text-muted)', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            We bridge the gap between complex technology and your business goals. Simple. High-End. Minimal.
          </p>
        </section>

        {/* MISSION & VISION */}
        <section style={{ padding: '80px 48px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto' 
          }}>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               style={{ 
                 padding: '56px 48px', 
                 height: '100%',
                 background: '#F8FAFC',
                 borderRadius: '32px',
                 boxShadow: '9px 9px 16px rgba(203, 213, 225, 0.5), -9px -9px 16px rgba(255, 255, 255, 0.7)',
               }}
            >
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: 'var(--primary)' }}>Our Mission</h3>
              <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                To provide high-end, approachable digital solutions that empower businesses to thrive in the modern age. We prioritize clarity, quality, and human-centric design in everything we build.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               style={{ 
                 padding: '56px 48px', 
                 height: '100%',
                 background: '#F8FAFC',
                 borderRadius: '32px',
                 boxShadow: 'inset 6px 6px 12px rgba(203, 213, 225, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.6)',
               }}
            >
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text)' }}>Our Vision</h3>
              <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                We envision a digital world where professional technology is accessible to everyone. By removing technical complexity, we allow you to focus on what you do best—running your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: '100px 48px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '32px', 
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center' 
          }}>
            {[{v:'2024', l:'Founded'}, {v:'200+', l:'Projects'}, {v:'50+', l:'Clients'}, {v:'15+', l:'Experts'}].map((stat, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>{stat.v}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE VALUES */}
        <section style={{ padding: '120px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionEyebrow>Our Value</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '3rem', color: 'var(--text)', marginBottom: '60px' }}>What Defines Us</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {values.map((v, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ 
                    padding: '40px', 
                    borderRadius: '24px',
                    background: '#F8FAFC',
                    boxShadow: '8px 8px 16px rgba(203, 213, 225, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.6)',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{v.icon}</div>
                  <h4 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text)' }}>{v.title}</h4>
                  <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section style={{ padding: '120px 48px', borderTop: '2px solid rgba(0,0,0,0.03)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionEyebrow>The Team</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '3rem', color: 'var(--text)', marginBottom: '60px' }}>Professional Minds.</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
              {team.map((t, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '50%', 
                    background: '#F8FAFC', 
                    margin: '0 auto 24px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 800,
                    fontSize: '2rem',
                    color: 'var(--primary)',
                    boxShadow: '8px 8px 16px rgba(203, 213, 225, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.7)'
                  }}>
                    {t.initials}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>{t.name}</h4>
                  <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
