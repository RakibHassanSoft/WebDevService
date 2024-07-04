import React from 'react';
import { CiSquareChevRight } from 'react-icons/ci';
import intro from "../../../public/Video/intro.mp4";
import CV from "../../../public/Images/CV.pdf"
const DownloadCV = () => {
    const handleDownload = () => {
        // Replace with the actual URL to your CV file
        const cvUrl = CV;
        window.open(cvUrl, '_blank');
    };

    return (
        <div className="mt-14 w-10/12 m-auto">
            <div className="relative h-full lg:h-[32rem] gap-4 flex flex-col md:flex-row lg:flex-row justify-center items-center bg-black">
                <div className="absolute inset-0 bg-[url('https://i.ibb.co/3m7VSTC/sovz1mln.png')] bg-cover bg-center opacity-15"></div>
                
         
               {/* Right section */}
                <div className="relative w-full md:w-1/2 lg:w-1/2 flex justify-center items-center bg-[url('https://i.ibb.co/ZTzvw8R/tree.png')] bg-cover bg-center h-96">
                    <video
                        src={intro}
                        className="h-full w-full object-cover pointer-events-none"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>

                {/* Left section */}
                <div className="relative text-white w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center p-4 lg:p-12 lg:mr-12">
                    <h1 className="text-3xl text-left font-bold">
                        <span className="text-green-500">FAILURE IS THE CONDIMENT THAT GIVES</span> SUCCESS
                    </h1>
                    <div className="flex flex-col items-start">
                        <p className="text-xl border-l-4 mt-4 border-green-500 pl-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id ducimus est cupiditate explicabo
                            <br />
                            veritatis ab totam. Facere magni odit id voluptatem tempora vero a officia exercitationem sequi natus
                            <br />
                            quo provident sapiente explicabo iste fugiat dolorum velit repellendus vitae est magnam, odio quod aut? In harum rem ut. Aliquid velit dolor molestias deleniti
                        </p>
                        <button 
                            className="bg-green-500 gap-1 text-md mt-4 p-2 rounded-lg flex items-center justify-center"
                            onClick={handleDownload}
                        >
                            DOWNLOAD CV <CiSquareChevRight className="text-4xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadCV;
