
import React from 'react';
import { Link } from 'react-router-dom';
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
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="/#about">About Us</a></li>
                                    <li><Link to="/teams">Team</Link></li>
                                    <li><Link to="/events">Events</Link></li>
                                    <li><a href="/#contact">Contact Us</a></li>
                              </ul>
                        </nav>
                  </div>
            </header>
      );
};

export default Header;
