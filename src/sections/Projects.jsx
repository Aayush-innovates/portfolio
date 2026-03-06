import React from 'react';
import './Projects.css';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const completeApps = [
        {
            title: 'DAGINA',
            description: 'MERN-based WhatsApp, Email, and SMS automation platform.',
            stack: ['MERN', 'n8n', 'WhatsApp API'],
            liveLink: 'https://pingoo-frontend.onrender.com/start'
        },
        {
            title: 'SCREEN WIZARD',
            description: 'Al-powered real-time guidance app using Flutter and Google Gemini.',
            stack: ['Flutter', 'Gemini AI'],
            liveLink: '#'
        },
        {
            title: 'ALUMNI CONNECT',
            description: 'Full-stack Alumni-Student Networking Platform.',
            stack: ['MERN', 'REST API'],
            liveLink: 'https://alumni-connect-sta.vercel.app/',
            githubLink: 'https://github.com/Aayush-innovates/alumni-connect'
        }
    ];

    const smallProjects = [
        {
            title: 'SPECTRA',
            description: 'AI-Powered Smart Translation & Navigation Glasses.',
            stack: ['AI', 'Micro-OLED'],
        },
        {
            title: 'RiIDL HACK',
            description: 'Event Head for Inovorse 1.0 & Website contributor.',
            stack: ['Event Mgmt', 'React'],
        },
        {
            title: 'TECHMAZE',
            description: 'Technical Team Member for TechMaze 2025.',
            stack: ['Web Dev', 'Operations'],
        }
    ];

    return (
        <section id="works" className="projects">
            <div className="projects-header">
                <SectionTitle title="projects" />
                <a href="#works" className="view-all">View all {'~~>'}</a>
            </div>

            <div className="section-title-sub">
                <SectionTitle title="complete-apps" line={false} />
            </div>
            <div className="projects-grid">
                {completeApps.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <div className="section-title-sub" style={{ marginTop: '80px' }}>
                <SectionTitle title="small-projects" line={false} />
            </div>
            <div className="projects-grid small-grid">
                {smallProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} isSmall />
                ))}
            </div>
        </section>
    );
};

export default Projects;
