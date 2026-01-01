
import { useState } from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (project.images && project.images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (project.images && project.images.length > 1) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_LENGTH = 150;
    const description = project.extendedDescription || project.description;
    const shouldTruncate = description.length > MAX_LENGTH;

    // Remove the icon link from header if we are adding a button below, or keep both? 
    // The plan said "Add explicit 'Visit Website' button". 
    // I will keep the header icon but also adding the button for visibility as requested.

    return (
        <div className="project-card mega-card">
            <div className="mega-card-image-container group">
                {project.images && project.images.length > 0 ? (
                    <>
                        <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                            className="mega-card-image"
                        />

                        {project.images.length > 1 && (
                            <>
                                <button
                                    className="gallery-nav prev"
                                    onClick={prevImage}
                                    aria-label="Previous image"
                                >
                                    ‹
                                </button>
                                <button
                                    className="gallery-nav next"
                                    onClick={nextImage}
                                    aria-label="Next image"
                                >
                                    ›
                                </button>

                                <div className="gallery-indicators">
                                    {project.images.map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setCurrentImageIndex(idx);
                                            }}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="no-image-placeholder">No Image Available</div>
                )}
            </div>

            <div className="mega-card-content">
                <div className="mega-card-header">
                    <div className="header-top">
                        <span className="project-category">{project.category}</span>
                    </div>
                    <div className="header-main">
                        <h3 className="project-title">{project.title}</h3>
                        {/* Keeping the icon as a quick link */}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="Visit Live Site">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                <div className="mega-card-body">
                    <div className="project-description-container">
                        <p className="project-extended-description">
                            {isExpanded || !shouldTruncate
                                ? description
                                : `${description.substring(0, MAX_LENGTH)}...`}
                        </p>
                        {shouldTruncate && (
                            <button
                                className="read-more-btn"
                                onClick={() => setIsExpanded(!isExpanded)}
                                aria-label={isExpanded ? "Show Less" : "Read More"}
                            >
                                {isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>

                    {project.link && (
                        <div className="project-actions">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-site-btn" aria-label="Visit Website">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    )}

                    <div className="mega-card-details-grid">
                        {project.highlights && (
                            <div className="mega-card-section">
                                <h4>Key Highlights</h4>
                                <ul className="highlights-list">
                                    {project.highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mega-card-sidebar">
                            <div className="mega-card-section">
                                <h4>Technologies</h4>
                                <div className="tech-tags">
                                    {project.technologies.slice(0, 6).map((tech, index) => (
                                        <span key={index} className="tag">{tech}</span>
                                    ))}
                                    {project.technologies.length > 6 && <span className="tag">+{project.technologies.length - 6}</span>}
                                </div>
                            </div>

                            {project.impact && (
                                <div className="mega-card-section">
                                    <h4>Impact</h4>
                                    <p className="impact-text">{project.impact}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

