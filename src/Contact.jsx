import React, { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Visit our café or send us a message.</p>
      </section>

      <section className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            ☕ <strong>Address</strong>
            <br />
            123 Coffee Street, Chennai, Tamil Nadu
          </p>

          <p>
            📞 <strong>Phone</strong>
            <br />
           +1 234 567 890
          </p>

          <p>
            ✉️ <strong>Email</strong>
            <br />
           ✉ hello@Hazel&Beans.com
          </p>

          <div className="hours">
            <h3>Opening Hours</h3>
            <p>Monday – Friday: 8:00 AM – 10:00 PM</p>
            <p>Saturday – Sunday: 9:00 AM – 11:00 PM</p>
          </div>

          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <h2>Find Our Cafe</h2>
        <div className="map-placeholder">
          <p>📍 Cafe Location</p>
          <span>123 Coffee Street, Chennai</span>
        </div>
      </section>
    </div>
  );
}