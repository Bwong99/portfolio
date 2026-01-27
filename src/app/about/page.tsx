import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Bradley Wong - a full-stack developer and photographer with expertise in React, TypeScript, and Next.js.',
};

// Static Site Generation - page will be pre-rendered at build time
export default function AboutPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <AboutSection />
      </div>
    </PageTransition>
  );
}
