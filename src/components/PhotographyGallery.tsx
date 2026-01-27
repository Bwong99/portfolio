'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Photography.module.css';

interface Photo {
  id: string;
  src: string;
  title: string;
  description?: string;
}

interface PhotographyGalleryProps {
  photos: Photo[];
}

const PhotographyGallery = ({ photos }: PhotographyGalleryProps) => {
  const [centerIndex, setCenterIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(`.${styles.photoItem}`);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const index = Array.from(items).indexOf(entry.target as Element);
            if (index !== -1) {
              setCenterIndex(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.6, 0.75, 1],
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    items.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [photos]);

  return (
    <div className={styles.gallery} ref={containerRef}>
      <div className={styles.galleryTrack}>
        {photos.map((photo, index) => {
          const isCentered = index === centerIndex;
          const distance = Math.abs(index - centerIndex);
          
          return (
            <motion.div
              key={photo.id}
              className={`${styles.photoItem} ${isCentered ? styles.centered : ''}`}
              initial={false}
              animate={{
                scale: isCentered ? 1 : 0.85,
                opacity: isCentered ? 1 : 0.4,
                filter: isCentered ? 'grayscale(0%) brightness(1)' : 'grayscale(60%) brightness(0.7)',
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className={styles.photoWrapper}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={1200}
                  height={800}
                  className={styles.photoImage}
                  priority={index < 3}
                />
                <motion.div
                  className={styles.photoOverlay}
                  initial={false}
                  animate={{
                    opacity: isCentered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={styles.photoTitle}>{photo.title}</h3>
                  {photo.description && (
                    <p className={styles.photoDescription}>{photo.description}</p>
                  )}
                </motion.div>
              </div>
              {isCentered && (
                <motion.div
                  className={styles.spotlight}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
      <div className={styles.progressIndicator}>
        {centerIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PhotographyGallery;
