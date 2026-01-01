'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectSlider.css';

const ProjectSlider = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    React.useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // 5 seconds per slide

        return () => clearInterval(interval);
    }, [isPaused, projects.length]);

    const nextSlide = () => {
        // Pausing briefly on interaction can be UX friendly, 
        // but here we just rely on hover to pause mostly. 
        // Or we can manually reset timer. The simplicity of just changing slide works.
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    if (!projects || projects.length === 0) return null;

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="carousel-content">
                <button
                    className="carousel-btn prev-btn"
                    onClick={() => { prevSlide(); setIsPaused(true); }} // Pause on click
                    aria-label="Previous project"
                >
                    &#10094;
                </button>

                <div className="carousel-window">
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(calc(-${currentIndex} * (100% + 2rem)))` }}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="carousel-slide">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="carousel-btn next-btn"
                    onClick={() => { nextSlide(); setIsPaused(true); }} // Pause on click
                    aria-label="Next project"
                >
                    &#10095;
                </button>
            </div>

            <div className="carousel-indicators">
                {projects.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => { setCurrentIndex(index); setIsPaused(true); }} // Pause on click
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
