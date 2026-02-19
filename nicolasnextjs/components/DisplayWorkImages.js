'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg', '.mov', '.m4v'];

const resolveMediaType = (value) => {
  const src = typeof value === 'string' ? value : value?.src;

  if (!src || typeof src !== 'string') {
    return null;
  }

  if (typeof value === 'object' && value?.type === 'video') {
    return { src, type: 'video' };
  }

  const normalizedSrc = src.split('?')[0].split('#')[0].toLowerCase();
  const isVideo = VIDEO_EXTENSIONS.some((extension) => normalizedSrc.endsWith(extension));

  return { src, type: isVideo ? 'video' : 'image' };
};

export default function DisplayWorkImages({ images = [], serviceName = 'Service' }) {
  const [brokenImages, setBrokenImages] = useState({});
  const imageList = useMemo(() => (Array.isArray(images) ? images : []), [images]);
  const normalizedMediaList = useMemo(
    () => imageList.map(resolveMediaType).filter(Boolean),
    [imageList]
  );
  const orderedMediaList = useMemo(() => {
    const videos = normalizedMediaList.filter((item) => item.type === 'video');
    const imagesOnly = normalizedMediaList.filter((item) => item.type === 'image');
    return [...videos, ...imagesOnly];
  }, [normalizedMediaList]);

  const handleImageError = (index) => {
    setBrokenImages((previous) => (previous[index] ? previous : { ...previous, [index]: true }));
  };

  return (
    <section className="gallery-wrapper service-gallery-wrapper">
      <div className="service-gallery-grid">
        {orderedMediaList.length > 0
          ? orderedMediaList.map((mediaItem, index) => (
              <div className="service-gallery-item" key={`${mediaItem.src}-${index}`}>
                {brokenImages[index] ? (
                  <div className="service-gallery-placeholder" role="img" aria-label="Nicolas Landscaping">
                    <span className="service-gallery-placeholder-tag">Nicolas Landscaping</span>
                  </div>
                ) : mediaItem.type === 'video' ? (
                  <video
                    src={mediaItem.src}
                    className="service-gallery-media"
                    muted
                    autoPlay
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    aria-label={`${serviceName} work video ${index + 1}`}
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <Image
                    src={mediaItem.src}
                    alt={`${serviceName} work image ${index + 1}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1400px) 33vw, 25vw"
                    className="service-gallery-media"
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
