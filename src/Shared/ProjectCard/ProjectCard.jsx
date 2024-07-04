import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    const [modalOpen, setModalOpen] = useState(false);

    // Function to toggle modal state
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="relative rounded-lg max-h-[24rem] overflow-hidden shadow-lg border-8 border-green-600 m-1">
            {/* Project Image */}
          
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2011/03/mashable.jpg" alt="Project" className="w-full h-auto" />

            {/* View Details Button */}
            <button className="absolute font-bold bottom-2 right-2 bg-black text-green-500 px-3 py-1 rounded-lg" onClick={toggleModal}>
                View Details
            </button>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-20  flex items-center justify-center overflow-y-auto bg-black bg-opacity-70">
                    <div className=" rounded-lg md:p-8 w-full max-w-screen-sm mx-auto overflow-y-auto mt-20 md:mt-24 md:w-7/12 lg:w-5/12 lg:mt-96">
                        {/* Close Button */}
                        <button className="absolute top-2 right-2 text-black bg-green-500 rounded-full" onClick={toggleModal}>
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Project Content */}
                        <div className="p-2 bg-white rounded-lg">
                
                            {/* Add your project details here */}
                            <div className="text-gray-700">
                                <img src="https://www.searchenginejournal.com/wp-content/uploads/2011/03/mashable.jpg" alt="Project" className="w-full h-auto" />
                                <p className="mt-4">
                                <Link onClick={toggleModal} className='btn bg-green-600 text-white p-4 border-none rounded-lg'>Close</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Close Button for Mobile */}
                    <button className="absolute border-none top-2 right-2 md:hidden text-green-600" onClick={toggleModal}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
