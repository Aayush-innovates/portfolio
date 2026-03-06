import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, line = true }) => {
    return (
        <div className="section-title">
            <h2><span className="text-primary">/</span>{title}</h2>
            {line && <div className="line"></div>}
        </div>
    );
};

export default SectionTitle;
