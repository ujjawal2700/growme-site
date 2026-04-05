'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const posts = [
    { cat: 'GUIDE', title: 'How to Scale Your Business with Custom Software', desc: 'Why generic tools hold you back and how a custom platform can become your biggest competitive advantage.', author: 'AV', date: 'Apr 02' },
    { cat: 'STRATEGY', title: 'The Importance of a High-End Digital Presence', desc: 'First impressions matter. Why businesses are investing in premium design to build trust with high-value clients.', author: 'JV', date: 'Mar 28' },
    { cat: 'TECH', title: 'Why We Use Next.js for Every Client Project', desc: 'Speed, stability, and future-proofing. A simple breakdown of the technologies we use to grow your business.', author: 'ER', date: 'Mar 21' },
    { cat: 'DESIGN', title: 'Human-Centered Design: Making Tech Reachable', desc: 'Moving away from complex technical interfaces and towards simple, intuitive user experiences that just work.', author: 'JV', date: 'Mar 15' },
    { cat: 'AI', title: 'How Automation Can Save Your Business 20+ Hours', desc: 'Simple ways to use AI and custom scripts to handle repetitive tasks while you focus on growth.', author: 'ER', date: 'Mar 10' },
    { cat: 'MARKETING', title: 'Building Brand Trust in a Digital-First World', desc: 'Focus on quality, consistency, and clean communication to turn visitors into loyal, long-term partners.', author: 'ML', date: 'Feb 28' }
  ];

  const categories = ['All Topics', 'Strategy', 'Design', 'Technology', 'Guides'];

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      
      <div style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div style={{ padding: '0 48px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* HERO */}
          <SectionEyebrow>The Journal</SectionEyebrow>
          <h1 style={{ 
            fontFamily: 'var(--font-outfit)', 
            fontSize: 'clamp(3rem, 7vw, 5rem)', 
            fontWeight: 800, 
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: '48px',
            lineHeight: 1.1
          }}>
            Our Insights on <br/>
            <span style={{ color: 'var(--primary)' }}>Digital Success.</span>
          </h1>

          {/* FILTERS (Neumorphic Pills) */}
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            overflowX: 'auto', 
            padding: '12px 0 32px', 
            marginBottom: '48px' 
          }} className="no-scrollbar">
            {categories.map((c, i) => (
              <motion.button 
                key={i} 
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: '10px 24px', 
                  borderRadius: '20px',
                  background: '#E0E5EC',
                  fontFamily: 'var(--font-inter)', 
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: i === 0 ? 'var(--primary)' : 'var(--text)',
                  whiteSpace: 'nowrap',
                  border: 'none',
                  boxShadow: i === 0 
                    ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                    : '6px 6px 12px rgba(163, 177, 198, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {c}
              </motion.button>
            ))}
          </div>

          {/* GRID (Tactile Cards) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
            gap: '40px' 
          }}>
            {posts.map((post, i) => (
              <RevealWrapper key={i} delayIndex={i}>
                <motion.div 
                  whileHover={{ translateY: -8 }}
                  style={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    borderRadius: '32px',
                    background: '#E0E5EC',
                    padding: '40px',
                    boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.5), -10px -10px 20px rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ 
                    fontFamily: 'var(--font-inter)', 
                    fontWeight: 700, 
                    fontSize: '0.7rem', 
                    color: 'var(--primary)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '20px'
                  }}>
                    {post.cat}
                  </div>
                  
                  <h3 style={{ 
                    fontFamily: 'var(--font-outfit)', 
                    fontSize: '1.6rem', 
                    fontWeight: 800, 
                    color: 'var(--text)',
                    lineHeight: 1.3,
                    marginBottom: '16px' 
                  }}>{post.title}</h3>
                  
                  <p style={{ 
                    fontFamily: 'var(--font-inter)',
                    color: 'var(--text-muted)', 
                    fontSize: '1rem', 
                    lineHeight: 1.6, 
                    marginBottom: '32px', 
                    flexGrow: 1 
                  }}>{post.desc}</p>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    paddingTop: '24px',
                    borderTop: '2px solid rgba(0,0,0,0.03)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '50%', 
                        background: '#E0E5EC', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '0.75rem', 
                        fontWeight: 800,
                        color: 'var(--primary)',
                        boxShadow: 'inset 2px 2px 5px rgba(163,177,198,0.5), inset -2px -2px 5px rgba(255,255,255,0.8)'
                      }}>{post.author}</div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>{post.date}</span>
                    </div>
                    <span style={{ 
                      fontFamily: 'var(--font-inter)', 
                      fontWeight: 700,
                      color: 'var(--primary)', 
                      fontSize: '0.8rem',
                      letterSpacing: '0.05em'
                    }}>READ ARTICLE →</span>
                  </div>
                </motion.div>
              </RevealWrapper>
            ))}
          </div>

        </div>
      </div>
      <Footer />
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
