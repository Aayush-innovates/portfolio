import React from 'react';
import './Hero.css';
import Button from '../components/Button';
import heroMe from '../assets/hero_me.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Aayush is a <span className="text-primary">web developer</span> and <span className="text-primary">AI enthusiast</span></h1>
                <p className="text-gray">He builds AI-integrated mobile and web applications using MERN and Flutter.</p>
                <Button href="#contacts">Contact me!!</Button>
            </div>

            <div className="hero-image">
                <div className="image-graphics">
                    <svg className="squares-svg" width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="32.5" width="85" height="85" stroke="#C778DD" />
                        <rect x="52.5" y="0.5" width="85" height="85" stroke="#C778DD" />
                        <rect x="23.5" y="69.5" width="85" height="85" stroke="#C778DD" />
                    </svg>
                    <svg className="dots-svg" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(5)].map((_, i) => (
                            [...Array(5)].map((_, j) => (
                                <circle key={`${i}-${j}`} cx={2 + i * 20} cy={2 + j * 20} r="2" fill="#ABB2BF" />
                            ))
                        ))}
                    </svg>
                    <img src={heroMe} alt="Aayush Hacker Style" className="main-image" />
                </div>
                <div className="status-box border-gray">
                    <div className="status-indicator"></div>
                    <p className="text-gray">Currently working on <span className="text-white">Portfolio</span></p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
