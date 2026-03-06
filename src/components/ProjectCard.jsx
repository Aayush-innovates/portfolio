import React from 'react';
import './ProjectCard.css';
import Button from './Button';

const ProjectCard = ({ title, description, stack, image, liveLink, githubLink, isSmall = false }) => {
    return (
        <div className={`project-card ${isSmall ? 'small' : ''}`}>
            {!isSmall && image && (
                <div className="project-image">
                    <img src={image} alt={title} />
                </div>
            )}
            <div className="project-stack">
                {stack.join(' ')}
            </div>
            <div className="project-body">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-actions">
                    {liveLink && <Button href={liveLink}>Live {'<~>'}</Button>}
                    {githubLink && <Button variant="secondary" href={githubLink}>Github {'<~>'}</Button>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
