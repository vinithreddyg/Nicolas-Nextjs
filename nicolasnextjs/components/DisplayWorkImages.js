'use client';

import Image from 'next/image';
import { useState } from 'react';

const fallbackImages = [
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=800&q=80',
];
const defaultImage = fallbackImages[0];

export default function DisplayWorkImages({ images = [], serviceName = 'Service' }) {
  const [brokenImages, setBrokenImages] = useState({});
  const imageList = Array.isArray(images) && images.length > 0 ? images : fallbackImages;
  const handleImageError = (index) => {
    setBrokenImages((previous) => (previous[index] ? previous : { ...previous, [index]: true }));
  };

  return (
    <section className="gallery-wrapper service-gallery-wrapper">
      <div className="service-gallery-grid">
        {imageList.map((src, index) => (
          <div className="service-gallery-item" key={`${src}-${index}`}>
            <Image
              src={brokenImages[index] ? defaultImage : src}
              alt={`${serviceName} work image ${index + 1}`}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1400px) 33vw, 25vw"
              className="service-gallery-image"
              onError={() => handleImageError(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
