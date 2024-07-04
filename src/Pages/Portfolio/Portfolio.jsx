import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faFacebook, faJs, faTwitter, faLinkedin, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";


const Portfolio = () => {
    return (
        <div className="bg-black text-white min-h-screen py-12">
            <div className=" bg-cover bg-center py-16 md::70 lg:h-96" style={{ backgroundImage: "url('https://i.ibb.co/517DLYm/mern.jpg') " }}>
                <div className=" inset-0  bg-black opacity-60"></div>
                <div className=" flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
                    <img
                        src="https://i.ibb.co/FYYm113/Firefly-20240613131632-2.png"
                        alt="Md Rakibul Islam"
                        className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8 shadow-lg border-4 border-green-500"
                    />
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl font-bold">Md Rakibul Islam</h1>
                        <p className="mt-2 text-lg md:text-xl">I'm a passionate web developer with a focus on the MERN stack. I'm currently studying CSE at a private university in Dhaka.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

                {/* Portfolio Header */}
                <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>

                {/* Project Showcase */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Project Card 1 */}
                    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 flex flex-col justify-between">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Project 1: Art and Craft Website</h3>
                            <p className="text-gray-300 mb-4">This project showcases my skills in React, Tailwind CSS, and responsive design. It includes features like a gallery, contact form, and responsive layout.</p>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-gray-700">
                            <a href="#" className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
                            <a href="#" className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 flex flex-col justify-between">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Project 2: Library Management System</h3>
                            <p className="text-gray-300 mb-4">A full-stack application built with MERN stack (MongoDB, Express.js, React, Node.js). It includes user authentication, role-based access control, and CRUD operations.</p>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-gray-700">
                            <a href="#" className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
                            <a href="#" className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                </div>


                {/* About Me Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-300 mb-4">I am Md Raibhul Islam, a frontend developer passionate about creating interactive and user-friendly web applications. I have experience with JavaScript, React, Node.js, and various frontend technologies.</p>
                    <p className="text-gray-300 mb-4">Feel free to <a href="mailto:youremail@example.com" className="text-green-500 hover:underline">contact me</a> for collaborations or job opportunities.</p>
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-4">
                        <ProgrammingLanguageIcon icon={faHtml5} name="HTML5" />
                        <ProgrammingLanguageIcon icon={faCss3Alt} name="CSS3" />
                        <ProgrammingLanguageIcon icon={faJs} name="JavaScript" />
                        <ProgrammingLanguageIcon icon={faReact} name="React" />
                        <ProgrammingLanguageIcon icon={faNodeJs} name="Node.js" />
                        <ProgrammingLanguageIcon icon={faPython} name="Python" />
                        <div className='flex gap-4'>
                            <span className='flex justify-center items-center gap-1'> <DiMysql />MySQL</span>
                            <span className='flex justify-center items-center'> <SiMongodb className='text-green-400' /> MongoDB</span>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
                    <div className="bg-gray-800 rounded-lg shadow-md p-6">
                        <p className="text-gray-300 mb-4">"Raibhul's attention to detail and creativity in web development is exceptional. His projects speak volumes about his skills and dedication."</p>
                        <p className="font-semibold">- John Doe, CEO at Example Company</p>
                    </div>
                </div>

                {/* Contact and Subscription Section */}
                <div className="bg-black text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Contact Form and Social Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Contact Form */}
                            <div className="bg-gray-800 rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-gray-400">Your Email Address</label>
                                        <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-green-500 border-gray-600" placeholder="Your email address" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-gray-400">Message</label>
                                        <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-green-500 border-gray-600" placeholder="Your message"></textarea>
                                    </div>
                                    <div className="flex items-center">
                                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">Send Message</button>
                                    </div>
                                </form>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gray-800 rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-white mb-4">Social Links</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <a href="https://facebook.com" className="flex items-center text-gray-300 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faFacebook} className="text-xl mr-2" />
                                            <span className="text-white">Facebook</span>
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <a href="https://twitter.com" className="flex items-center text-gray-300 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faTwitter} className="text-xl mr-2" />
                                            <span className="text-white">Twitter</span>
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <a href="https://linkedin.com" className="flex items-center text-gray-300 hover:text-green-500" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faLinkedin} className="text-xl mr-2" />
                                            <span className="text-white">LinkedIn</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* Subscription Section */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h2>
                            <form className="flex items-center space-x-4">
                                <input type="email" className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-green-500 border-gray-600" placeholder="Your email address" />
                                <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">Subscribe</button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};


// Programming Language Icon Component
const ProgrammingLanguageIcon = ({ icon, name }) => (
    <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={icon} className="text-green-500 text-lg" />
        <span className="text-gray-300">{name}</span>
    </div>
);

export default Portfolio;
