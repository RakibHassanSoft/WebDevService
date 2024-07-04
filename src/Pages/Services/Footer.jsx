import React from 'react';

const Footer = () => {
  return (

    <footer className="bg-gray-800 py-8 pt-44">
    <div className="container mx-auto text-center">
        <p className="text-gray-500">© 2023 MyCompany. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-white">Instagram</a>
        </div>
    </div>
</footer>
  );
};

export default Footer;