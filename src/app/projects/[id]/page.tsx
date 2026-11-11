import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data';
import PageSurface from '@/components/PageSurface';
import styles from '@/styles/ProjectDetail.module.css';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all projects - enables SSG for dynamic routes
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.thumbnail }],
    },
  };
}

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const hero = project.images[0] || project.thumbnail;

  return (
    <PageSurface variant="light">
      <article className={styles.page}>
        <Link href="/projects" className={styles.back}>
          ← All projects
        </Link>

        <header className={styles.header}>
          {project.tagline && <span className={styles.kicker}>{project.tagline}</span>}
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.lede}>{project.description}</p>
        </header>

        <div className={styles.hero}>
          <div className={styles.heroMedia}>
            <Image
              src={hero}
              alt={project.title}
              fill
              sizes="(max-width: 960px) 100vw, 920px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        <div className={styles.details}>
          <aside className={styles.meta}>
            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt>Type</dt>
                <dd>{project.categories.map(capitalize).join(' + ')}</dd>
              </div>
              {project.context && (
                <div className={styles.fact}>
                  <dt>Built with</dt>
                  <dd>{project.context}</dd>
                </div>
              )}
              <div className={styles.fact}>
                <dt>Stack</dt>
                <dd>
                  <ul className={styles.stack}>
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            {(project.github || project.link) && (
              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryLink}
                  >
                    <GithubIcon />
                    View source
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryLink}
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            )}
          </aside>

          <div className={styles.body}>
            {project.sections.map((section) => (
              <section key={section.heading} className={styles.section}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                <ul className={styles.points}>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

      </article>
    </PageSurface>
  );
}
