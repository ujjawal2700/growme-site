import React from 'react';

export default function StatsTicker() {
  const barStyle: React.CSSProperties = {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    padding: '20px 0',
    overflow: 'hidden',
    position: 'relative',
    background: 'rgba(255,255,255,0.015)',
  };

  const trackStyle: React.CSSProperties = {
    display: 'flex',
    gap: '80px',
    animation: 'ticker 20s linear infinite',
    whiteSpace: 'nowrap',
    width: 'max-content',
  };

  const itemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexShrink: 0,
  };

  const numStyle: React.CSSProperties = {
    fontFamily: 'var(--font-syne)',
    fontWeight: 800,
    fontSize: '1.5rem',
    color: 'var(--purple-light)',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-space-mono)',
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
  };

  const dividerStyle: React.CSSProperties = {
    color: 'var(--gray2)',
    fontSize: '1.2rem',
  };

  // We duplicate the stats to create a seamless infinite loop
  const stats = [
    { num: '200+', label: 'Projects Completed' },
    { num: '98%', label: 'Client Satisfaction' },
    { num: '50+', label: 'Team Members' },
    { num: '5yr', label: 'Agency Experience' },
  ];

  const duplicatedStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <div style={barStyle}>
      <div style={trackStyle}>
        {duplicatedStats.map((stat, i) => (
          <React.Fragment key={i}>
            <div style={itemStyle}>
              <span style={numStyle}>{stat.num}</span>
              <span style={labelStyle}>{stat.label}</span>
            </div>
            {i !== duplicatedStats.length - 1 && (
              <span style={dividerStyle}>/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
