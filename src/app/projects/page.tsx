import { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Bradley Wong\'s portfolio of projects including photography, software development, coding projects, and hardware designs.',
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <ProjectsGrid showFilter={true} />
      </div>
    </PageTransition>
  );
}
