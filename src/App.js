import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Skills from './Component/Skill';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Project from './Component/Project'; // Assuming you have this

function App() {

  // Smooth scroll for nav links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'a' && target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const sectionId = target.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  // Fade-in effect when section enters viewport
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <main className="main-content">
        <section id="home" className="section">
          <Main />
        </section>

        <section id="projects" className="section">
          <Project />
        </section>

        <section id="skills" className="section alt-bg">
          <Skills />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
