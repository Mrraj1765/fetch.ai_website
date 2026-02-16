
import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
      return (
            <section className="mission-vision-section" id="mission-vision">
                  <div className="mv-container">
                        <div className="mv-header">
                              <h2>Our Core Philosophy</h2>
                              <p>Innovate, Educate and Inspire</p>
                        </div>

                        <div className="mv-grid">
                              <div className="mv-card innovate">
                                    <div className="mv-icon-wrapper">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                          </svg>
                                    </div>
                                    <h3>Innovate</h3>
                                    <p>
                                          Fostering innovation through collaboration and global engagement. Fetch.ai’s
                                          innovation hubs provide the perfect platform to develop ideas into impactful
                                          projects that drive progress.
                                    </p>
                              </div>

                              <div className="mv-card educate">
                                    <div className="mv-icon-wrapper">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                          </svg>
                                    </div>
                                    <h3>Educate</h3>
                                    <p>
                                          Empowering to spread knowledge by fostering a culture of continuous learning.
                                          Participate in technical workshops and hackathons to enhance your skills and
                                          knowledge.
                                    </p>
                              </div>

                              <div className="mv-card inspire">
                                    <div className="mv-icon-wrapper">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                          </svg>
                                    </div>
                                    <h3>Inspire</h3>
                                    <p>
                                          Showcasing successful real-world applications built by leaders to motivate
                                          others to dream big, reach high, and create a future with Fetch.ai’s autonomous
                                          technology. Attend regular talks from our inspiring leaders.
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default MissionVision;
