import type { Metadata } from 'next';
import { League_Spartan, Poppins, Archivo } from 'next/font/google';
import '@/styles/globals.css';
import CustomCursor from '@/components/layout/CustomCursor';

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-spartan',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-archivo',
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spartan.variable} ${poppins.variable} ${archivo.variable} font-sans`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
