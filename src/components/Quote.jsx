import React from 'react';
import './Quote.css';

const Quote = () => {
    return (
        <div className="quote-container">
            <div className="quote border-gray">
                <p className="quote-text text-white">With great power comes great electricity bill</p>
                <div className="quote-author border-gray text-white">- Dr. Who</div>
                {/* Quote icon placeholders */}
                <div className="quote-icon quote-icon-start border-gray">
                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85714 0H0V11.4286H5.85714C5.85714 13.9143 3.82857 15.9429 1.34286 15.9429V20C6.91429 20 11.4286 15.4857 11.4286 9.91429V0H5.85714ZM19.4286 0H13.5714V11.4286H19.4286C19.4286 13.9143 17.4 15.9429 14.9143 15.9429V20C20.4857 20 25 15.4857 25 9.91429V0H19.4286Z" fill="#ABB2BF" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Quote;
