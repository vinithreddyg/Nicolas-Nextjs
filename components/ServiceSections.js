const services = [
  'Remodeling',
  'Patios',
  'Lawn Service',
  'Trimming',
  'Mulch Installation',
  'And More',
];

export default function ServiceSections() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service) => (
          <div key={service} className="card">
            <span className="check">✓</span>
            <span>{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
