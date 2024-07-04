import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Function to show/hide the scroll-to-top button based on scroll position
    const toggleVisibility = () => {
        const currentPosition = window.pageYOffset;
        if (currentPosition > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Function to open WhatsApp with predefined message
    const openWhatsApp = () => {
        const phoneNumber = '1234567890'; // Replace with your WhatsApp number
        const message = encodeURIComponent('Hello! I saw your website and wanted to connect.'); // Your predefined message
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="fixed bottom-4 right-4 z-10">
            <div className="flex space-x-4">
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition duration-300"
                        aria-label="Scroll to Top"
                    >
                        <FontAwesomeIcon className='text-3xl' icon={faAngleUp} />
                    </button>
                )}
                <button
                    onClick={openWhatsApp}
                    className="bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition duration-300"
                    aria-label="WhatsApp"
                >
                    <FontAwesomeIcon className='h-8 w-8' icon={faWhatsapp} />
                </button>
            </div>
        </div>
    );
};

export default ScrollToTop;
