import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            subject: '',
            message: ''
      });

      const [formStatus, setFormStatus] = useState('');

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
            setFormStatus('Message sent successfully!');

            setTimeout(() => {
                  setFormData({ name: '', email: '', subject: '', message: '' });
                  setFormStatus('');
            }, 3000);
      };

      return (
            <section className="contact-section" id="contact">
                  <div className="contact-wrapper">
                        {/* Map Section */}
                        <div className="map-container">
                              <iframe
                                    src="https://maps.google.com/maps?q=R.+C.+Patel+Institute+of+Technology,+Shirpur,+Nimzari+Naka,+Shirpur,+Maharashtra+425405&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Location Map"
                              ></iframe>
                        </div>

                        {/* Form Section */}
                        <div className="form-container">
                              <h2>Get in Touch</h2>
                              <p className="form-subtitle">Have a question or want to collaborate? Fill out the form below and we'll get back to you shortly.</p>

                              <form onSubmit={handleSubmit}>
                                    <div className="input-row">
                                          <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                required
                                          />
                                          <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                required
                                          />
                                    </div>

                                    <input
                                          type="text"
                                          name="subject"
                                          value={formData.subject}
                                          onChange={handleChange}
                                          placeholder="Subject"
                                          required
                                    />

                                    <textarea
                                          name="message"
                                          value={formData.message}
                                          onChange={handleChange}
                                          placeholder="Your Message"
                                          rows="6"
                                          required
                                    ></textarea>

                                    <button type="submit" className="send-btn">
                                          Send Message
                                    </button>

                                    {formStatus && <div className="success-message">{formStatus}</div>}
                              </form>
                        </div>
                  </div>
            </section>
      );
};

export default Contact;
