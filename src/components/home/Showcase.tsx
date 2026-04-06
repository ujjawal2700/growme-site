'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Vercel',
    category: 'Cloud Platform',
    image: '/project1.png',
    description: 'Deploy web projects with zero config. The AI cloud for building, scaling, and shipping the fastest web experiences.',
    url: 'https://vercel.com',
    tags: ['Next.js', 'Edge', 'CI/CD'],
    color: '#000000',
    stat: '1M+ deploys/day',
  },
  {
    title: 'Shopify',
    category: 'E-Commerce',
    image: '/project2.png',
    description: 'The all-in-one commerce platform — build your online store, manage products, payments, and shipping globally.',
    url: 'https://shopify.com',
    tags: ['Commerce', 'Payments', 'Global'],
    color: '#96BF48',
    stat: '4.6M+ stores',
  },
  {
    title: 'Framer',
    category: 'Web Design',
    image: '/project3.png',
    description: 'Design and ship stunning sites with no-code. The modern tool for creating interactive, production-ready websites.',
    url: 'https://framer.com',
    tags: ['No-Code', 'CMS', 'Animations'],
    color: '#0055FF',
    stat: '500k+ sites built',
  },
  {
    title: 'Notion',
    category: 'Productivity SaaS',
    image: '/project4.png',
    description: 'One workspace for everything — docs, wikis, databases, and AI assistance for teams of all sizes.',
    url: 'https://notion.so',
    tags: ['Workspace', 'AI', 'Collaboration'],
    color: '#000000',
    stat: '35M+ users',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="proj-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '24px',
        background: '#E0E5EC',
        boxShadow: hovered
          ? '12px 12px 24px rgba(163,177,198,0.5), -12px -12px 24px rgba(255,255,255,0.9)'
          : '8px 8px 18px rgba(163,177,198,0.55), -8px -8px 18px rgba(255,255,255,0.85)',
        overflow: 'hidden',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Real screenshot preview area ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        flexShrink: 0,
        background: '#c8d0dc',
      }}>
        {/* Screenshot */}
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />

        {/* Stat badge top-right */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(8px)',
          borderRadius: '99px',
          padding: '3px 10px',
          fontSize: '0.65rem',
          fontWeight: 700,
          fontFamily: 'var(--font-inter)',
          color: project.color,
          border: `1px solid ${project.color}33`,
          letterSpacing: '0.02em',
        }}>
          {project.stat}
        </div>

        {/* Hover overlay with Visit Site button */}
        <AnimatePresence>
          {hovered && (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <motion.span
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#fff',
                  color: project.color,
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  padding: '10px 20px',
                  borderRadius: '99px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                }}
              >
                🔗 Visit Site
              </motion.span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: '20px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Category + visit link row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            fontFamily: 'var(--font-inter)',
            color: project.color,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            background: `${project.color}15`,
            padding: '3px 9px',
            borderRadius: '99px',
            border: `1px solid ${project.color}33`,
          }}>
            {project.category}
          </span>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.7rem',
              fontWeight: 600,
              fontFamily: 'var(--font-inter)',
              color: project.color,
              textDecoration: 'none',
              padding: '4px 10px',
              borderRadius: '99px',
              background: `${project.color}15`,
              border: `1px solid ${project.color}33`,
              transition: 'opacity 0.2s',
            }}
          >
            ↗ View Live
          </a>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          fontWeight: 800,
          color: 'var(--text)',
          margin: 0,
          lineHeight: 1.2,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          lineHeight: 1.55,
          margin: 0,
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tag pills */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: '0.62rem',
              fontWeight: 600,
              fontFamily: 'var(--font-inter)',
              color: 'var(--text-muted)',
              background: '#E0E5EC',
              boxShadow: 'inset 2px 2px 4px rgba(163,177,198,0.35), inset -2px -2px 4px rgba(255,255,255,0.6)',
              borderRadius: '6px',
              padding: '3px 8px',
              letterSpacing: '0.04em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" style={{ padding: 'clamp(60px, 8vw, 100px) 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 60px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '14px',
            }}
          >
            Our Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: '0 auto 12px',
              maxWidth: '700px',
            }}
          >
            Work We're <span style={{ color: 'var(--primary)' }}>Proud Of</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Real projects. Real results. Click any card to visit the live site.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="showcase-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        /* ── DESKTOP ── */
        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        /* ── TABLET ── */
        @media (max-width: 900px) {
          .showcase-grid { gap: 20px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 680px) {
          #showcase { padding: 52px 14px !important; }
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
        }

        /* ── MOBILE S ── */
        @media (max-width: 400px) {
          #showcase { padding: 40px 12px !important; }
          #showcase h2 { font-size: 1.6rem !important; }
        }
      `}</style>
    </section>
  );
}
