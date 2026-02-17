export default function MobileButton() {
  return (
    <div className="mobile-button-container">
      <a className="mobile-floating-btn" href="tel:17328676659" title="Call Us" aria-label="Call Us">
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.19 22 2 13.81 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
}
