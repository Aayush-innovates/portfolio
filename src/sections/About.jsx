import React from 'react';
import './About.css';
import SectionTitle from '../components/SectionTitle';
import SkillBlock from '../components/SkillBlock';
import Button from '../components/Button';
import heroMe from '../assets/hero_me.png';

const About = () => {
    const skillCategories = [
        { title: 'Languages', skills: ['JavaScript', 'Dart', 'SQL', 'C++'] },
        { title: 'Frameworks', skills: ['React.js', 'Node.js', 'Express.js', 'Flutter'] },
        { title: 'Databases', skills: ['MongoDB', 'SQL', 'Firebase'] },
        { title: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'n8n', 'VS Code'] },
        { title: 'Other', skills: ['REST APIs', 'JWT', 'Gemini AI', 'DSA'] }
    ];

    return (
        <section id="about-me" className="about">
            <SectionTitle title="about-me" />

            <div className="about-content">
                <div className="about-text">
                    <p className="text-gray">
                        Hello, i’m Aayush Vijay Sadaye!
                    </p>
                    <p className="text-gray">
                        I’m a self-taught full-stack developer experienced in building AI-integrated mobile and web applications using MERN and Flutter.
                    </p>
                    <p className="text-gray">
                        I have a strong foundation in Data Structures and Algorithms and enjoy developing scalable solutions in hackathon and startup environments. I am passionate about transforming ideas into modern user-friendly web experiences.
                    </p>
                    <Button href="#about-me">Read more -{'>'}</Button>
                </div>

                <div className="about-visual">
                    <div className="image-graphics about-graphics">
                        <svg className="dots-svg about-dots" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {[...Array(5)].map((_, i) => (
                                [...Array(5)].map((_, j) => (
                                    <circle key={`${i}-${j}`} cx={2 + i * 20} cy={2 + j * 20} r="2" fill="#ABB2BF" />
                                ))
                            ))}
                        </svg>
                        <img src={heroMe} alt="About Aayush" className="main-image" />
                    </div>
                </div>
            </div>

            <div className="about-skills" style={{ marginTop: '80px' }}>
                <SectionTitle title="skills" />
                <div className="skills-grid">
                    {skillCategories.map((cat, index) => (
                        <SkillBlock key={index} title={cat.title} skills={cat.skills} />
                    ))}
                </div>
            </div>

            <div className="about-fun-facts" style={{ marginTop: '80px' }}>
                <SectionTitle title="fun-facts" />
                <div className="facts-container">
                    <div className="fact border-gray text-gray">Event Head for Inovorse 1.0</div>
                    <div className="fact border-gray text-gray">Technical Team Member @ TECHMAZE</div>
                    <div className="fact border-gray text-gray">96% Cumulative GPA in Poly</div>
                    <div className="fact border-gray text-gray">AI Hackathon Enthusiast</div>
                </div>
            </div>
        </section>
    );
};

export default About;
