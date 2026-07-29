'use client';

import PhotographyGallery from '@/components/PhotographyGallery';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import PageSurface from '@/components/PageSurface';

// `title` stays as the image alt text; `location` is what the caption shows.
const photographyPhotos = [
  {
    id: 'nyc-1',
    src: '/photos/gallery/nyc1.jpg',
    title: 'New York City',
    location: 'New York City',
  },
  {
    id: 'japan-1',
    src: '/photos/backgrounds/japan1.jpg',
    title: 'Japan Vista',
    location: 'Japan',
  },
  {
    id: 'japan-2',
    src: '/photos/gallery/japan2.JPG',
    title: 'Japan Landscape',
    location: 'Japan',
  },
  {
    id: 'japan-3',
    src: '/photos/backgrounds/japan3.JPG',
    title: 'Japan Views',
    location: 'Japan',
  },
  {
    id: 'japan-4',
    src: '/photos/backgrounds/japan4.JPG',
    title: 'Japan Scenery',
    location: 'Japan',
  },
  {
    id: 'japan-5',
    src: '/photos/gallery/japan5.JPG',
    title: 'Japan Panorama',
    location: 'Japan',
  },
  {
    id: 'radio-city',
    src: '/photos/gallery/nycFountain.jpg',
    title: 'Radio City',
    location: 'New York City',
  },
  {
    id: 'pump-peak',
    src: '/photos/gallery/pumppeak1.jpg',
    title: 'Pump Peak',
    location: 'Vancouver, BC',
  },
  {
    id: 'pump-peak-3',
    src: '/photos/gallery/pumpeak3.jpg',
    title: 'Pump Peak Ridge',
    location: 'Vancouver, BC',
  },
  {
    id: 'pump-peak-4',
    src: '/photos/gallery/pumpeak4.jpg',
    title: 'Pump Peak Summit',
    location: 'Vancouver, BC',
  },
  {
    id: 'pump-peak-2',
    src: '/photos/backgrounds/pumppeak2.jpg',
    title: 'Pump Peak Traverse',
    location: 'Vancouver, BC',
  },
  {
    id: 'golden-hour',
    src: '/photos/gallery/sun.JPG',
    title: 'Golden Hour',
    location: 'Vancouver, BC',
  },
];

export default function PhotographyPage() {
  return (
    <PageTransition>
      <PageSurface>
        <PageHeader
          title="Photography"
          subtitle="I like to take photos."
        />
        <PhotographyGallery photos={photographyPhotos} />
      </PageSurface>
    </PageTransition>
  );
}
