
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
                                    <span className="innovation">Fetch.ai</span>
                                    <span className="lab"></span>
                              </div>
                        </div>
                        <nav className="navigation">
                              <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#team">Our Team</a></li>
                                    <li><a href="#gallery">Gallery</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#events">Events</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                              </ul>
                        </nav>
                  </div>
            </header>
      );
};

export default Header;
