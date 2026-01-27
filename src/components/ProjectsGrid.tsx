'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data';
import { Project } from '@/types';
import styles from '@/styles/Projects.module.css';

interface ProjectsGridProps {
  showFilter?: boolean;
  limit?: number;
}

const ProjectsGrid = ({ showFilter = true, limit }: ProjectsGridProps) => {
  const [filter, setFilter] = useState<string>('all');
  const categories = ['all', 'photography', 'software', 'coding', 'hardware'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

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
        <motion.div
          className={styles.projectsHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.projectsTitle}>My Projects</h2>
          <p className={styles.projectsSubtitle}>
            A collection of my work spanning photography, software development, and hardware projects
          </p>
        </motion.div>

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

interface ProjectCardProps {
  project: Project;
  variants: any;
}

const ProjectCard = ({ project, variants }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link href={`/projects/${project.id}`} className={styles.projectCard}>
        <div className={styles.projectThumbnail}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.projectOverlay}>
            <span className={styles.projectOverlayBtn}>View Details</span>
          </div>
        </div>
        <div className={styles.projectContent}>
          <span className={styles.projectCategory}>{project.category}</span>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectsGrid;
