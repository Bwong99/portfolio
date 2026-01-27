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
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [viewMode, setViewMode] = useState<'spotlight' | 'gallery'>('spotlight');
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
      {viewMode === 'spotlight' ? (
        <>
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
                  <div 
                    className={styles.photoWrapper}
                    onClick={() => isCentered && setSelectedImage(photo)}
                    style={{ cursor: isCentered ? 'pointer' : 'default' }}
                  >
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
          <div className={styles.controlsBar}>
            <button
              className={styles.viewToggleBtn}
              onClick={() => setViewMode('gallery')}
            >
              {centerIndex + 1} / {photos.length}, View All
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.gridView}>
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                className={styles.gridItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.gridImageWrapper}>
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    width={600}
                    height={400}
                    className={styles.gridImage}
                    style={{ filter: 'none' }}
                  />
                  <motion.div
                    className={styles.gridOverlay}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className={styles.gridPhotoTitle}>{photo.title}</h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.controlsBar}>
            <button
              className={styles.viewToggleBtn}
              onClick={() => setViewMode('spotlight')}
            >
              {photos.length} photos, View Spotlight
            </button>
          </div>
        </>
      )}

      {selectedImage && (
        <motion.div
          className={styles.lightboxBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className={styles.lightboxContent}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1600}
              height={1000}
              className={styles.lightboxImage}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotographyGallery;
