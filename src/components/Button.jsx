import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`btn btn-${variant} ${className}`}
        >
            {children}
        </Component>
    );
};

export default Button;
