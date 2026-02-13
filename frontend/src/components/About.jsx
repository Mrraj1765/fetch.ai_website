import React from 'react';
import './About.css';

const About = () => {
      return (
            <section className="about-section" id="about">
                  <div className="about-container">
                        <div className="about-image-box">
                              <img src="/images/aboutus.jpeg" alt="About Us" />
                              <div className="image-overlay"></div>
                        </div>

                        <div className="about-content">
                              <h2>About Our Club</h2>
                              <p>
                                    Welcome to the <strong>Fetch.ai Developer Club</strong>! We are a community of passionate innovators, developers, and students dedicated to exploring the frontiers of Artificial Intelligence and Web3 technology.
                              </p>
                              <p>
                                    Our mission is to empower the next generation of tech leaders by providing hands-on experience with Fetch.ai's ecosystem, hosting hackathons, workshops, and collaborative projects.
                              </p>

                              <div className="stats">
                                    <div className="stat-item">
                                          <span className="stat-number">20+</span>
                                          <span className="stat-label">Members</span>
                                    </div>
                                    <div className="stat-item">
                                          <span className="stat-number">5+</span>
                                          <span className="stat-label">Projects</span>
                                    </div>
                                    <div className="stat-item">
                                          <span className="stat-number">10+</span>
                                          <span className="stat-label">Events</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default About;
