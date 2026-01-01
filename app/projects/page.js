'use client';

import { useEffect } from 'react';
import { portfolioData } from '@/lib/rag/portfolioData';
import ProjectSlider from '@/components/ProjectSlider';
import Link from 'next/link';

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section projects-page" style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '2rem' }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                <ProjectSlider projects={portfolioData.projects} />

                <div className="back-home-container" style={{ marginTop: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
                    <Link href="/" className="btn btn-secondary">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
