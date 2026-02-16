import React, { useState } from 'react';
import './TeamsPage.css';

const TeamsPage = () => {
      const [selectedCategory, setSelectedCategory] = useState("All Members");

      // Members dummy data with social links
      const members = [
            { name: "Yash Chavan", role: "Technical Team", category: "Technical", image: "/team/yash-tech.png", linkedin: "#", github: "#" },
            { name: "Krushna Patil", role: "Documantation", category: "Documentation", image: "/team/krushna-doc.png", linkedin: "#", github: "#" },
            { name: "Tejas Patil", role: "Technical Team", category: "Technical", image: "/team/tejas-tech.png", linkedin: "#", github: "#" },
            // { name: "Bob Brown", role: "PR Specialist", category: "Public Relation", image: "/images/member4.jpg", linkedin: "#", github: "#" },
            // { name: "Charlie Davis", role: "UI/UX Designer", category: "Design & Media", image: "/images/member5.jpg", linkedin: "#", github: "#" },
            // { name: "Eva White", role: "Developer", category: "Technical", image: "/images/member6.jpg", linkedin: "#", github: "#" },
            // { name: "Frank Miller", role: "Coordinator", category: "Management", image: "/images/member7.jpg", linkedin: "#", github: "#" },
            // { name: "Grace Wilson", role: "Editor", category: "Documentation", image: "/images/member8.jpg", linkedin: "#", github: "#" },
            // { name: "Henry Taylor", role: "Social Media Manager", category: "Public Relation", image: "/images/member9.jpg", linkedin: "#", github: "#" },
            // { name: "Ivy Thomas", role: "Graphic Designer", category: "Design & Media", image: "/images/member10.jpg", linkedin: "#", github: "#" },
      ];

      const categories = ["All Members", "Technical", "Management", "Documentation", "Public Relation", "Design & Media"];

      const filteredMembers = selectedCategory === "All Members"
            ? members
            : members.filter(member => member.category === selectedCategory);

      return (
            <div className="teams-page-container">
                  <section className="teams-section full-page">
                        <div className="teams-container">
                              <div className="teams-header-minimal">
                                    <h2 className="minimal-title">Our Community</h2>
                                    <div className="title-underline"></div>
                              </div>

                              {/* Filter Section */}
                              <div className="team-filter">
                                    {categories.map((category) => (
                                          <button
                                                key={category}
                                                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                                onClick={() => setSelectedCategory(category)}
                                          >
                                                {category}
                                          </button>
                                    ))}
                              </div>

                              {/* Members Grid */}
                              <div className="members-grid">
                                    {filteredMembers.map((member, index) => (
                                          <div key={index} className="member-card">
                                                <div className="member-image-wrapper">
                                                      <img src={member.image} alt={member.name} />
                                                </div>
                                                <div className="member-info">
                                                      <h4>{member.name}</h4>
                                                      <p>{member.role}</p>
                                                      <div className="leader-socials member-socials">
                                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                                  </svg>
                                                            </a>
                                                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                                  </svg>
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default TeamsPage;
