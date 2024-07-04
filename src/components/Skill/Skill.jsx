import React from 'react';
import Header from '../../Shared/Header/Header';
import ProgressCircle from './ProgressCircle'; // Adjust the path based on your project structure

const Skill = () => {
    return (
        <div className='lg:w-10/12 m-auto mt-36'>
            {/* First section */}
            <div className='w-full'>
                <Header 
                    title1="MY EXPERIENCE" 
                    title2="EXPERIENCE AND" 
                    text="Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit, Error Qui Enim Sit Ex Provident"
                />
            </div>

            {/* Second section */}
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
                {/* Placeholder content */}
                {/* Your content here */}
            </div>

            {/* Third section */}
            <div className='w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 m-auto'>
                {/* Progress circles */}
                <ProgressCircle percentage={70} />
                <ProgressCircle percentage={40} />
                <ProgressCircle percentage={80} />
                <ProgressCircle percentage={90} />
            </div>
        </div>
    );
};

export default Skill;
