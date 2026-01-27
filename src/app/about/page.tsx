import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Bradley Wong - a Computer Engineering student at UBC with expertise in embedded systems and digital design.',
};

// Static Site Generation - page will be pre-rendered at build time
export default function AboutPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <PageHeader 
          title="About Me" 
          subtitle="Computer Engineering Student & Embedded Systems Developer"
        />
        <AboutSection />
      </div>
    </PageTransition>
  );
}
