'use client';

import { useState } from 'react';

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  notes: '',
};

export default function AppointmentSection({ backgroundImageUrl }) {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const fallbackImageUrl =
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80";
  const appointmentBackgroundImageUrl = backgroundImageUrl || fallbackImageUrl;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section
      className="appointment"
      id="contact"
      style={{ backgroundImage: `url('${appointmentBackgroundImageUrl}')` }}
    >
      <div className="appointment-shell">
        <div className="appointment-copy">
          <h2>Schedule an Appointment</h2>
          <p>Share your project details and preferred time. We will contact you to confirm.</p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="service">Service Needed</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Remodeling">Remodeling</option>
            <option value="Patios">Patios</option>
            <option value="Lawn Service">Lawn Service</option>
            <option value="Trimming">Trimming</option>
            <option value="Mulch Installation">Mulch Installation</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="date">Preferred Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Preferred Time</label>
          <input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label htmlFor="notes">Project Details</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us about the work you need..."
          />

          <button type="submit">Request Appointment</button>
          {submitted ? (
            <p className="appointment-success">Thanks. We received your request and will reach out soon.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
