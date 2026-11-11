'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '@/styles/SiteBackground.module.css';

// Pages that sit on a full-screen photo, and the wash laid over each.
const PHOTOS: Record<string, { src: string; overlay: string }> = {
  '/': { src: '/photos/backgrounds/bwong99-bg.jpg', overlay: styles.overlayLight },
  '/photography': { src: '/photos/backgrounds/japan4.JPG', overlay: styles.overlayDark },
};

/** Pages whose background is a photo (the navbar and footer go glass there). */
export const PHOTO_PAGES = Object.keys(PHOTOS);

/**
 * The fixed full-screen photo behind the home and photography pages. Every
 * other page brings its own solid background.
 */
const SiteBackground = () => {
  const pathname = usePathname();
  const photo = PHOTOS[pathname];
  if (!photo) return null;

  return (
    <>
      <div className={styles.bg}>
        <Image
          src={photo.src}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={`${styles.overlay} ${photo.overlay}`} />
    </>
  );
};

export default SiteBackground;
