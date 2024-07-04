import React from 'react';
import Header from '../../Shared/Header/Header';
import ProjectCard from '../../Shared/ProjectCard/ProjectCard';

const ProjectsInslider = () => {
    return (
        <div className='lg:w-8/12 m-auto mt-36'>
            <Header title1={"WORKING PROCESS"} title2={"LASTET WORKING PROJECT"} text={"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit"}> </Header>
            <div className=" grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4">
                <ProjectCard></ProjectCard> 
                <ProjectCard></ProjectCard> 
                <ProjectCard></ProjectCard> 
            </div>
        </div>
    );
};

export default ProjectsInslider;