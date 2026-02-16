import React from 'react';
import './Hero.css';

// Placeholder or imported images would go here


const Hero = () => {
      return (
            <section className="hero" id="home">
                  <div className="hero-columns">
                        <div className="hero-column">
                              <div className="image-wrapper">
                                    {/* Use the public folder path directly */}
                                    <img src="/images/event1.jpeg" alt="Hackathon Event" />
                                    <div className="overlay"></div>
                              </div>
                        </div>
                        <div className="hero-column">
                              <div className="image-wrapper">
                                    <img src="/images/event2.jpg" alt="AI Speaker" />
                                    <div className="overlay"></div>
                              </div>
                        </div>
                        <div className="hero-column">
                              <div className="image-wrapper">
                                    <img src="/images/event_3.png" alt="Robotics Hand" />
                                    <div className="overlay"></div>
                              </div>
                        </div>
                        <div className="hero-column">
                              <div className="image-wrapper">
                                    <img src="/images/event_4.png" alt="Team Collaboration" />
                                    <div className="overlay"></div>
                              </div>
                        </div>
                  </div>

                  <div className="hero-content">
                        <button className="view-all-btn">
                              View all events
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                        </button>
                  </div>
            </section>
      );
};

export default Hero;
