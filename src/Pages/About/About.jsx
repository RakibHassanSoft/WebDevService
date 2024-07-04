import React, { useEffect, useState } from 'react';

const About = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Finished SSC',
            description: 'Satkhira PN High School, Satkhira, Khulna',
        },
        {
            id: 2,
            title: 'Completed HSC',
            description: 'Satkhira Government College',
        },
        {
            id: 3,
            title: 'MERN Stack Courses',
            description: 'Programming Hero and Ostad Platform',
        },
        {
            id: 4,
            title: 'Studying CSE',
            description: 'Private University in Dhaka',
        },
        {
            id: 5,
            title: 'Projects',
            description: 'Various web development projects focusing on the MERN stack.',
        },
    ]);

    useEffect(() => {
        // Fetch or process data here if needed
    }, []);
    return (
        <div className="bg-black text-white min-h-screen mt-18 p-4 md:p-8 ">
            <div className="">
                {/* header part  */}

                <div className="relative bg-cover bg-center py-16 md::70 lg:h-96" style={{ backgroundImage: "url('https://i.ibb.co/517DLYm/mern.jpg') " }}>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
                        <img
                            src="https://i.ibb.co/FYYm113/Firefly-20240613131632-2.png"
                            alt="Md Rakibul Islam"
                            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8 shadow-lg border-4 border-green-500"
                        />
                        <div className="text-white">
                            <h1 className="text-4xl md:text-5xl font-bold">Md Rakibul Islam</h1>
                            <p className="mt-2 text-lg md:text-xl">I'm a passionate web developer with a focus on the MERN stack. I'm currently studying CSE at a private university in Dhaka.</p>
                        </div>
                    </div>
                </div>

                <div className='md:w-9/12 lg:w-8/12 mx-auto'>

                    {/* Education  */}
                    <div className="mt-8">
                        <h2 className="text-3xl font-bold text-green-500">Education & Projects</h2>
                        <div className="relative mt-8">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-green-500"></div>
                            <ul className="space-y-8">
                                <li className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                                    <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                                        <h3 className="text-xl font-bold">Finished SSC</h3>
                                        <p className="mt-2">Satkhira PN High School, Satkhira, Khulna</p>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                                    <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                                        <h3 className="text-xl font-bold">Completed HSC</h3>
                                        <p className="mt-2">Satkhira Government College</p>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                                    <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                                        <h3 className="text-xl font-bold">MERN Stack Courses</h3>
                                        <p className="mt-2">Programming Hero and Ostad Platform</p>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                                    <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                                        <h3 className="text-xl font-bold">Studying CSE</h3>
                                        <p className="mt-2">Private University in Dhaka</p>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                                    <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                                        <h3 className="text-xl font-bold">Projects</h3>
                                        <p className="mt-2">Various web development projects focusing on the MERN stack.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>




                    {/* github  */}
                    <div className="mt-8">
                        <h2 className="text-3xl font-bold text-green-500">GitHub Stats</h2>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
                            <img src="https://github-readme-stats.vercel.app/api?username=RakibHassanSoft&theme=vue-dark&show_icons=true&hide_border=true&count_private=true" alt="GitHub Stats" />
                            <img src="https://github-readme-streak-stats.herokuapp.com/?user=RakibHassanSoft&theme=vue-dark&hide_border=true" alt="GitHub Streak" className="mt-4" />
                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RakibHassanSoft&theme=vue-dark&show_icons=true&hide_border=true&layout=compact" alt="Top Languages" className="mt-4" />
                        </div>
                    </div>
                    {/* language icoon  */}
                    <div className="mt-8">
                        <h2 className="text-3xl font-bold text-green-500">Skills</h2>
                        <div className="flex flex-wrap mt-4">
                            <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" className="m-2" />
                            <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" className="m-2" />
                            <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" className="m-2" />
                            <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" className="m-2" />
                            <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5" className="m-2" />
                            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" className="m-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
