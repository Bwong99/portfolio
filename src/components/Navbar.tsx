'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useChromeVisibility } from '@/components/ChromeVisibility';
import { navItems } from '@/data';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { chromeHidden } = useChromeVisibility();

  // An open menu outranks the hide — otherwise the panel it belongs to vanishes.
  const hidden = chromeHidden && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Every page now sits on the dark photographic surface, so the navbar
  // stays transparent throughout — except when the mobile menu needs a backdrop.
  const overlay = !isOpen;

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${overlay ? styles.overlay : ''}`}
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
              className={`${styles.navbarLink} ${pathname === item.href ? styles.active : ''}`}
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
