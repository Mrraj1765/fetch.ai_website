
import React from 'react';
import './Header.css';

const Header = () => {
      return (
            <header className="header">
                  <div className="header-container">
                        <div className="logo-container">
                              <div className="logo-icon">
                                    {/* te icon or club chi image or logo ithe  */}
                                    <div className="dot-grid">
                                          <span></span><span></span><span></span>
                                          <span></span><span></span><span></span>
                                          <span></span><span></span><span></span>
                                    </div>
                              </div>
                              {/* phile nav ithe yel  */}
                              <div className="logo-text">
                                    <span className="brand-name">Fetch.ai</span>
                                    <span className="club-name">Developer Club</span>
                              </div>
                        </div>
                        <nav className="navigation">
                              <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#events">Events</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                              </ul>
                        </nav>
                  </div>
            </header>
      );
};

export default Header;
