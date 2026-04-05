'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EcoSphere SaaS",
    category: "Product Design",
    image: "/project1.jpg",
    description: "A high-end environmental monitoring dashboard with real-time data visualization."
  },
  {
    title: "Lino Furniture",
    category: "E-Commerce",
    image: "/project2.jpg",
    description: "Minimalist furniture store featuring seamless checkout and 3D product previews."
  },
  {
    title: "Vivid Studio",
    category: "Branding",
    image: "/project3.jpg",
    description: "Multi-page creative portfolio with interactive case studies and smooth transitions."
  },
  {
    title: "Atlas CRM",
    category: "Enterprise Tool",
    image: "/project4.jpg",
    description: "Streamlined customer relationship management platform for modern sales teams."
  }
];

export default function Showcase() {
  return (
    <section id="showcase" style={{ padding: '100px 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
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
            Our Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            Showcasing Our Latest <br />Digital Masterpieces
          </motion.h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px' 
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '24px',
        borderRadius: '32px',
        background: '#E0E5EC',
        boxShadow: isHovered 
          ? '20px 20px 40px rgba(163, 177, 198, 0.4), -20px -20px 40px rgba(255, 255, 255, 0.8)'
          : '10px 10px 20px rgba(163, 177, 198, 0.5), -10px -10px 20px rgba(255, 255, 255, 1)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer'
      }}
    >
      {/* IMAGE PLACEHOLDER (NEUMORPHIC WELL) */}
      <div style={{
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: '20px',
        background: '#E0E5EC',
        boxShadow: 'inset 8px 8px 16px rgba(163, 177, 198, 0.3), inset -8px -8px 16px rgba(255, 255, 255, 0.6)',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
         <motion.div 
           animate={{ scale: isHovered ? 1.05 : 1 }}
           style={{
             width: '100%',
             height: '100%',
             background: `linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.15) 100%)`,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center',
             padding: '40px'
           }}
         >
           <div style={{
             width: '60px',
             height: '40px',
             background: 'var(--primary)',
             opacity: 0.1,
             borderRadius: '8px',
             marginBottom: '10px'
           }} />
           <div style={{
             width: '80%',
             height: '4px',
             background: 'var(--primary)',
             opacity: 0.05,
             borderRadius: '2px',
             marginBottom: '6px'
           }} />
           <div style={{
             width: '60%',
             height: '4px',
             background: 'var(--primary)',
             opacity: 0.05,
             borderRadius: '2px'
           }} />
         </motion.div>
      </div>

      <div style={{ padding: '0 8px' }}>
        <div style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: 'var(--primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '8px'
        }}>
          {project.category}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: '12px'
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6
        }}>
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
