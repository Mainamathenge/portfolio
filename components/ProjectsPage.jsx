
import React, { useEffect } from 'react';
import { portfolioData } from '@/lib/rag/portfolioData';
import ProjectSlider from './ProjectSlider';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section projects-page" style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '2rem' }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                {/* <div className="section-header">
                    <h2 className="section-title">All Projects</h2>
                    <p className="section-subtitle">
                        Browse through my work. Use arrows to navigate.
                    </p>
                </div> */}

                {/* Slider acts as the main navigation/gallery */}
                <ProjectSlider projects={portfolioData.projects} />

                <div className="back-home-container" style={{ marginTop: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
                    <Link to="/" className="btn btn-secondary">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
