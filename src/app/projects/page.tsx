import { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Bradley Wong\'s portfolio of projects including embedded systems, robotics, and photography.',
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <PageHeader 
          title="My Projects" 
          subtitle="A collection of work spanning embedded systems, robotics, and photography"
        />
        <ProjectsGrid showFilter={true} />
      </div>
    </PageTransition>
  );
}
