import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
      return (
            <section className="hero" id="home">
                  <div className="hero-columns">
                        <div className="hero-column">
                              <div className="image-wrapper">
                                    <img src="/images/event1.jpeg" alt="Hackathon Event" />
                                    <div className="overlay"></div>
                              </div>
                        </div>
                        <div className="hero-column">
                              <div className="image-wrapper">
                                    <img src="/images/event3.jpg" alt="AI Speaker" />
                                    <div className="overlay"></div>
                              </div>
                        </div>
                        <div className="hero-column">
                              <div className="image-wrapper">
                                    <img src="/images/event2.jpg" alt="Robotics Hand" />
                                    <div className="overlay"></div>
                              </div>
                        </div>
                        <div className="hero-column">
                              <div className="image-wrapper">
                                    <img src="/images/event4.jpg" alt="Team Collaboration" />
                                    <div className="overlay"></div>
                              </div>
                        </div>
                  </div>

                  <div className="hero-content">
                        <h1 className="hero-title">
                              <span className="title-line">Fetch.ai</span>
                              <span className="title-line">Developer Club</span>
                        </h1>

                        <p className="hero-quote">
                              Building the future of AI, one autonomous agent at a time
                        </p>

                        <div className="hero-actions">
                              <Link to="/events" className="primary-btn">
                                    <span>Explore Events</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </Link>

                              <a href="#about" className="secondary-btn">
                                    <span>Learn More</span>
                              </a>
                        </div>

                        <div className="hero-stats">
                              <div className="stat-item">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Active Members</div>
                              </div>
                              <div className="stat-divider"></div>
                              <div className="stat-item">
                                    <div className="stat-number">15+</div>
                                    <div className="stat-label">Events Hosted</div>
                              </div>
                              <div className="stat-divider"></div>
                              <div className="stat-item">
                                    <div className="stat-number">10+</div>
                                    <div className="stat-label">Projects Built</div>
                              </div>
                        </div>
                  </div>

                  <div className="scroll-indicator">
                        <div className="scroll-mouse">
                              <div className="scroll-wheel"></div>
                        </div>
                        <span>Scroll to explore</span>
                  </div>
            </section>
      );
};

export default Hero;