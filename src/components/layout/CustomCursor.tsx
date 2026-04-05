'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Only run on non-touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX - 5}px, ${clientY - 5}px)`;
      }

      if (ringRef.current) {
        // Simple lag effect via CSS transitions in globals.css
        ringRef.current.style.transform = `translate(${clientX - 18}px, ${clientY - 18}px)`;
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button');

      if (ringRef.current) {
        if (isInteractive) {
          ringRef.current.classList.add('hovered');
        } else {
          ringRef.current.classList.remove('hovered');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="cursor" 
        style={{
          width: '10px',
          height: '10px',
          background: 'var(--primary)',
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)',
          transition: 'transform 0.08s ease-out'
        }}
      />
      <div 
        ref={ringRef} 
        className="cursor-ring" 
        style={{
          width: '36px',
          height: '36px',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'transform 0.15s ease-out, width 0.3s ease, height 0.3s ease, background 0.3s ease'
        }}
      />
    </>
  );
}
