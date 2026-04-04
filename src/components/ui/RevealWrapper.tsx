'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delayIndex?: number;
  threshold?: number;
}

export default function RevealWrapper({ 
  children, 
  className = '', 
  style,
  delayIndex = 0,
  threshold = 0.1 
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          // Use timeout based on delayIndex for staggered animations
          setTimeout(() => {
            setIsVisible(true);
          }, delayIndex * 80);
          
          observer.unobserve(e.target);
        }
      });
    }, { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delayIndex, threshold]);

  return (
    <div ref={ref} style={style} className={`reveal ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
