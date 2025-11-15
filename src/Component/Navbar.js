import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <a href="/">Portfolio</a>
            </div>
            
            <button className="nav-toggle" onClick={toggleMenu}>
                <span className="hamburger"></span>
            </button>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;