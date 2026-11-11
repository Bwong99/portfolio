'use client';

import { CSSProperties, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectAccent } from '@/data';
import { Project } from '@/types';
import styles from '@/styles/Projects.module.css';

interface ProjectsGridProps {
  showFilter?: boolean;
  limit?: number;
}

const ProjectsGrid = ({ showFilter = true, limit }: ProjectsGridProps) => {
  const [filter, setFilter] = useState<string>('software');
  const categories = ['all', 'software', 'hardware'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.categories.includes(filter as Project['categories'][number]));

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        {showFilter && (
          <motion.div
            className={styles.projectsFilter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        )}

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variants={itemVariants} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Tags shown on the card; the detail page lists the full stack.
const MAX_TAGS = 4;

interface ProjectCardProps {
  project: Project;
  variants: any;
}

export const ProjectCard = ({ project, variants }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <article
        className={styles.projectCard}
        style={{ '--project-accent': projectAccent(project.id) } as CSSProperties}
      >
        <div className={styles.projectMedia}>
          {project.video ? (
            // A demo clip, when there is one, plays on its own in place of the photo.
            <video
              className={styles.projectVideo}
              src={project.video}
              poster={project.thumbnail}
              autoPlay
              muted
              loop
              playsInline
              aria-label={`${project.title} demo`}
            />
          ) : (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>

        <div className={styles.projectBody}>
          {project.tagline && <span className={styles.projectKicker}>{project.tagline}</span>}
          <h3 className={styles.projectTitle}>
            <Link href={`/projects/${project.id}`} className={styles.projectLink}>
              {project.title}
            </Link>
          </h3>
          <p className={styles.projectDescription}>{project.description}</p>

          <ul className={styles.projectTags}>
            {project.technologies.slice(0, MAX_TAGS).map((tech) => (
              <li key={tech} className={styles.projectTag}>{tech}</li>
            ))}
          </ul>

          <div className={styles.projectFooter}>
            <Link href={`/projects/${project.id}`} className={styles.readMore}>
              Read more
            </Link>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectActionIcon}
                aria-label={`${project.title} live demo`}
                title="Live demo"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectActionIcon}
                aria-label={`${project.title} source code on GitHub`}
                title="Source code"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default ProjectsGrid;
