import React from 'react';
import './SkillBlock.css';

const SkillBlock = ({ title, skills }) => {
    return (
        <div className="skill-block">
            <div className="skill-header">
                {title}
            </div>
            <div className="skill-list">
                {skills.join(' ')}
            </div>
        </div>
    );
};

export default SkillBlock;
