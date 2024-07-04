import React, { useState } from 'react';
import Hero from '../../../components/Hero/Hero';
import DownloadCV from '../../../components/DownloadCV/DownloadCV';
import Skill from '../../../components/Skill/Skill';
import EducationalQualification from '../../../components/EducationalQualification/EducationalQualification';
import BlogsInSlider from '../../../components/BlogsInSlider/BlogsInSlider';
import PaymentOptions from '../../../components/PaymentOptions/PaymentOptions';
import Reviews from '../../../components/Reviews/Reviews';
import ServicesAndSolution from '../../../components/ServicesAndSolution/ServicesAndSolution';
import ProjectsInslider from '../../../components/Projects/ProjectsInslider';
import CursorFollower from '../../../components/CursorFollower/CursorFollower ';

const Home = () => {

  return (
    <div className="bg-black relative" >
      <CursorFollower>

      <Hero />
      </CursorFollower>
      <DownloadCV />
      <Skill />
      {/* <EducationalQualification /> */}
      <ServicesAndSolution />
      <ProjectsInslider />
      {/* <Reviews /> */}
      {/* <PaymentOptions /> */}
      <BlogsInSlider />
    </div>
  );
};

export default Home;
