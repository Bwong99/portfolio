import { ReactNode } from 'react';
import styles from '@/styles/PageSurface.module.css';

interface PageSurfaceProps {
  children: ReactNode;
  /**
   * dusk:  the default dark page.
   * light: light gray page for the projects pages.
   * photo: no background of its own, so a SiteBackground photo shows through.
   */
  variant?: 'dusk' | 'light' | 'photo';
}

/** Clears the fixed navbar and gives inner pages a minimum height. */
const PageSurface = ({ children, variant = 'dusk' }: PageSurfaceProps) => {
  const theme = variant === 'light' ? 'theme-light' : '';
  return (
    <div className={`${styles.surface} ${styles[variant]} ${theme}`.trim()}>{children}</div>
  );
};

export default PageSurface;
