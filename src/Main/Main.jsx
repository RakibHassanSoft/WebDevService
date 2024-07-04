import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Services/Navbar';
import Footer from '../Pages/Services/Footer';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop ';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop /> {/* Render the ScrollToTop component */}
        </div>
    );
};

export default Main;
