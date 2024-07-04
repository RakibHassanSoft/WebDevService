import React from 'react';

const ServiceCard = ({ title, imageUrl, description }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1">
            <img src={imageUrl} alt={title} className="h-64 w-full object-cover object-center" />
            <div className="p-6 h-48"> {/* Set a fixed height for the card body */}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 mb-4 overflow-hidden" style={{ maxHeight: '3.5em' }}>{description}</p> {/* Limit text height */}
            </div>
            <div className="flex justify-between items-center p-6 bg-gray-700">
                <a href="#" className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
        </div>
    );
};

export default ServiceCard;