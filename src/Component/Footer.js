import React from 'react';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                       
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        
                    </a>
                    <a href="mailto:your.email@example.com">
                    
                    </a>
                </div>
                <div className="footer-text">
                    <p>Let's build something amazing together!</p>
                    <p>&copy; {currentYear} Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;