import React from 'react';
import './Contacts.css';
import SectionTitle from '../components/SectionTitle';

const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <SectionTitle title="contacts" />

            <div className="contacts-content">
                <div className="contacts-text">
                    <p className="text-gray">
                        I’m interested in freelance opportunities and full-stack positions. However, if you have other request or question, don’t hesitate to contact me.
                    </p>
                </div>

                <div className="contacts-card border-gray">
                    <h3 className="text-white">Message me here</h3>
                    <div className="contact-methods">
                        <div className="method">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 6H4C2.9 6 2 6.9 2 8V24C2 25.1 2.9 26 4 26H28C29.1 26 30 25.1 30 24V8C30 6.9 29.1 6 28 6ZM28 24H4V10L16 18L28 10V24ZM16 15L4 7H28L16 15Z" fill="#ABB2BF" />
                            </svg>
                            <span className="text-gray">aayush.leads@gmail.com</span>
                        </div>
                        <div className="method">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2C8.268 2 2 8.268 2 16c0 6.188 3.996 11.439 9.547 13.284.7.13.953-.304.953-.674 0-.332-.012-1.21-.018-2.376-3.894.846-4.715-1.876-4.715-1.876-.637-1.618-1.554-2.049-1.554-2.049-1.271-.869.096-.851.096-.851 1.405.1 2.146 1.443 2.146 1.443 1.248 2.14 3.283 1.521 4.084 1.164.127-.905.489-1.521.888-1.871-3.109-.353-6.378-1.555-6.378-6.92 0-1.528.546-2.777 1.442-3.756-.144-.354-.625-1.777.137-3.704 0 0 1.176-.376 3.85 1.434 1.117-.311 2.316-.466 3.507-.472 1.19.006 2.389.161 3.508.472 2.672-1.81 3.846-1.434 3.846-1.434.764 1.927.283 3.35.139 3.704.898.979 1.441 2.228 1.441 3.756 0 5.379-3.275 6.561-6.395 6.908.503.433.951 1.289.951 2.598 0 1.876-.017 3.39-.017 3.85 0 .374.25.811.96.672C26.009 27.435 30 22.185 30 16c0-7.732-6.268-14-14-14z" fill="#ABB2BF" />
                            </svg>
                            <span className="text-gray">Aayush-innovates</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
