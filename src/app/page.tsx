import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ProjectsGrid showFilter={false} limit={3} />
    </PageTransition>
  );
}
