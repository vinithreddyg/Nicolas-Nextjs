export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="content">
        <div className="text">
          <h2>About Us</h2>
          <p>
            Nicolas Landscaping &amp; Construction LLC is a locally owned and operated company
            providing professional landscaping and construction services throughout New Jersey.
          </p>
          <p>
            Led by Bernardo Nicolas, we take pride in delivering high-quality work,
            reliable service, and honest pricing on every project.
          </p>
          <ul>
            <li>Licensed &amp; Insured</li>
            <li>Experienced &amp; Professional</li>
            <li>Customer Satisfaction Guaranteed</li>
          </ul>
        </div>

        <div className="highlight">
          <p><strong>NJ License:</strong></p>
          <p className="license">13VH13569800</p>
          <p><strong>Phone:</strong> <a href="tel:17328676659">(732) 867-6659</a></p>
        </div>
      </div>
    </section>
  );
}
