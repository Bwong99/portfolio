'use client';

import PhotographyGallery from '@/components/PhotographyGallery';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';

const photographyPhotos = [
  {
    id: 'nyc-1',
    src: '/photos/backgrounds/nyc1.jpg',
    title: 'New York City',
    description: 'Urban landscape capturing the energy of New York City.',
  },
  {
    id: 'japan-1',
    src: '/photos/backgrounds/japan1.jpg',
    title: 'Japan Vista',
    description: 'Serene moments from Japan.',
  },
  {
    id: 'japan-2',
    src: '/photos/backgrounds/japan2.JPG',
    title: 'Japan Landscape',
    description: 'Beautiful scenery from Japan.',
  },
  {
    id: 'japan-3',
    src: '/photos/backgrounds/japan3.JPG',
    title: 'Japan Views',
    description: 'Captivating views from Japan.',
  },
  {
    id: 'japan-4',
    src: '/photos/backgrounds/japan4.JPG',
    title: 'Japan Scenery',
    description: 'Stunning Japanese scenery.',
  },
  {
    id: 'japan-5',
    src: '/photos/backgrounds/japan5.JPG',
    title: 'Japan Panorama',
    description: 'Wide views of Japanese landscapes.',
  },
];

export default function PhotographyPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <PageHeader 
          title="Photography" 
          subtitle="A curated collection capturing moments through light and composition"
        />
        <PhotographyGallery photos={photographyPhotos} />
      </div>
    </PageTransition>
  );
}
