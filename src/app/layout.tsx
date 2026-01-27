import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Bradley Wong | Full-Stack Developer & Photographer',
    template: '%s | Bradley Wong',
  },
  description:
    'Personal portfolio of Bradley Wong - a full-stack developer and photographer based in San Francisco. Explore my projects in software development, photography, and hardware.',
  keywords: [
    'Bradley Wong',
    'Full-Stack Developer',
    'Photographer',
    'React',
    'Next.js',
    'TypeScript',
    'Web Developer',
    'San Francisco',
  ],
  authors: [{ name: 'Bradley Wong' }],
  creator: 'Bradley Wong',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bradleywong.dev',
    siteName: 'Bradley Wong Portfolio',
    title: 'Bradley Wong | Full-Stack Developer & Photographer',
    description:
      'Personal portfolio of Bradley Wong - a full-stack developer and photographer based in San Francisco.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bradley Wong Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bradley Wong | Full-Stack Developer & Photographer',
    description:
      'Personal portfolio of Bradley Wong - a full-stack developer and photographer.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
