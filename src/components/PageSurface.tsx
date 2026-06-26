import { ReactNode } from 'react';
import styles from '@/styles/PageSurface.module.css';

interface PageSurfaceProps {
  children: ReactNode;
}

/**
 * Clears the fixed navbar and gives inner pages a minimum height.
 * The background photo itself is supplied site-wide by SiteBackground.
 */
const PageSurface = ({ children }: PageSurfaceProps) => {
  return <div className={styles.surface}>{children}</div>;
};

export default PageSurface;
