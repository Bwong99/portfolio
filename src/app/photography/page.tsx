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
    id: 'above-the-clouds',
    src: '/photos/gallery/bradleywong.jpg',
    title: 'Above the Clouds',
    location: 'Vancouver, BC',
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
          subtitle="A curated collection capturing moments through light and composition"
        />
        <PhotographyGallery photos={photographyPhotos} />
      </PageSurface>
    </PageTransition>
  );
}
