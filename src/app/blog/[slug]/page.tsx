'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { postsData } from '@/lib/blog-data';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogContentPage() {
  const params = useParams();
  const slug = params.slug;

  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2rem' }}>Post not found</h1>
          <Link href="/blog" style={{ color: 'var(--primary)', marginTop: '20px', fontWeight: 600 }}>Back to Journal</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* CENTERED HEADER */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ 
                fontFamily: 'var(--font-inter)', 
                fontWeight: 800, 
                fontSize: '0.75rem', 
                color: 'var(--primary)',
                letterSpacing: '0.2em',
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}
            >
              {post.cat}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ 
                fontFamily: 'var(--font-outfit)', 
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                fontWeight: 800, 
                color: 'var(--text)',
                lineHeight: 1.1,
                marginBottom: '32px',
                letterSpacing: '-0.02em'
              }}
            >
              {post.title}
            </motion.h1>

            {/* AUTHOR & DATE */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '16px' 
              }}
            >
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '50%', background: '#F8FAFC',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)',
                boxShadow: 'inset 2px 2px 5px rgba(163,177,198,0.5), inset -2px -2px 5px rgba(255,255,255,0.8)'
              }}>
                {post.author}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>
                  By GrowMe Team
                </div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {post.date} · 8 min read
                </div>
              </div>
            </motion.div>
          </div>

          {/* MAIN IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ 
              width: '100%', 
              aspectRatio: '16/9', 
              borderRadius: '40px', 
              overflow: 'hidden',
              marginBottom: '64px',
              background: '#F8FAFC',
              boxShadow: '20px 20px 40px rgba(203, 213, 225, 0.5), -20px -20px 40px rgba(255, 255, 255, 0.7)'
            }}
          >
            <img 
              src={post.image} 
              alt={post.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* CONTENT area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ 
              fontFamily: 'var(--font-inter)', 
              fontSize: '1.2rem', 
              lineHeight: 1.8, 
              color: 'var(--text)',
            }}
          />

          <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <Link href="/blog" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '16px',
              background: '#F8FAFC',
              boxShadow: '6px 6px 12px rgba(203, 213, 225, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              color: 'var(--primary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}>
               ← BACK TO JOURNAL
            </Link>
          </div>

        </article>
      </div>

      <Footer />

      <style jsx global>{`
        .blog-content h2 {
          font-family: var(--font-outfit);
          font-size: 2rem;
          font-weight: 800;
          margin: 48px 0 24px;
          color: var(--text);
          line-height: 1.2;
        }
        .blog-content p {
          margin-bottom: 24px;
        }
        .blog-content blockquote {
          margin: 40px 0;
          padding: 32px;
          border-left: 4px solid var(--primary);
          background: rgba(59, 130, 246, 0.05);
          font-style: italic;
          font-size: 1.4rem;
          color: var(--primary);
          font-weight: 500;
          line-height: 1.4;
          border-radius: 0 24px 24px 0;
        }
      `}</style>
    </main>
  );
}
