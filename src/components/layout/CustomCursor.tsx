'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Position state used for animation loop
  const positionRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      positionRef.current.mx = e.clientX;
      positionRef.current.my = e.clientY;

      if (cursorRef.current) {
        // Offset by half width/height (12px / 2 = 6px)
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    let animationFrameId: number;

    const animateRing = () => {
      const pos = positionRef.current;
      pos.rx += (pos.mx - pos.rx - 20) * 0.12; // 20 is half of 40px width
      pos.ry += (pos.my - pos.ry - 20) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.rx}px, ${pos.ry}px)`;
      }

      animationFrameId = requestAnimationFrame(animateRing);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.service-card') ||
        target.closest('.industry-card') ||
        target.closest('.process-step')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'hovered' : ''}`}
      ></div>
    </>
  );
}
