import React from 'react';
import Header from '../../Shared/Header/Header';
import BlogCard from '../../Shared/BlogCard/BlogCard';

const BlogsInSlider = () => {
    return (
        <div>
           <div className='w-11/12 lg:w-8/12 m-auto mt-36 pb-12'>
            <Header title1={"RECENT NEWS DESK"} title2={"LASTET NEWS & BLOGS"} text={"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit"}> </Header>
            <div className=" grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4">
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
            </div>
        </div>
        </div>
    );
};

export default BlogsInSlider;