import React, { useEffect } from 'react';
import { portfolioData } from '@/lib/rag/portfolioData';
import AIChat from './AIChat';
import ProjectCard from './ProjectCard';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Handle hash navigation if present (e.g. returning from another page)
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section id="home" className="section hero-section">
                <div className="container">
                    <div className="hero-content-new fade-in">
                        {/* Left Side - Profile Image */}
                        <div className="hero-left">
                            <div className="profile-image-container">
                                <img
                                    src="/speaker.jpeg"
                                    alt="Joseph Maina"
                                    className="profile-image"
                                />
                            </div>
                        </div>

                        {/* Right Side - Welcome & Chat */}
                        <div className="hero-right">
                            <h1 className="welcome-title">Hello <span className="wave-emoji">👋</span><br />Welcome to my portfolio</h1>
                            <p className="welcome-subtitle">Let's chat! Ask me anything about my experience, projects, or skills.</p>

                            {/* Inline AI Chat */}
                            <div className="hero-chat-container">
                                <AIChat inline={true} />
                            </div>

                            {/* Quick Links */}
                            <div className="quick-links">
                                <Link className="btn btn-secondary" to="/projects">
                                    View Projects
                                </Link>
                                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Preview Section - only showing first 3 */}
            <section id="projects-preview" className="section">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="grid grid-1">
                        {portfolioData.projects.slice(0, 2).map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="text-center mt-4" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link to="/projects" className="btn btn-secondary">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="section">
                <div className="container">
                    <h2 className="section-title">Education</h2>
                    <div className="grid grid-2">
                        {portfolioData.education.map(edu => (
                            <EducationCard key={edu.id} education={edu} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="section">
                <div className="container">
                    <h2 className="section-title">Certifications</h2>
                    <div className="grid grid-3">
                        {portfolioData.certifications.map(cert => (
                            <CertificationCard key={cert.id} certification={cert} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section">
                <div className="container">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="skills-grid">
                        {Object.entries(portfolioData.skills).map(([category, skills]) => (
                            <div key={category} className="skill-category card">
                                <h3 className="skill-category-title">{category}</h3>
                                <div className="skill-tags">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <div className="container">
                    <h2 className="section-title">Get in Touch</h2>
                    <div className="contact-content">
                        <div className="contact-info card">
                            <h3>Let's Connect</h3>
                            <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.</p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <a href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
                                </div>

                                <div className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <a href={`tel:${portfolioData.personal.phone}`}>{portfolioData.personal.phone}</a>
                                </div>

                                <div className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>{portfolioData.personal.location}</span>
                                </div>

                                <div className="contact-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
