'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({ children, href, variant = 'primary', onClick, className, style }: ButtonProps) {
  const isPrimary = variant === 'primary';
  const isGhost = variant === 'ghost';

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-inter)',
    fontSize: '0.9rem',
    fontWeight: 600,
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
    background: isPrimary ? 'var(--primary)' : 'var(--bg)',
    color: isPrimary ? '#fff' : 'var(--text)',
    boxShadow: isPrimary 
      ? '6px 6px 12px rgba(59, 130, 246, 0.3)' 
      : '6px 6px 12px var(--nm-dark), -6px -6px 12px var(--nm-light)',
    ...style,
  };

  const Component = href ? Link : 'button';

  return (
    <motion.div
      whileHover={{ scale: 0.98, translateY: 1 }}
      whileTap={{ scale: 0.96, translateY: 2 }}
    >
      <Component 
        href={href as string} 
        onClick={onClick}
        style={baseStyle}
        className={className}
      >
        {children}
      </Component>
    </motion.div>
  );
}
