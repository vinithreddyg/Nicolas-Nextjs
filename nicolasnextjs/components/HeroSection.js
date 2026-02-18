export default function HeroSection() {
  return (
    <section
      className="hero full-width-hero"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')" }}
    >
      <div className="overlay">
        <h1>Nicolas Landscaping & Construction LLC</h1>
        <p>Professional • Reliable • Licensed &amp; Insured</p>
        <div className="actions">
          <a href="tel:17328676659" className="btn primary">Call Now</a>
          <a href="#contact" className="btn secondary">Free Estimate</a>
        </div>
      </div>
    </section>
  );
}
