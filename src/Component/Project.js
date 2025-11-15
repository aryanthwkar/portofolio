import React from 'react';


const projects = [
  {
    title: 'Weather App',
    description: 'A real-time weather forecasting app using React and OpenWeather API.',
    tech: 'React, JavaScript, API',
    link: 'https://github.com/yourusername/weather-app'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, showcasing my skills and projects.',
    tech: 'React, CSS, UI Design',
    link: 'https://yourportfolio.com'
  },
  {
    title: 'ChatGPT Clone',
    description: 'A full-stack AI chat system using Spring Boot and OpenAI API.',
    tech: 'Spring Boot, React, API',
    link: 'https://github.com/yourusername/chatgpt-clone'
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech-stack">{project.tech}</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
