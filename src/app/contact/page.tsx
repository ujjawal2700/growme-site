import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingOrbs from '@/components/ui/FloatingOrbs';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import MultiStepForm from '@/components/contact/MultiStepForm';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      <div style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs color="rgba(91,60,245,0.2)" size={600} top="10%" left="-10%" />
        <FloatingOrbs color="rgba(0,255,178,0.15)" size={400} bottom="10%" right="-5%" animationDelay="2s" />
        
        <div style={{ padding: '0 48px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SectionEyebrow className="justify-center">Start a Project</SectionEyebrow>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
              Let's build your<br/>
              <span style={{ color: 'var(--accent)' }}>Digital Empire.</span>
            </h1>
          </div>

          <MultiStepForm />

          <div style={{ marginTop: '120px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '80px' }}>
            <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', textAlign: 'center', marginBottom: '40px' }}>Alternative Ways to Reach Us</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {[
                { icon: '💬', title: 'WhatsApp', detail: '+1 (555) 000-0000', link: 'https://wa.me/' },
                { icon: '✉️', title: 'Email', detail: 'hello@growme.in', link: 'mailto:hello@growme.in' },
                { icon: '📸', title: 'Instagram', detail: '@growme.in', link: '#' },
                { icon: '💼', title: 'LinkedIn', detail: 'GrowMe Digital', link: '#' }
              ].map((m, i) => (
                <a key={i} href={m.link} className="skeuo-raised group" style={{ padding: '32px 24px', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px', transition: 'transform 0.3s' }} className="group-hover:scale-110">{m.icon}</div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '8px' }}>{m.title}</div>
                  <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.detail}</div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
