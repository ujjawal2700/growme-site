import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionEyebrow({ children, className = '', delay = 0.2 }: Props) {
  const style: React.CSSProperties = {
    fontFamily: 'var(--font-space-mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    opacity: 0,
    animation: `fadeUp 0.8s ${delay}s forwards`,
  };

  const lineStyle: React.CSSProperties = {
    content: '""',
    width: '40px',
    height: '1px',
    background: 'var(--accent)',
  };

  return (
    <div style={style} className={className}>
      <div style={lineStyle} />
      {children}
    </div>
  );
}
