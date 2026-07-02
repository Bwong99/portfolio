'use client';

import PhotographyGallery from '@/components/PhotographyGallery';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import PageSurface from '@/components/PageSurface';

// `title` stays as the image alt text; `location` is what the caption shows.
const photographyPhotos = [
  {
    id: 'nyc-1',
    src: '/photos/backgrounds/nyc1.jpg',
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
    src: '/photos/backgrounds/japan2.JPG',
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
    src: '/photos/backgrounds/japan5.JPG',
    title: 'Japan Panorama',
    location: 'Japan',
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
