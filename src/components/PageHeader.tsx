'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/PageHeader.module.css';

interface PageHeaderProps {
  /** Small uppercase label above the heading, e.g. "Projects". */
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => {
  return (
    <header className={styles.pageHeader}>
      {eyebrow && (
        <motion.span
          className={styles.pageEyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h1
        className={styles.pageTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className={styles.pageSubtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
};

export default PageHeader;
