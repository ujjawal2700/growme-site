import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '@/styles/globals.css';
import CustomCursor from '@/components/layout/CustomCursor';

import LoadingScreen from '@/components/layout/LoadingScreen';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GrowMe — Digital Growth Agency',
  description: 'Helping businesses grow with simple, high-end digital solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-[#E0E5EC]`}
      >
        <div className="bg-grid-overlay" /> {/* GLOBAL GRID LAYER ALWAYS VISIBLE */}
        <LoadingScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
