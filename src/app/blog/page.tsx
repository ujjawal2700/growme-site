'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { postsData, BlogPost } from '@/lib/blog-data';
import Link from 'next/link';

const categories = ['All Topics', 'Strategy', 'Design', 'Technology', 'Guides', 'AI', 'Marketing'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return postsData.filter((post: BlogPost) => {
      const matchesCategory = activeCategory === 'All Topics' || 
        post.cat.toLowerCase() === activeCategory.toLowerCase() ||
        (activeCategory === 'Technology' && post.cat === 'TECH') ||
        (activeCategory === 'Guides' && post.cat === 'GUIDE');
      
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return filteredPosts.find(p => p.featured) || filteredPosts[0];
  }, [filteredPosts]);

  const otherPosts = useMemo(() => {
    return filteredPosts.filter(p => p.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost]);

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      
      <div style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* EDITORIAL HEADER */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{ 
              fontFamily: 'var(--font-inter)', 
              fontWeight: 800, 
              fontSize: '0.8rem', 
              color: 'var(--primary)', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>EDITORIAL</div>
            <h1 style={{ 
              fontFamily: 'var(--font-outfit)', 
              fontSize: 'clamp(3rem, 7vw, 5rem)', 
              fontWeight: 800, 
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              lineHeight: 1
            }}>
              The Journal
            </h1>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontFamily: 'var(--font-inter)', 
              fontSize: '1.2rem',
              maxWidth: '600px',
              lineHeight: 1.5
            }}>
              Long-form notes on product, engineering, and design. Search the archive or start with this week's cover story.
            </p>
          </div>

          {/* SEARCH & FILTERS SECTION */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '64px',
          }}>
            {/* SEARCH BOX */}
            <div style={{ position: 'relative', maxWidth: '400px' }}>
              <input 
                type="text" 
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  background: '#E0E5EC',
                  border: 'none',
                  boxShadow: 'inset 6px 6px 12px rgba(163, 177, 198, 0.5), inset -6px -6px 12px rgba(255, 255, 255, 0.7)',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '1rem',
                  color: 'var(--text)',
                  outline: 'none'
                }}
              />
              <span style={{ 
                position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                opacity: 0.4, fontSize: '1.2rem'
              }}>🔍</span>
            </div>

            {/* CATEGORY PILLS */}
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              overflowX: 'auto', 
              padding: '8px 4px',
            }} className="no-scrollbar">
              {categories.map((cat) => (
                <motion.button 
                  key={cat} 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  style={{ 
                    padding: '8px 20px', 
                    borderRadius: '99px',
                    background: '#E0E5EC',
                    fontFamily: 'var(--font-inter)', 
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: activeCategory === cat ? 'var(--primary)' : 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                    border: 'none',
                    boxShadow: activeCategory === cat 
                      ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                      : '4px 4px 10px rgba(163, 177, 198, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* MAGAZINE CONTENT GRID */}
          <AnimatePresence mode='wait'>
            {filteredPosts.length > 0 ? (
              <motion.div 
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* COVER STORY (Featured Post) */}
                {featuredPost && (
                  <div style={{ marginBottom: '80px' }}>
                    <Link href={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none' }}>
                      <motion.div 
                        whileHover={{ y: -4 }}
                        style={{ 
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                          gap: '0',
                          borderRadius: '40px',
                          overflow: 'hidden',
                          background: '#E0E5EC',
                          boxShadow: '15px 15px 30px rgba(163, 177, 198, 0.5), -15px -15px 30px rgba(255, 255, 255, 0.7)',
                        }}
                      >
                      <div style={{ position: 'relative', minHeight: '400px', background: '#f0f0f0' }}>
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                        />
                      </div>
                      <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                         <div style={{ 
                            display: 'inline-block',
                            padding: '6px 14px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '8px',
                            color: 'var(--primary)',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            marginBottom: '20px',
                            width: 'fit-content'
                         }}>COVER STORY</div>
                         <h2 style={{ 
                            fontFamily: 'var(--font-outfit)', 
                            fontSize: 'clamp(2rem, 4vw, 3rem)', 
                            fontWeight: 800, 
                            color: 'var(--text)',
                            lineHeight: 1.1,
                            marginBottom: '24px'
                         }}>{featuredPost.title}</h2>
                         <p style={{ 
                            fontFamily: 'var(--font-inter)', 
                            fontSize: '1.1rem', 
                            color: 'var(--text-muted)',
                            lineHeight: 1.6,
                            marginBottom: '40px'
                         }}>{featuredPost.desc}</p>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ 
                                width: '40px', height: '40px', borderRadius: '50%', background: '#E0E5EC',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 800, fontSize: '0.8rem', color: 'var(--primary)',
                                boxShadow: 'inset 2px 2px 5px rgba(163,177,198,0.5), inset -2px -2px 5px rgba(255,255,255,0.8)'
                            }}>{featuredPost.author}</div>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{featuredPost.date} · 8 min read</span>
                         </div>
                      </div>
                    </motion.div>
                   </Link>
                  </div>
                )}

                {/* SECONDARY GRID */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
                  gap: '48px' 
                }}>
                  {otherPosts.map((post, i) => (
                    <RevealWrapper key={post.id} delayIndex={i}>
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                        <motion.div 
                          whileHover={{ y: -8 }}
                          style={{ 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column',
                            borderRadius: '32px',
                            background: '#E0E5EC',
                            overflow: 'hidden',
                            boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.4), -10px -10px 20px rgba(255, 255, 255, 0.6)',
                          }}
                        >
                          <div style={{ height: '240px', background: '#eee', overflow: 'hidden' }}>
                              <img 
                                src={post.image} 
                                alt={post.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                          </div>
                          <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ 
                              fontFamily: 'var(--font-inter)', 
                              fontWeight: 800, 
                              fontSize: '0.7rem', 
                              color: 'var(--primary)',
                              letterSpacing: '0.15em',
                              marginBottom: '16px',
                              textTransform: 'uppercase'
                            }}>
                              {post.cat}
                            </div>
                            <h3 style={{ 
                              fontFamily: 'var(--font-outfit)', 
                              fontSize: '1.5rem', 
                              fontWeight: 800, 
                              color: 'var(--text)',
                              lineHeight: 1.3,
                              marginBottom: '12px' 
                            }}>{post.title}</h3>
                            <p style={{ 
                              fontFamily: 'var(--font-inter)',
                              color: 'var(--text-muted)', 
                              fontSize: '0.95rem', 
                              lineHeight: 1.6, 
                              marginBottom: '24px',
                              flexGrow: 1
                            }}>{post.desc}</p>
                            <div style={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              paddingTop: '20px',
                              borderTop: '1px solid rgba(0,0,0,0.05)'
                            }}>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{post.date}</span>
                              <span style={{ 
                                fontFamily: 'var(--font-inter)', 
                                fontWeight: 800,
                                color: 'var(--primary)', 
                                fontSize: '0.75rem',
                                letterSpacing: '0.05em'
                              }}>READ MORE →</span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </RevealWrapper>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: '100px 0' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔍</div>
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)' }}>No articles found</h3>
                <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search or filters.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('All Topics'); }}
                  style={{ 
                    marginTop: '20px',
                    padding: '10px 24px',
                    borderRadius: '12px',
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >Clear all</button>
              </motion.div>
            )}
          </AnimatePresence>

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
