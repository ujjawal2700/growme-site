import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingOrbs from '@/components/ui/FloatingOrbs';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function BlogPage() {
  const posts = [
    { cat: 'WEB DEV', title: 'Why Next.js is the Future of E-Commerce Frontends', desc: 'Server components, edge caching, and why your Shopify store needs a headless overhaul immediately.', author: 'ER', date: 'Apr 02' },
    { cat: 'WEB3', title: 'Building DeFi Dashboards: Lessons from 3 Projects', desc: 'Handling real-time websocket data and multiple RPC providers without burning client CPUs.', author: 'AV', date: 'Mar 28' },
    { cat: 'DESIGN', title: 'The Psychology of Dark Skeuomorphic UI', desc: 'Moving past glassmorphism. Why tactile, deep-shadow interfaces convert better for B2B tools.', author: 'JV', date: 'Mar 21' },
    { cat: 'TECH', title: '10-Minute Delivery Apps: Tech Stack Breakdown', desc: 'What happens behind the scenes when you tap order. Redis, Kafka, and geofencing deep dive.', author: 'ER', date: 'Mar 15' },
    { cat: 'TECH', title: 'How We Reduced App Load Time by 60%', desc: 'Migrating legacy CRA apps to modern bundlers and implementing edge functions.', author: 'AV', date: 'Mar 10' },
    { cat: 'MARKETING', title: 'Social Media Growth Hacks That Actually Work', desc: 'Stop worrying about hashtags. Focus on hooks, retention graphs, and algorithmic triggers.', author: 'ML', date: 'Feb 28' }
  ];

  const categories = ['All', 'Web Dev', 'AI/ML', 'Design', 'Marketing', 'Tech'];

  return (
    <main>
      <Navbar />
      
      <div style={{ paddingTop: '140px', paddingBottom: '120px', overflow: 'hidden' }}>
        <FloatingOrbs color="rgba(0,255,178,0.15)" size={600} top="-100px" right="-200px" />
        
        <div style={{ padding: '0 48px' }}>
          {/* HERO */}
          <SectionEyebrow>GrowMe Blog</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, marginBottom: '60px' }}>
            The Growth <span style={{ color: 'var(--purple-light)' }}>Lab.</span>
          </h1>

          {/* FILTERS */}
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '20px', marginBottom: '40px' }} className="no-scrollbar">
            {categories.map((c, i) => (
              <button 
                key={i} 
                className={i === 0 ? "skeuo-pressed" : "skeuo-raised"}
                style={{ 
                  padding: '8px 20px', 
                  fontFamily: 'var(--font-space-mono)', 
                  fontSize: '0.8rem',
                  color: i === 0 ? 'var(--accent)' : 'var(--white)',
                  whiteSpace: 'nowrap',
                  cursor: 'none'
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {posts.map((post, i) => (
              <RevealWrapper key={i} delayIndex={i}>
                <div className="skeuo-raised group" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0' }}>
                  <div style={{ height: '200px', background: 'linear-gradient(135deg, #2a2a38, #1a1a24)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '16px', left: '16px' }} className="skeuo-tag font-[family-name:var(--font-space-mono)] text-[0.6rem] text-[var(--accent)]">
                      {post.cat}
                    </div>
                  </div>
                  <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>{post.desc}</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontFamily: 'var(--font-syne)', fontWeight: 800 }}>{post.author}</div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{post.date}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-space-mono)', color: 'var(--purple-light)', fontSize: '0.7rem' }}>READ →</span>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

        </div>
      </div>
      <Footer />
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </main>
  );
}
