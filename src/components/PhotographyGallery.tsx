'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
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
  const trackRef = useRef<HTMLDivElement>(null);

  // Whichever item's midpoint sits nearest the track's midpoint is the focused
  // one. Measured directly rather than via IntersectionObserver, whose ratios
  // depend on how item width compares to the root box.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const items = Array.from(track.querySelectorAll(`.${styles.photoItem}`));
      if (!items.length) return;

      const trackMid = track.getBoundingClientRect().left + track.clientWidth / 2;
      let nearest = 0;
      let nearestDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - trackMid);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearest = index;
        }
      });

      setCenterIndex(nearest);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    // Entering the spotlight always starts from the first photo, so the badge
    // and the visible photo cannot disagree.
    track.scrollLeft = 0;
    setCenterIndex(0);
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [photos, viewMode]);

  // A trackpad's dominant gesture on this page is still vertical, so translate
  // it into horizontal movement while the spotlight is showing.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      // Hand vertical scrolling back to the page once the track has nothing
      // left to give, otherwise the page can never be scrolled past the track.
      const maxScroll = track.scrollWidth - track.clientWidth;
      const atStart = track.scrollLeft <= 0;
      const atEnd = track.scrollLeft >= maxScroll - 1;
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;

      e.preventDefault();
      track.scrollLeft += e.deltaY;
    };

    track.addEventListener('wheel', onWheel, { passive: false });
    return () => track.removeEventListener('wheel', onWheel);
  }, [viewMode]);

  // The grid is a tall, page-scrolling view and the spotlight is a single
  // viewport-height row. Switching without resetting the page scroll leaves the
  // spotlight scrolled past its own content, which reads as a blank page.
  const switchTo = (mode: 'spotlight' | 'gallery') => {
    setViewMode(mode);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll(`.${styles.photoItem}`);
    items[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className={styles.gallery} ref={containerRef}>
      {/* Keyed so React tears each view down instead of reusing the other's
          nodes — reused nodes carry framer-motion's inline filter across, which
          is what greyed out the grid. */}
      {viewMode === 'spotlight' ? (
        <Fragment key="spotlight">
          <div className={styles.galleryTrack} ref={trackRef}>
            {photos.map((photo, index) => {
              const isCentered = index === centerIndex;

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
                    onClick={() => (isCentered ? setSelectedImage(photo) : scrollToIndex(index))}
                    style={{ cursor: 'pointer' }}
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
            <span className={styles.counter}>
              <span className={styles.counterCurrent}>
                {String(centerIndex + 1).padStart(2, '0')}
              </span>
              <span className={styles.counterTotal}>
                / {String(photos.length).padStart(2, '0')}
              </span>
            </span>
            <span className={styles.divider} aria-hidden="true" />
            <button
              className={styles.viewToggleBtn}
              onClick={() => switchTo('gallery')}
            >
              View all
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment key="gallery">
          <div className={styles.gridView}>
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                className={styles.gridItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className={styles.gridImageWrapper}
                  onClick={() => setSelectedImage(photo)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    width={600}
                    height={400}
                    className={styles.gridImage}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.controlsBar}>
            <span className={styles.counter}>
              <span className={styles.counterTotal}>
                {photos.length} photos
              </span>
            </span>
            <span className={styles.divider} aria-hidden="true" />
            <button
              className={styles.viewToggleBtn}
              onClick={() => switchTo('spotlight')}
            >
              Spotlight
            </button>
          </div>
        </Fragment>
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
