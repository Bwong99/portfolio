'use client';

import { motion } from 'framer-motion';
import { aboutMe, skills, education } from '@/data';
import styles from '@/styles/About.module.css';

const AboutSection = () => {
  const skillCategories = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    tools: skills.filter((s) => s.category === 'tools'),
    other: skills.filter((s) => s.category === 'other'),
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <motion.div
            className={styles.aboutGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div className={styles.aboutContent} variants={itemVariants}>
              <div className={styles.aboutBio}>
                {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className={styles.aboutInfo}>
                <div className={styles.aboutInfoItem}>
                  <span className={styles.aboutInfoLabel}>Location:</span>
                  <span className={styles.aboutInfoValue}>{aboutMe.location}</span>
                </div>
                <div className={styles.aboutInfoItem}>
                  <span className={styles.aboutInfoLabel}>Status:</span>
                  <span className={styles.aboutInfoValue}>{aboutMe.availability}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <div className={styles.skillsContainer}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>

          <motion.div
            className={styles.skillsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <motion.div key={category} className={styles.skillCategory} variants={itemVariants}>
                <h3 className={styles.skillCategoryTitle}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul className={styles.skillList}>
                  {categorySkills.map((skill) => (
                    <li key={skill.name} className={styles.skillItem}>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.education}>
        <div className={styles.educationContainer}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>

          <motion.div
            className={styles.educationTimeline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {education.map((edu, index) => (
              <motion.div key={index} className={styles.educationItem} variants={itemVariants}>
                <span className={styles.educationYear}>{edu.year}</span>
                <h3 className={styles.educationDegree}>{edu.degree}</h3>
                <p className={styles.educationSchool}>{edu.school}</p>
                <p className={styles.educationDescription}>{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
