import React from 'react';


const Main = () => {
    return (
        <main className="main-container">
            <section className="hero-section">
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm [Your Name] - A [Your Profession]</p>
                <button className="cta-button">View My Work</button>
            </section>

            <section className="about-section">
                <h2>About Me</h2>
                <p>I specialize in creating responsive and user-friendly web applications.</p>
            </section>

            <section className="featured-works">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {/* Add your project cards here */}
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>Project description goes here</p>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>Project description goes here</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;