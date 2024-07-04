import React from 'react';
import Slider from 'react-slick';
import Header from '../../Shared/Header/Header';
import ServiceCard from '../../Shared/SeviceCard/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProjectsInslider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow customClass="next-arrow" />,
        prevArrow: <SamplePrevArrow customClass="prev-arrow" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='lg:w-8/12 m-auto mt-36'>
            <Header title1={"WORKING PROCESS"} title2={"LATEST WORKING PROJECT"} text={"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit"}> </Header>
            <div className="relative">
                <Slider {...settings}>
                    <div>
                        <ServiceCard />
                    </div>
                    <div>
                        <ServiceCard />
                    </div>
                    <div>
                        <ServiceCard />
                    </div>
                    <div>
                        <ServiceCard />
                    </div>
                </Slider>
            </div>
            <div className="text-center mt-4">
                <button className="bg-black text-green-500 py-2 px-4 rounded">See All</button>
            </div>
        </div>
    );
};

const SampleNextArrow = ({ className, style, onClick, customClass }) => {
    return (
        <div
            className={`${className} ${customClass}`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </div>
    );
}

const SamplePrevArrow = ({ className, style, onClick, customClass }) => {
    return (
        <div
            className={`${className} ${customClass}`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </div>
    );
}

export default ProjectsInslider;
