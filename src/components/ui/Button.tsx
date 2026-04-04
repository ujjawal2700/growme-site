'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  // Common base style properties regardless of variant
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position: 'relative',
    cursor: 'none', // custom cursor logic
  };

  const getStyle = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: '0.9rem',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          padding: '16px 36px',
          background: 'var(--purple)',
          color: 'var(--white)',
          border: 'none',
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
          boxShadow: `
            0 1px 0 rgba(255, 255, 255, 0.3) inset,
            0 -2px 0 rgba(0, 0, 0, 0.3) inset,
            0 4px 12px rgba(91, 60, 245, 0.4),
            0 1px 3px rgba(0, 0, 0, 0.4)
          `,
          transition: 'transform 0.1s, box-shadow 0.1s',
        };
      case 'outline':
        return {
          ...baseStyle,
          fontFamily: 'var(--font-space-mono)',
          fontWeight: 400,
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '18px 36px',
          background: 'rgba(255, 255, 255, 0.03)',
          color: 'var(--white)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.4)',
          transition: 'transform 0.1s, box-shadow 0.1s, background 0.2s',
        };
      case 'ghost':
        return {
          ...baseStyle,
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          background: 'transparent',
          border: 'none',
          gap: '10px',
          transition: 'color 0.2s, gap 0.2s',
        };
      default:
        return baseStyle;
    }
  };

  const getClassName = () => {
    let classes = `btn-${variant} ${className}`;
    if(variant === 'primary' || variant === 'outline') {
      classes += ' skeuo-btn-base'; // Note: handled via inline styles + JS hover/active if needed, or CSS classes you add later. But inline styles are fine.
    }
    return classes.trim();
  };

  // Content wrapper
  const content = (
    <>
      {children}
      {variant === 'ghost' && (
        <span style={{ transition: 'transform 0.2s' }}>→</span>
      )}
    </>
  );

  const style = getStyle();

  const handleActive = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(2px)';
      e.currentTarget.style.boxShadow = `
        0 1px 0 rgba(0, 0, 0, 0.4) inset,
        0 -1px 0 rgba(255, 255, 255, 0.1) inset,
        0 2px 4px rgba(91, 60, 245, 0.4)
      `;
    } else if (variant === 'outline') {
       e.currentTarget.style.transform = 'translateY(2px)';
       e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.4) inset';
    }
  };

  const handleActiveEnd = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
        0 1px 0 rgba(255, 255, 255, 0.3) inset,
        0 -2px 0 rgba(0, 0, 0, 0.3) inset,
        0 4px 12px rgba(91, 60, 245, 0.4),
        0 1px 3px rgba(0, 0, 0, 0.4)
      `;
    } else if (variant === 'outline') {
       e.currentTarget.style.transform = 'translateY(0)';
       e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.4)';
    }
  };

  if (href) {
    return (
      <Link 
        href={href} 
        style={style} 
        className={getClassName()}
        onMouseDown={handleActive}
        onMouseUp={handleActiveEnd}
        onMouseLeave={handleActiveEnd}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      style={style} 
      className={getClassName()} 
      onMouseDown={handleActive}
      onMouseUp={handleActiveEnd}
      onMouseLeave={handleActiveEnd}
      {...props}
    >
      {content}
    </button>
  );
}
