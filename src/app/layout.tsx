import type { Metadata } from 'next';
import { DM_Sans, Space_Mono, Syne } from 'next/font/google';
import '@/styles/globals.css';
import CustomCursor from '@/components/layout/CustomCursor';

import LoadingScreen from '@/components/layout/LoadingScreen';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GrowMe — Digital Growth Agency',
  description: 'From sleek websites to AI-powered chatbots — GrowMe crafts digital experiences that convert, scale, and dominate.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${spaceMono.variable} ${syne.variable} font-sans bg-[#050505]`}
      >
        <LoadingScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
