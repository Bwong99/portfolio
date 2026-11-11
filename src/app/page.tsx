import Hero from '@/components/Hero';
import HomeSections from '@/components/HomeSections';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <HomeSections />
    </PageTransition>
  );
}
