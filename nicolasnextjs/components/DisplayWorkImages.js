'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DisplayWorkImages({ images = [], serviceName = 'Service' }) {
  const [brokenImages, setBrokenImages] = useState({});
  const imageList = Array.isArray(images) ? images : [];
  const handleImageError = (index) => {
    setBrokenImages((previous) => (previous[index] ? previous : { ...previous, [index]: true }));
  };

  return (
    <section className="gallery-wrapper service-gallery-wrapper">
      <div className="service-gallery-grid">
        {imageList.length > 0
          ? imageList.map((src, index) => (
              <div className="service-gallery-item" key={`${src}-${index}`}>
                {brokenImages[index] ? (
                  <div className="service-gallery-placeholder" role="img" aria-label="Nicolas Landscaping">
                    <span className="service-gallery-placeholder-tag">Nicolas Landscaping</span>
                  </div>
                ) : (
                  <Image
                    src={src}
                    alt={`${serviceName} work image ${index + 1}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1400px) 33vw, 25vw"
                    className="service-gallery-image"
                    onError={() => handleImageError(index)}
                  />
                )}
              </div>
            ))
          : (
            <div className="service-gallery-item">
              <div className="service-gallery-placeholder" role="img" aria-label="Nicolas Landscaping">
                <span className="service-gallery-placeholder-tag">Nicolas Landscaping</span>
              </div>
            </div>
            )}
      </div>
    </section>
  );
}
