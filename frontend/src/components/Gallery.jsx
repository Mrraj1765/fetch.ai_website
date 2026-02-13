import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
      const [selectedImage, setSelectedImage] = useState(null);

      // Gallery images data
      const galleryImages = [
            { id: 1, src: '/images/events/event1.jpg', title: 'Tech Workshop 2024' },
            { id: 2, src: '/images/events/event2.jpg', title: 'Fetch.ai Hackathon' },
            { id: 3, src: '/images/events/event3.jpg', title: 'AI Development Session' },
            { id: 4, src: '/images/events/event4.jpg', title: 'Team Collaboration' },
            { id: 5, src: '/images/events/event5.jpg', title: 'Innovation Seminar' },
            { id: 6, src: '/images/events/event6.jpg', title: 'Project Presentation' },
            { id: 7, src: '/images/events/event7.jpg', title: 'Coding Bootcamp' },
            { id: 8, src: '/images/events/event8.jpg', title: 'Tech Talk Series' },
            { id: 9, src: '/images/events/event9.jpg', title: 'Community Meetup' },
            { id: 10, src: '/images/events/event10.jpg', title: 'Developer Conference' },
            { id: 11, src: '/images/events/event11.jpg', title: 'Workshop Session' },
            { id: 12, src: '/images/events/event12.jpg', title: 'Innovation Day' },
      ];

      const openLightbox = (image) => {
            setSelectedImage(image);
      };

      const closeLightbox = () => {
            setSelectedImage(null);
      };

      const nextImage = () => {
            const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
            const nextIndex = (currentIndex + 1) % galleryImages.length;
            setSelectedImage(galleryImages[nextIndex]);
      };

      const prevImage = () => {
            const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
            const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            setSelectedImage(galleryImages[prevIndex]);
      };

      return (
            <section className="gallery-section" id="gallery">
                  <div className="gallery-container">
                        <h2 className="gallery-title">Event Gallery</h2>
                        <p className="gallery-subtitle">Glimpses from our past events and activities</p>

                        <div className="gallery-grid">
                              {galleryImages.map((image) => (
                                    <div key={image.id} className="gallery-item" onClick={() => openLightbox(image)}>
                                          <img src={image.src} alt={image.title} loading="lazy" />
                                          <div className="gallery-overlay">
                                                <div className="overlay-content">
                                                      <h3>{image.title}</h3>
                                                      <span className="view-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                  <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>
                                                      </span>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  {/* Lightbox Modal */}
                  {selectedImage && (
                        <div className="lightbox" onClick={closeLightbox}>
                              <button className="lightbox-close" onClick={closeLightbox}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <line x1="18" y1="6" x2="6" y2="18"></line>
                                          <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                              </button>
                              <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                              </button>
                              <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                              </button>
                              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                                    <img src={selectedImage.src} alt={selectedImage.title} />
                                    <p className="lightbox-caption">{selectedImage.title}</p>
                              </div>
                        </div>
                  )}
            </section>
      );
};

export default Gallery;
