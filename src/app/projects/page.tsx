import { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import PageSurface from '@/components/PageSurface';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Bradley Wong\'s portfolio of projects including embedded systems and robotics.',
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <PageSurface>
        <PageHeader
          title="My Projects"
          subtitle="A collection of work spanning embedded systems and robotics"
        />
        <ProjectsGrid showFilter={true} />
      </PageSurface>
    </PageTransition>
  );
}
