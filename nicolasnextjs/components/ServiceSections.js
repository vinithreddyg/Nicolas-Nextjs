'use client';

import { useMemo, useState } from 'react';
import DisplayWorkImages from './DisplayWorkImages';

const services = [
  'Remodeling',
  'Patios',
  'Lawn Service',
  'Trimming',
  'Mulch Installation',
  'And More',
];

export default function ServiceSections({ trimmingImages = [] }) {
  const [showTrimmingGallery, setShowTrimmingGallery] = useState(false);
  const resolvedTrimmingImages = useMemo(
    () => (Array.isArray(trimmingImages) ? trimmingImages : []),
    [trimmingImages]
  );

  const handleServiceClick = (service) => {
    if (service !== 'Trimming') return;
    setShowTrimmingGallery((previous) => !previous);
  };

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service) => (
          <div key={service}>
            {service === 'Trimming' ? (
              <button
                type="button"
                className="card card-actionable"
                onClick={() => handleServiceClick(service)}
                aria-expanded={showTrimmingGallery}
                aria-controls="trimming-gallery-panel"
              >
                <span className="check">&#10003;</span>
                <span>{service}</span>
              </button>
            ) : (
              <div className="card">
                <span className="check">&#10003;</span>
                <span>{service}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {showTrimmingGallery ? (
        <div className="service-gallery-panel" id="trimming-gallery-panel">
          <div className="service-gallery-header">
            <h3>Trimming Work</h3>
            <button
              type="button"
              className="close-gallery-btn"
              onClick={() => setShowTrimmingGallery(false)}
            >
              Close
            </button>
          </div>
          <DisplayWorkImages trimmingImages={resolvedTrimmingImages} />
        </div>
      ) : null}
    </section>
  );
}
