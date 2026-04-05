'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionEyebrow({ children, className = '', delay = 0.2 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{
        display: 'inline-flex',
        padding: '8px 20px',
        borderRadius: '20px',
        background: '#E0E5EC',
        boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.5)',
        fontFamily: 'var(--font-inter)',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: 'var(--primary)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '24px',
        alignItems: 'center',
        gap: '8px'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
