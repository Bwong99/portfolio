'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { experience } from '@/data';
import styles from '@/styles/Home.module.css';

const ease = [0.25, 0.1, 0.25, 1] as const;

// Each block rises into place the first time it scrolls into view.
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease },
};

/* ---------- About: bento grid ---------- */

const AboutBento = () => (
  <section className={styles.section}>
    <div className={styles.bento}>
      <motion.div className={`${styles.panel} ${styles.panelIntro}`} {...reveal}>
        <h2 className={styles.statement}>
          Software engineer
          <span> building systems end to end.</span>
        </h2>
        <p className={styles.panelText}>
          Computer Engineering at UBC. I build backend services, Android apps, and the
          software that runs robots.
        </p>
      </motion.div>

      <motion.div
        className={`${styles.panel} ${styles.panelExperience}`}
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.08 }}
      >
        <span className={styles.label}>Experience</span>
        <ul className={styles.experienceList}>
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`} className={styles.experienceItem}>
              <div className={styles.experienceHead}>
                <span className={styles.experienceOrg}>{job.org}</span>
                <span className={styles.experiencePeriod}>{job.period}</span>
              </div>
              <span className={styles.experienceRole}>{job.role}</span>
              <p className={styles.experienceSummary}>{job.summary}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className={`${styles.panel} ${styles.panelEducation}`}
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.12 }}
      >
        <span className={styles.label}>Education</span>
        <h3 className={styles.panelHeading}>University of British Columbia</h3>
        <p className={styles.panelText}>BASc Computer Engineering · Expected May 2028</p>
      </motion.div>

      <motion.div className={`${styles.panel} ${styles.panelStack}`} {...reveal}>
        <h3 className={styles.panelHeading}>
          Clean APIs,
          <span> tested and shipped.</span>
        </h3>
      </motion.div>

      <motion.div
        className={`${styles.panel} ${styles.panelPhoto}`}
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.08 }}
      >
        <span className={styles.label}>When I&apos;m not coding</span>
        <h3 className={styles.panelHeading}>Taking photos 📷</h3>
        <Link href="/photography" className={styles.panelLink}>
          View photography
        </Link>
      </motion.div>
    </div>
  </section>
);

/**
 * Everything on the home page below the photo hero. Sits on the bright page
 * surface and scrolls up over the fixed photo.
 */
const HomeSections = () => (
  <div className={styles.home}>
    <div className={styles.container}>
      <AboutBento />
    </div>
  </div>
);

export default HomeSections;
