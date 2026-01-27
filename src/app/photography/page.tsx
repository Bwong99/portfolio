'use client';

import PhotographyGallery from '@/components/PhotographyGallery';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';

const photographyPhotos = [
  {
    id: 'urban-1',
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
    title: 'City Lights',
    description: 'Downtown Vancouver at dusk, capturing the interplay of natural and artificial light.',
  },
  {
    id: 'nature-1',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    title: 'Mountain Vista',
    description: 'Early morning light breaking over the coastal mountains.',
  },
  {
    id: 'urban-2',
    src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
    title: 'Urban Geometry',
    description: 'Modern architecture creating patterns against the evening sky.',
  },
  {
    id: 'nature-2',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
    title: 'Forest Path',
    description: 'A quiet trail through Pacific Northwest rainforest.',
  },
  {
    id: 'urban-3',
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80',
    title: 'Street Level',
    description: 'Moments of daily life in the city\'s bustling downtown core.',
  },
  {
    id: 'nature-3',
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
    title: 'Coastal Sunset',
    description: 'Golden hour along the British Columbia coastline.',
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
