import React from 'react';

interface Props {
  color: string;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  animationDelay?: string;
  animationDirection?: 'normal' | 'reverse';
  className?: string;
}

export default function FloatingOrbs({
  color,
  size,
  top,
  left,
  right,
  bottom,
  animationDelay = '0s',
  animationDirection = 'normal',
  className = ''
}: Props) {
  const style: React.CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    borderRadius: '50%',
    pointerEvents: 'none',
    top,
    left,
    right,
    bottom,
    animation: `orbFloat 9s ease-in-out ${animationDelay} infinite ${animationDirection}`,
    zIndex: 0,
  };

  return <div style={style} className={className} />;
}
