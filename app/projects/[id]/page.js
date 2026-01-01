'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '@/lib/rag/portfolioData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProjectDetail({ params }) {
    const { id } = params;
    const router = useRouter();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = portfolioData.projects.find(p => p.id === parseInt(id));
        if (foundProject) {
            setProject(foundProject);
            window.scrollTo(0, 0);
        } else {
            router.push('/projects');
        }
    }, [id, router]);

    if (!project) return <div className="loading">Loading...</div>;

    return (
        <section className="section project-detail-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container">
                <Link href="/projects" className="back-link">
                    &larr; Back to Projects
                </Link>

                <div className="project-detail-header">
                    <h1 className="project-title-large">{project.title}</h1>
                    <div className="project-meta">
                        <span className="project-category">{project.category}</span>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-external">
                                Visit Live Site &rarr;
                            </a>
                        )}
                    </div>
                </div>

                <div className="project-detail-content">
                    {/* Main Image or Gallery Placeholder */}
                    <div className="project-gallery">
                        {project.images && project.images.length > 0 && (
                            <div className="main-image-container">
                                <img src={project.images[0]} alt={project.title} className="detail-main-image" />
                            </div>
                        )}
                        {/* Additional images grid if needed in future */}
                    </div>

                    <div className="project-info-grid">
                        <div className="project-description-section">
                            <h3>Overview</h3>
                            <p className="project-extended-description">{project.extendedDescription}</p>

                            {project.highlights && (
                                <div className="project-highlights mt-4">
                                    <h3>Key Highlights</h3>
                                    <ul className="highlights-list">
                                        {project.highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="project-sidebar">
                            <div className="sidebar-section">
                                <h3>Technologies</h3>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="sidebar-section">
                                <h3>Impact</h3>
                                <p className="impact-text">{project.impact}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
