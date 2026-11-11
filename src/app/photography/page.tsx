'use client';

import PhotographyGallery from '@/components/PhotographyGallery';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import PageSurface from '@/components/PageSurface';

// `title` is the image alt text and the heading when a photo is opened;
// `location` is the caption; `description` is an optional line about the place.
// `width`/`height` are the file's real pixel dimensions — the spotlight frames
// each photo at its own aspect ratio, so a portrait shot stays portrait.
const photographyPhotos = [
  {
    id: 'nyc-1',
    src: '/photos/gallery/nyc1.jpg',
    title: 'New York City',
    location: 'New York City',
    width: 3456,
    height: 2304,
  },
  {
    id: 'japan-1',
    src: '/photos/backgrounds/japan1.jpg',
    title: 'Japan Vista',
    location: 'Japan',
    width: 3456,
    height: 5184,
  },
  {
    id: 'japan-2',
    src: '/photos/gallery/japan2.JPG',
    title: 'Japan Landscape',
    location: 'Japan',
    width: 5184,
    height: 3456,
  },
  {
    id: 'japan-3',
    src: '/photos/backgrounds/japan3.JPG',
    title: 'Japan Views',
    location: 'Japan',
    width: 5184,
    height: 3456,
  },
  {
    id: 'japan-4',
    src: '/photos/backgrounds/japan4.JPG',
    title: 'Japan Scenery',
    location: 'Japan',
    width: 5184,
    height: 3456,
  },
  {
    id: 'japan-5',
    src: '/photos/gallery/japan5.JPG',
    title: 'Japan Panorama',
    location: 'Japan',
    width: 5184,
    height: 3456,
  },
  {
    id: 'tsutenkaku',
    src: '/photos/gallery/osaka_tower.JPEG',
    title: 'Tsutenkaku',
    location: 'Osaka, Japan',
    description: 'Tsutenkaku Tower, looking up from the streets of Shinsekai in Osaka.',
    width: 3456,
    height: 5184,
  },
  {
    id: 'tokyo-night',
    src: '/photos/gallery/tokyo_crossing.JPEG',
    title: 'Night Crossing',
    location: 'Tokyo, Japan',
    width: 3456,
    height: 5184,
  },
  {
    id: 'radio-city',
    src: '/photos/gallery/nyc_fountain.JPG',
    title: 'Radio City',
    location: 'New York City',
    description: 'The fountain outside Radio City Music Hall in Midtown Manhattan, at night.',
    width: 5184,
    height: 3456,
  },
  {
    id: 'times-square',
    src: '/photos/gallery/nyc_oppenheimer.JPG',
    title: 'Times Square',
    location: 'New York City',
    description: 'The billboards of Times Square in Midtown Manhattan, after dark.',
    width: 5184,
    height: 3456,
  },
  {
    id: 'pump-peak',
    src: '/photos/gallery/pumppeak1.jpg',
    title: 'Pump Peak',
    location: 'Vancouver, BC',
    description: 'Pump Peak on Mount Seymour, in the North Shore mountains above Vancouver.',
    width: 4284,
    height: 5712,
  },
  {
    id: 'golden-hour',
    src: '/photos/gallery/sun.JPG',
    title: 'Golden Hour',
    location: 'Vancouver, BC',
    width: 3456,
    height: 2304,
  },
];

export default function PhotographyPage() {
  return (
    <PageTransition>
      <PageSurface variant="photo">
        <PageHeader eyebrow="Photography" title="What I've seen" />
        <PhotographyGallery photos={photographyPhotos} />
      </PageSurface>
    </PageTransition>
  );
}
