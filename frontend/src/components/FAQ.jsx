
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
      const [activeIndex, setActiveIndex] = useState(null);

      const faqs = [
            {
                  question: "What is the Fetch.ai Developer Club?",
                  answer: "We are a community-driven initiative dedicated to exploring and building with Fetch.ai's autonomous agent technology. We organize workshops, hackathons, and collaborative projects."
            },
            {
                  question: "How can I join the club?",
                  answer: "You can join by participating in our events, joining our Discord server, or signing up through our contact form. Membership is open to all students and developers."
            },
            {
                  question: "Do I need prior experience with AI?",
                  answer: "Not necessarily! We welcome members of all skill levels. We host beginner-friendly sessions as well as advanced workshops for experienced developers."
            },
            {
                  question: "Is there a fee to join?",
                  answer: "No, joining the Fetch.ai Developer Club is completely free. Our goal is to democratize access to AI education and tools."
            },
            {
                  question: "What tools will we be using?",
                  answer: "We primarily focus on the uAgents library (Python), the Fetch.ai network, and related web technologies for building interfaces for our agents."
            }
      ];

      const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
      };

      return (
            <section className="faq-section" id="faq">
                  <div className="faq-container">
                        <div className="faq-header">
                              <h2>Frequently Asked Questions</h2>
                              <p>Everything you need to know about our community</p>
                        </div>

                        <div className="faq-grid">
                              {faqs.map((faq, index) => (
                                    <div
                                          key={index}
                                          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                          onClick={() => toggleFAQ(index)}
                                    >
                                          <div className="faq-question">
                                                <h3>{faq.question}</h3>
                                                <span className="faq-icon">
                                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                      </svg>
                                                </span>
                                          </div>
                                          <div className="faq-answer">
                                                <p>{faq.answer}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default FAQ;
