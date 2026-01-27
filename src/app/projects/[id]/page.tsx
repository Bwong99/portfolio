import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data';
import styles from '@/styles/Projects.module.css';

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
  const project = projects.find((p) => p.id === params.id);

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

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.projectDetail}>
      <div className={styles.projectDetailContainer}>
        <Link href="/projects" className={styles.backButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </Link>

        <div className={styles.projectDetailHeader}>
          <span className={styles.projectDetailCategory}>{project.category}</span>
          <h1 className={styles.projectDetailTitle}>{project.title}</h1>
        </div>

        <div className={styles.projectDetailImage}>
          <Image
            src={project.images[0] || project.thumbnail}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className={styles.projectDetailContent}>
          {/* Project Description Section */}
          <div className={styles.projectSection}>
            <h2 className={styles.sectionTitle}>About This Project</h2>
            <p className={styles.projectDetailDescription}>{project.longDescription}</p>
          </div>

          {/* Technologies & Tools Section */}
          <div className={styles.projectSection}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
            <div className={styles.projectDetailTechList}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className={styles.projectSection}>
              <h2 className={styles.sectionTitle}>Screenshots</h2>
              <div className={styles.screenshotsGrid}>
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className={styles.screenshotItem}>
                    <Image
                      src={screenshot}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      width={1200}
                      height={800}
                      style={{ objectFit: 'cover' }}
                      className={styles.screenshotImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.projectDetailLinks}>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projectDetailLink} ${styles.primary}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                View Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projectDetailLink} ${styles.secondary}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View Source
              </a>
            )}
          </div>

          {project.images.length > 1 && (
            <div className={styles.projectGallery}>
              <h3 className={styles.projectGalleryTitle}>Gallery</h3>
              <div className={styles.projectGalleryGrid}>
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className={styles.galleryImage}>
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
