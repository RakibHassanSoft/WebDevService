import React from 'react';
import { CiSquareChevRight } from "react-icons/ci";

const Hero = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/ScTG5H0/fr88395q.png')] h-full lg:h-[52rem] flex flex-col md:flex-row  lg:flex-row justify-center ">
            {/* left section  */}
            <div className='text-white w-full md:w-1/3 lg:w-1/3 flex flex-col justify-center  p-4  lg:p-0  mt-72 lg:mt-0'>
                <h1 className='text-6xl text-left font-bold '><h1 className='text-green-500'>MD RAKIBUL</h1>ISLAM</h1>
                <div className="flex flex-col items-start">
                    
                    <p className="text-xl border-l-8 mt-4 border-green-500 pl-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id ducimus est cupiditate explicabo <br />veritatis ab totam. Facere magni odit id voluptatem tempora vero a officia exercitationem sequi natus <br /> quo provident sapiente explicabo iste fugiat dolorum velit repellendus vitae est magnam, odio quod aut? In harum rem ut. Aliquid velit dolor molestias deleniti 
                    </p>
                    <button className='bg-green-500  lg:w-1/3 text-2xl mt-4 p-4 rounded-lg flex items-center justify-center'>SERVICES <CiSquareChevRight className='text-4xl' /></button>
                </div>




            </div>
            {/* right section  */}
            <div className=' '>
                <img className='h-full w-full' src="https://i.ibb.co/MpQCPf9/384824688-1096597625083639-7137833643901927527-n-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;