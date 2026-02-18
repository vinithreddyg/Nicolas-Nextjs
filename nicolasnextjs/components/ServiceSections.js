import DisplayWorkImages from './DisplayWorkImages';

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
          <div key={service}>
            <div className="card">
              <span className="check">&#10003;</span>
              <span>{service}</span>
            </div>
            {service === 'Trimming' && <DisplayWorkImages />}
          </div>
        ))}
      </div>
    </section>
  );
}
