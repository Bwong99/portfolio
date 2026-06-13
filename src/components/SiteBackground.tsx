'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '@/styles/SiteBackground.module.css';

const DEFAULT_IMAGE = '/photos/backgrounds/bradleywong.jpg';

// Each route keeps its own photo; longest matching prefix wins so that
// /projects/<id> inherits the projects photo.
const routeImages: [string, string][] = [
  ['/projects', '/photos/backgrounds/japan1.jpg'],
  ['/about', '/photos/backgrounds/nyc1.jpg'],
  ['/contact', '/photos/backgrounds/japan3.JPG'],
  ['/photography', '/photos/backgrounds/japan4.JPG'],
];

const imageForPath = (pathname: string) =>
  routeImages.find(([prefix]) => pathname.startsWith(prefix))?.[1] ?? DEFAULT_IMAGE;

const SiteBackground = () => {
  const pathname = usePathname();
  const image = imageForPath(pathname);
  const isHome = pathname === '/';

  return (
    <>
      <div className={styles.bg}>
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={isHome ? styles.overlayHome : styles.overlay} />
    </>
  );
};

export default SiteBackground;
