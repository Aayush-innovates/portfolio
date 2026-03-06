import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-info">
                    <div className="footer-brand">
                        <div className="logo">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0H8V4H4V8H0V12H4V16H8V12H12V8H16V4H12V0ZM8 4H12V8H8V4ZM4 8H8V12H4V8Z" fill="white" />
                            </svg>
                            <span className="logo-text">Aayush</span>
                        </div>
                        <p className="text-gray">aayush.leads@gmail.com</p>
                    </div>
                    <p className="footer-tagline">Full-stack developer and AI enthusiast</p>
                </div>

                <div className="footer-socials">
                    <h3>Media</h3>
                    <div className="social-icons">
                        <a href="https://github.com/Aayush-innovates" target="_blank" rel="noreferrer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.819-.26.819-.578 0-.284-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.469-2.381 1.236-3.221-.124-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" fill="#ABB2BF" />
                            </svg>
                        </a>
                        {/* Add more icons as needed */}
                    </div>
                </div>
            </div>
            <div className="copyright">
                © Copyright 2026. Made by Aayush
            </div>
        </footer>
    );
};

export default Footer;
