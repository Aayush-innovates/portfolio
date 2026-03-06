import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideSocials from './SideSocials';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <SideSocials />
            <main className="container fade-in">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
