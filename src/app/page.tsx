import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import PageTransition from '@/components/PageTransition';
import styles from '@/styles/Projects.module.css';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <section className={styles.projects}>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsHeader}>
            <h2 className={styles.projectsTitle}>Featured Projects</h2>
          </div>
        </div>
      </section>
      <ProjectsGrid showFilter={false} limit={3} />
    </PageTransition>
  );
}
