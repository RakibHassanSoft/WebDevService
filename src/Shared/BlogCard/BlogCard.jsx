import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div className="relative rounded-lg overflow-hidden h-[33rem] shadow-lg  bg-black w-full">
            {/* Blog Image */}
            <img src="https://i.ibb.co/L9GLYqJ/website-LOng.jpg" alt="Blog" className="w-full h-64 object-cover" />

            {/* Blog Content */}
            <div className="pr-6 pl-6 pt-3 ">
                <h2 className="text-2xl font-bold text-green-500 mb-2">Blog Title</h2>
                <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta risus in augue pretium, a dapibus felis mollis.</p>
                <div className="flex items-center">
                    <img src="https://i.pravatar.cc/40" alt="Author" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                        <p className="text-white font-bold">Author Name</p>
                        <p className="text-white text-sm">July 3, 2024</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
                
                {/* Read More Text and Right Arrow */}
                <Link to={"/blog/34"} className="text-white border-b-4 pb-2 border-green-500 font-bold flex items-center">
                    <span>Read More</span>
                    <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>

         
        </div>
    );
};

export default BlogCard;
