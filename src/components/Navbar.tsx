'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useChromeVisibility } from '@/components/ChromeVisibility';
import { PHOTO_PAGES } from '@/components/SiteBackground';
import { navItems } from '@/data';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const pathname = usePathname();
  const { chromeHidden } = useChromeVisibility();

  // An open menu outranks the hide — otherwise the panel it belongs to vanishes.
  const hidden = chromeHidden && !isOpen;

  // The bar floats transparent over a dark top section (the home photo, or a
  // black page header) until it scrolls out from under it; otherwise it's the
  // solid bright bar.
  useEffect(() => {
    const check = () => {
      const hero = document.querySelector('[data-nav-overlay]');
      const navHeight = 70; // keep in step with --nav-height
      setOverHero(!!hero && hero.getBoundingClientRect().bottom > navHeight);
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);

    // The page body can mount after this runs (route transitions), so check
    // again whenever the content changes.
    let frame = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(check);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // A section stays highlighted on its sub-pages (e.g. /projects/<id>).
  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  // An open mobile menu needs the solid bar behind it.
  const overlay = overHero && !isOpen;
  // On a photo page the bar is glass over the photo; on the projects pages
  // it's the solid dark gray.
  const glass = !overlay && !isOpen && PHOTO_PAGES.includes(pathname);
  const slate = pathname.startsWith('/projects');

  return (
    <motion.nav
      className={`${styles.navbar} ${overlay ? styles.overlay : ''} ${glass ? styles.glass : ''} ${slate ? styles.slate : ''}`}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: hidden ? 'none' : 'auto' }}
    >
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          Bradley Wong
        </Link>

        <div className={`${styles.navbarLinks} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navbarLink} ${isActive(item.href) ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className={`${styles.navbarToggle} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
