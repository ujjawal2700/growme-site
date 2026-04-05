'use client';

import React, { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import SectionEyebrow from '../ui/SectionEyebrow';

const services = [
  { 
    num: '01', icon: '💻', name: 'Web Engineering', 
    desc: 'Bespoke, high-performance web ecosystems built for extreme scalability and bulletproof security.', 
    tags: ['Next.js', 'TypeScript', 'Node'],
    accent: '#00f2ff', // Cyber Blue
    poly: 'polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)'
  },
  { 
    num: '02', icon: '📱', name: 'Mobile Architecture', 
    desc: 'Fluid, native-grade mobile experiences designed to dominate the App Store rankings.', 
    tags: ['React Native', 'Swift', 'Flutter'],
    accent: '#ff0055', // Neon Pink
    poly: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)'
  },
  { 
    num: '03', icon: '🤖', name: 'Neural Systems', 
    desc: 'Integrating advanced LLMs and automation agents into your core business operations.', 
    tags: ['OpenAI', 'Python', 'Agentic'],
    accent: '#00ff41', // Matrix Green
    poly: 'polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 90%)'
  },
  { 
    num: '04', icon: '✨', name: 'UX Intelligence', 
    desc: 'Psychology-driven design systems that maximize user retention and conversion velocity.', 
    tags: ['Figma', 'Prototyping', 'Ecosystems'],
    accent: '#7000ff', // Vivid Purple
    poly: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)'
  },
  { 
    num: '05', icon: '🚀', name: 'Growth Ops', 
    desc: 'Data-backed performance marketing and technical SEO strategies for algorithmic supremacy.', 
    tags: ['SEO', 'Analytics', 'Conversion'],
    accent: '#ff9500', // Volcanic Orange
    poly: 'polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)'
  },
  { 
    num: '06', icon: '📈', name: 'Scale Strategy', 
    desc: 'Full-funnel consulting to align technical infrastructure with aggressive market expansion.', 
    tags: ['Strategy', 'GTM', 'Scale'],
    accent: '#ffffff', // Stark White
    poly: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)'
  },
];

function ParallaxDecoration() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, opacity: 0.1 }}>
      <motion.div style={{ y: y1, rotate, position: 'absolute', top: '10%', right: '5%', width: '1px', height: '800px', background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)' }} />
      <motion.div style={{ y: y2, position: 'absolute', top: '20%', left: '10%', width: '200px', height: '1px', background: 'linear-gradient(to right, transparent, var(--purple), transparent)' }} />
      <div style={{ position: 'absolute', bottom: '0', right: '10%', fontFamily: 'var(--font-space-mono)', fontSize: '15rem', color: 'rgba(255,255,255,0.02)', userSelect: 'none' }}>SCALE</div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: isEven ? 10 : -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="cyber-panel"
        style={{
          padding: '48px 40px',
          height: '100%',
          clipPath: service.poly,
          background: 'linear-gradient(135deg, rgba(20,20,30,0.9) 0%, rgba(5,5,8,1) 100%)',
          border: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
        }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        {/* Dynamic Light Tracking */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${service.accent}15, transparent 100%)`,
          pointerEvents: 'none',
        }} />

        {/* LED Status Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: service.accent, boxShadow: `0 0 10px ${service.accent}` }} />
          <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-space-mono)', color: service.accent, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Module Active</span>
        </div>

        <div style={{ fontSize: '3rem', marginBottom: '24px', opacity: 0.9 }}>{service.icon}</div>
        
        <h3 style={{ 
          fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.5rem', 
          marginBottom: '16px', color: 'var(--white)', letterSpacing: '-0.02em',
          textShadow: `0 0 20px ${service.accent}20`
        }}>
          {service.name}
        </h3>

        <p style={{ 
          fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, 
          marginBottom: '32px', flexGrow: 1, fontWeight: 300 
        }}>
          {service.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {service.tags.map(tag => (
            <span key={tag} style={{ 
              fontSize: '0.55rem', fontFamily: 'var(--font-space-mono)', 
              color: 'var(--white)', opacity: 0.6, border: '1px solid rgba(255,255,255,0.1)',
              padding: '4px 8px', borderRadius: '2px', background: 'rgba(255,255,255,0.02)'
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Decorative background number */}
        <div style={{
          position: 'absolute', bottom: '-20px', right: '-10px',
          fontSize: '6rem', fontFamily: 'var(--font-syne)', fontWeight: 900,
          color: 'rgba(255,255,255,0.03)', pointerEvents: 'none'
        }}>
          {service.num}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section 
      id="services" 
      ref={containerRef}
      style={{ position: 'relative', padding: '160px 48px', overflow: 'hidden', background: '#020204' }}
    >
      <ParallaxDecoration />

      {/* Progress Hub */}
      <div style={{ 
        position: 'absolute', right: '48px', top: '160px', height: 'calc(100% - 320px)', 
        width: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 10 
      }} className="md-hidden">
        <motion.div 
          style={{ width: '100%', background: 'var(--accent)', scaleY: scaleProgress, transformOrigin: 'top', height: '100%', boxShadow: '0 0 15px var(--accent)' }} 
        />
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '100px', maxWidth: '1200px' }}
        >
          <SectionEyebrow delay={0}>System Capabilities</SectionEyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '60px', alignItems: 'flex-end' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-syne)', fontWeight: 800, 
              fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.9, letterSpacing: '-0.04em' 
            }}>
              ENGINEERED FOR <span style={{ color: 'var(--accent)', textShadow: '0 0 30px var(--accent)30' }}>HYPER-GROWTH.</span>
            </h2>
            <p style={{ 
              fontSize: '0.95rem', color: 'var(--text-muted)', fontFamily: 'var(--font-space-mono)', 
              lineHeight: 1.8, borderLeft: '1px solid var(--purple)', paddingLeft: '32px' 
            }} className="md-hidden">
              We deploy advanced technical matrices to scale performance beyond conventional limits. Every service is a module in your system.
            </p>
          </div>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #services { padding: 80px 24px !important; }
          .md-hidden { display: none !important; }
        }
        @media (max-width: 480px) {
          #services { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
