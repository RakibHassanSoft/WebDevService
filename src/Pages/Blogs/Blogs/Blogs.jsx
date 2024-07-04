import React from 'react';
import Blog from '../Blog/Blog';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import Comments from '../../Comments/Comments';
import BlogCard from '../../../Shared/BlogCard/BlogCard';
import Header from '../../../Shared/Header/Header';

const Blogs = () => {
    return (
        <div className=' '>
            <div className='bg-black  pt-44 text-green-500 '>
                <div className=''>
                    <h1 className='text-green-400 pb-10 text-center text-3xl md:text-5xl lg:text-7xl font-bold'>Blogs</h1>
                </div>

            </div>

            <div className="w-full  bg-[url('https://i.ibb.co/ScTG5H0/fr88395q.png')] bg-fixed">
                <div className="w-full  md:10/12 lg:w-9/12 m-auto pt-24 pb-20 gap-4 s p-8">


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
