import React from 'react';
import { Link } from 'react-router-dom'; // Replace with your routing library

const NotFoundPage = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/ScTG5H0/fr88395q.png')]  flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="text-9xl font-bold  font-mono">404</div>
            <h1 className="text-4xl mt-8 mb-4">Oops! Page not found.</h1>
            <p className="text-lg text-center mb-8">The page you are looking for might have been removed or its name changed.</p>
            <Link to="/" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300">
                Go to Home Page
            </Link>
        </div>
    );
};

export default NotFoundPage;
