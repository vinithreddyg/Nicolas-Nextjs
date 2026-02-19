'use client';

import { useMemo, useState } from 'react';
import DisplayWorkImages from './DisplayWorkImages';

const services = [
  { name: 'Remodeling', hasGallery: false },
  { name: 'Patios', hasGallery: true },
  { name: 'Lawn Service', hasGallery: false },
  { name: 'Trimming', hasGallery: true },
  { name: 'Mulch Installation', hasGallery: false },
  { name: 'And More', hasGallery: false },
];

export default function ServiceSections({ trimmingImages = [], patiosImages = [] }) {
  const [activeGalleryService, setActiveGalleryService] = useState(null);
  const resolvedTrimmingImages = useMemo(
    () => (Array.isArray(trimmingImages) ? trimmingImages : []),
    [trimmingImages]
  );
  const resolvedPatiosImages = useMemo(
    () => (Array.isArray(patiosImages) ? patiosImages : []),
    [patiosImages]
  );

  const handleServiceClick = (service) => {
    setActiveGalleryService((previous) => (previous === service ? null : service));
  };

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service) => (
          <div key={service.name}>
            {service.hasGallery ? (
              <button
                type="button"
                className="card card-actionable"
                onClick={() => handleServiceClick(service.name)}
                aria-expanded={activeGalleryService === service.name}
                aria-controls={`${service.name.toLowerCase()}-gallery-panel`}
              >
                <span className="check">&#10003;</span>
                <span>{service.name}</span>
              </button>
            ) : (
              <div className="card">
                <span className="check">&#10003;</span>
                <span>{service.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {activeGalleryService ? (
        <div
          className="service-gallery-panel"
          id={`${activeGalleryService.toLowerCase()}-gallery-panel`}
        >
          <div className="service-gallery-header">
            <h3>{activeGalleryService} Work</h3>
            <button
              type="button"
              className="close-gallery-btn"
              onClick={() => setActiveGalleryService(null)}
            >
              Close
            </button>
          </div>
          <DisplayWorkImages
            images={activeGalleryService === 'Patios' ? resolvedPatiosImages : resolvedTrimmingImages}
            serviceName={activeGalleryService}
          />
        </div>
      ) : null}
    </section>
  );
}
