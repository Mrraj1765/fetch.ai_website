import React, { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
      const [selectedImage, setSelectedImage] = useState(null);

      // Gallery images extended data
      const longDescription = `We are thrilled to share highlights from our recent event, which brought together innovative minds and passionate developers from across the community. The atmosphere was electric as participants dove deep into the world of autonomous agents and decentralized intelligence.

Over the course of the day, we witnessed incredible collaboration and creativity. Teams formed spontaneously, ideas were exchanged freely, and the spirit of open-source development was truly alive. From technical deep-dives into the Fetch.ai stack to brainstorming sessions on real-world use cases, every moment was packed with learning and inspiration.

Our keynote speakers shared insights on the future of AI agents, emphasizing the importance of building resilient and adaptive systems. The hands-on workshops allowed attendees to get their hands dirty with code, deploying their first agents and seeing them interact in real-time.

What stood out most was the diverse range of projects showcased at the end. We saw everything from supply chain optimizers to autonomous trading bots, each demonstrating the power and flexibility of the Fetch.ai network. We are incredibly proud of what our community has achieved and look forward to seeing these projects evolve.

Thank you to everyone who participated, mentored, and supported this event. Your energy drives us forward, and we can't wait to see you at the next one!`;

      const galleryImages = [
            { id: 1, src: '/events/20251124_174843.jpg', title: 'Event Highlight', description: longDescription },
            { id: 2, src: '/events/IMG_20251121_183330877.jpg', title: 'Community Gathering', description: 'Our weekly community gatherings are the heart of our club. It’s where students come together to share updates, discuss tech trends, and support each other\'s learning journeys.' },
            { id: 3, src: '/events/IMG_20251121_184504.jpg', title: 'Fetch.ai Session', description: 'An in-depth session on the uAgents library. We explored the fundamentals of agent communication, protocols, and how to build simple yet effective multi-agent systems.' },
            { id: 4, src: '/events/IMG_20251123_160033031.jpg', title: 'Group Activity', description: 'Team building is essential. This activity focused on problem-solving under pressure, encouraging effective communication and rapid decision-making among team members.' },
            { id: 5, src: '/events/IMG_20251125_164343.jpg', title: 'Workshop Highlight', description: 'Snapshots from our coding workshop. Participants were guided through the process of setting up their development environments and writing their first Python scripts for Fetch.ai agents.' },
            { id: 6, src: '/events/IMG_20251125_171329841.jpg', title: 'Team Discussion', description: 'Brainstorming is where it all begins. Small groups discussed potential project ideas, validating assumptions and refining their concepts before starting development.' },
            { id: 7, src: '/events/IMG_20251125_171536%20(1).jpg', title: 'Innovative Ideas', description: 'A showcase of student creativity. We saw presentations on smart home automation, decentralized finance applications, and localized supply chain solutions.' },
            { id: 8, src: '/events/IMG_20251125_171536.jpg', title: 'Project Showcase', description: 'The final presentations were a testament to the hard work put in by all teams. Each group had 5 minutes to pitch their solution and demonstrate a live prototype.' },
            { id: 9, src: '/events/IMG_20251125_180805017.jpg', title: 'Networking', description: 'Connecting with industry leaders and alumni is a key part of our events. It provides students with valuable insights into career paths and industry expectations.' },
            { id: 10, src: '/events/IMG_20251125_195432909.jpg', title: 'Event Closing', description: 'Wrapping up a successful event with awards and closing remarks. We celebrated the winners and acknowledged the effort of every single participant.' },
            { id: 11, src: '/events/IMG_20250911_180542.jpg', title: 'Hackathon Opening', description: 'The kickoff of our 24-hour hackathon! Excitement was high as the themes were announced and hacking officially began.' },
            { id: 12, src: '/events/IMG_20250911_181215_1.jpg', title: 'Mentorship', description: 'Our mentors played a crucial role, moving between tables to offer technical guidance, debug code, and keep morale high throughout the event.' },
      ];

      const openLightbox = (image) => {
            setSelectedImage(image);
      };

      const closeLightbox = () => {
            setSelectedImage(null);
      };

      const nextImage = (e) => {
            e.stopPropagation();
            const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
            const nextIndex = (currentIndex + 1) % galleryImages.length;
            setSelectedImage(galleryImages[nextIndex]);
      };

      const prevImage = (e) => {
            e.stopPropagation();
            const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
            const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            setSelectedImage(galleryImages[prevIndex]);
      };

      return (
            <div className="gallery-page-container">
                  <h1>Our Events</h1>
                  <p className="gallery-page-subtitle">A collection of moments from our journey.</p>

                  <div className="gallery-grid-page">
                        {galleryImages.map((image) => (
                              <div key={image.id} className="gallery-card" onClick={() => openLightbox(image)}>
                                    <img src={image.src} alt={image.title} loading="lazy" />
                                    <div className="gallery-card-overlay">
                                          <h3 className="gallery-card-title">{image.title}</h3>
                                    </div>
                              </div>
                        ))}
                  </div>

                  {selectedImage && (
                        <div className="lightbox" onClick={closeLightbox}>
                              <button className="lightbox-prev" onClick={prevImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                              </button>
                              <button className="lightbox-next" onClick={nextImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                              </button>

                              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                                    <button className="lightbox-close" onClick={closeLightbox}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                          </svg>
                                    </button>
                                    <div className="lightbox-image-container">
                                          <img src={selectedImage.src} alt={selectedImage.title} />
                                    </div>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default GalleryPage;
