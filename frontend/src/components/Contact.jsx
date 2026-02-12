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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411067501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1645437900000!5m2!1sen!2sin"
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
                              <h2>Send us a Message</h2>

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
