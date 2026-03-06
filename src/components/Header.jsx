import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0H8V4H4V8H0V12H4V16H8V12H12V8H16V4H12V0ZM8 4H12V8H8V4ZM4 8H8V12H4V8Z" fill="white" />
                    </svg>
                    <span className="logo-text">Aayush</span>
                </div>

                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#home" onClick={() => setIsOpen(false)}><span className="text-primary">#</span>home</a></li>
                        <li><a href="#works" onClick={() => setIsOpen(false)}><span className="text-primary">#</span>works</a></li>
                        <li><a href="#about-me" onClick={() => setIsOpen(false)}><span className="text-primary">#</span>about-me</a></li>
                        <li><a href="#contacts" onClick={() => setIsOpen(false)}><span className="text-primary">#</span>contacts</a></li>
                        <li className="lang-switcher">
                            <span>EN</span>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#ABB2BF" strokeWidth="1" />
                            </svg>
                        </li>
                    </ul>
                </nav>

                <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
