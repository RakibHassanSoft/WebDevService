import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom';
import image1 from "../../../public/Images/black.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenService, setIsOpenService] = useState(false);

    const user = true;

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsOpenService(true);
    };

    const handleMouseLeave = () => {
        setIsOpenService(false);
    };

    const handleServiceClick = () => {
        setIsOpenService(false);
    };

    const toggleServiceMenu = () => {
        setIsOpenService(!isOpenService);
    };

    const list1 = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold border-b-green-500' : ''}`
                }
            >
                HOME
            </NavLink>

            <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `pb-3 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold border-b-green-500' : ''}`
                    }
                    onClick={toggleServiceMenu}
                >
                    SERVICES
                </NavLink>
                {isOpenService && (
                    <div className="absolute left-0 mt-3 w-72 bg-black text-white rounded-md shadow-lg z-10">
                        <NavLink to="/responsive-website" className="block px-4 py-2 hover:bg-black hover:text-green-500 hover:font-bold" onClick={handleServiceClick}>RESPONSIVE WEBSITE</NavLink>
                        <NavLink to="/web-development" className="block px-4 py-2 hover:bg-black hover:text-green-500 hover:font-bold" onClick={handleServiceClick}>WEB DEVELOPMENT</NavLink>
                        <NavLink to="/app-development" className="block px-4 py-2 hover:bg-black hover:text-green-500 hover:font-bold" onClick={handleServiceClick}>APP DEVELOPMENT</NavLink>
                    </div>
                )}
            </div>
            <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                    `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold border-b-green-500' : ''}`
                }
            >
                PORTFOLIO
            </NavLink>
            <NavLink
                to="/blogs"
                className={({ isActive }) =>
                    `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold border-b-green-500' : ''}`
                }
            >
                BLOGS
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold border-b-green-500' : ''}`
                }
            >
                ABOUT
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold border-b-green-500' : ''}`
                }
            >
                CONTACT
            </NavLink>
        </>
    );

    const list2 = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
                }
                onClick={toggleSidebar}
            >
                HOME
            </NavLink>
            <div className="relative mb-4">
                <button
                    onClick={toggleServiceMenu}
                    className="block hover:text-green-500 focus:outline-none w-full text-left"
                >
                    SERVICES
                </button>
                {isOpenService && (
                    <div className="pl-4 mt-2">
                        <NavLink
                            to="/responsive-website"
                            className={({ isActive }) =>
                                `block mb-2 hover:text-green-500 hover:font-bold ${isActive ? 'text-green-500 font-bold' : ''}`
                            }
                            onClick={toggleSidebar}
                        >
                            RESPONSIVE WEBSITE
                        </NavLink>
                        <NavLink
                            to="/web-development"
                            className={({ isActive }) =>
                                `block mb-2 hover:text-green-500 hover:font-bold ${isActive ? 'text-green-500 font-bold' : ''}`
                            }
                            onClick={toggleSidebar}
                        >
                            WEB DEVELOPMENT
                        </NavLink>
                        <NavLink
                            to="/app-development"
                            className={({ isActive }) =>
                                `block mb-2 hover:text-green-500 hover:font-bold ${isActive ? 'text-green-500 font-bold' : ''}`
                            }
                            onClick={toggleSidebar}
                        >
                            APP DEVELOPMENT
                        </NavLink>
                    </div>
                )}
            </div>
            <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                    `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
                }
                onClick={toggleSidebar}
            >
                PORTFOLIO
            </NavLink>
            <NavLink
                to="/blogs"
                className={({ isActive }) =>
                    `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
                }
                onClick={toggleSidebar}
            >
                BLOGS
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
                }
                onClick={toggleSidebar}
            >
                ABOUT
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
                }
                onClick={toggleSidebar}
            >
                CONTACT
            </NavLink>
        </>
    );

    return (
        <div>
            <nav className={`fixed z-10 font-serif flex w-full items-center justify-between p-4 bg-black text-white bg-[url('${image1}')]`}>
                <Link to={"/"} className="text-2xl">Logo</Link >
                <div className="block lg:hidden" onClick={toggleSidebar}>
                    <button className="text-3xl focus:outline-none">☰</button>
                </div>
                <div className="hidden lg:flex justify-center space-x-4">
                    {list1}
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    {user ? (
                        <>
                            <div>
                                <img
                                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                                    alt="Avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                            <NavLink to="/" className="hover:underline">LOGOUT</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/register" className="hover:underline">REGISTER</NavLink>
                            <NavLink to="/login" className="hover:underline">LOGIN</NavLink>
                        </>
                    )}
                </div>
            </nav>

            <div
                className={`fixed top-0 left-0 h-fit mt-16 z-10 bg-gray-800 text-white w-64 p-6 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <button className="text-3xl mb-4 focus:outline-none" onClick={toggleSidebar}>×</button>
                {list2}
            </div>
        </div>
    );
};

export default Navbar;



// import React, { useState } from 'react';
// import { FiShoppingCart } from "react-icons/fi";
// import { NavLink } from 'react-router-dom';
// import image1 from "../../../public/Images/black.jpg";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isOpenService, setIsOpenService] = useState(false);

//     const user = true;

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleMouseEnter = () => {
//         setIsOpenService(true);
//     };

//     const handleMouseLeave = () => {
//         setIsOpenService(false);
//     };

//     const handleServiceClick = () => {
//         setIsOpenService(false);
//     };

//     const list1 = (
//         <>
//             <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                     `pb-2 hover:text-green-500  focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold border-b-green-500' : ''}`
//                 }
//             >
//                 HOME
//             </NavLink>

//             <div
//                 className="relative"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <NavLink
//                     to="/services"
//                     className={({ isActive }) =>
//                         `pb-3 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold  border-b-green-500' : ''}`
//                     }
//                 >
//                     SERVICES
//                 </NavLink>
//                 {isOpenService && (
//                     <div className="absolute left-0 mt-3 w-72 bg-black text-white rounded-md shadow-lg z-10">
//                         <NavLink to="/responsive-website" className="block px-4 py-2 hover:bg-black hover:text-green-500 hover:font-bold" onClick={handleServiceClick}>RESPONSIVE WEBSITE</NavLink>
//                         <NavLink to="/web-development" className="block px-4 py-2 hover:bg-black hover:text-green-500 hover:font-bold" onClick={handleServiceClick}>WEB DEVELOPMENT</NavLink>
//                         <NavLink to="/app-development" className="block px-4 py-2 hover:bg-black hover:text-green-500 hover:font-bold" onClick={handleServiceClick}>APP DEVELOPMENT</NavLink>
//                     </div>
//                 )}
//             </div>
//             <NavLink
//                 to="/portfolio"
//                 className={({ isActive }) =>
//                     `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold  border-b-green-500' : ''}`
//                 }
//             >
//                 PORTFOLIO
//             </NavLink>
//             <NavLink
//                 to="/blogs"
//                 className={({ isActive }) =>
//                     `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold  border-b-green-500' : ''}`
//                 }
//             >
//                 BLOGS
//             </NavLink>
//             <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                     `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold  border-b-green-500' : ''}`
//                 }
//             >
//                 ABOUT
//             </NavLink>
//             <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                     `pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500 ${isActive ? 'text-green-500 font-bold  border-b-green-500' : ''}`
//                 }
//             >
//                 CONTACT
//             </NavLink>
//         </>
//     );

//     const list2 = (
//         <>
//             <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                     `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
//                 }
//                 onClick={toggleSidebar}
//             >
//                 HOME
//             </NavLink>
//             <div className="relative mb-4">
//                 <button
//                     onClick={toggleSidebar}
//                     className="block hover:text-green-500 focus:outline-none w-full text-left"
//                 >
//                     SERVICES
//                 </button>
//                 {isOpenService && (
//                     <div className="pl-4 mt-2">
//                         <NavLink
//                             to="/responsive-website"
//                             className={({ isActive }) =>
//                                 `block mb-2 hover:text-green-500 hover:font-bold ${isActive ? 'text-green-500 font-bold' : ''}`
//                             }
//                             onClick={toggleSidebar}
//                         >
//                             RESPONSIVE WEBSITE
//                         </NavLink>
//                         <NavLink
//                             to="/web-development"
//                             className={({ isActive }) =>
//                                 `block mb-2 hover:text-green-500 hover:font-bold ${isActive ? 'text-green-500 font-bold' : ''}`
//                             }
//                             onClick={toggleSidebar}
//                         >
//                             WEB DEVELOPMENT
//                         </NavLink>
//                         <NavLink
//                             to="/app-development"
//                             className={({ isActive }) =>
//                                 `block mb-2 hover:text-green-500 hover:font-bold ${isActive ? 'text-green-500 font-bold' : ''}`
//                             }
//                             onClick={toggleSidebar}
//                         >
//                             APP DEVELOPMENT
//                         </NavLink>
//                     </div>
//                 )}
//             </div>
//             <NavLink
//                 to="/portfolio"
//                 className={({ isActive }) =>
//                     `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
//                 }
//                 onClick={toggleSidebar}
//             >
//                 PORTFOLIO
//             </NavLink>
//             <NavLink
//                 to="/blogs"
//                 className={({ isActive }) =>
//                     `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
//                 }
//                 onClick={toggleSidebar}
//             >
//                 BLOGS
//             </NavLink>
//             <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                     `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
//                 }
//                 onClick={toggleSidebar}
//             >
//                 ABOUT
//             </NavLink>
//             <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                     `block mb-4 hover:text-green-500 focus:outline-none ${isActive ? 'text-green-500 font-bold' : ''}`
//                 }
//                 onClick={toggleSidebar}
//             >
//                 CONTACT
//             </NavLink>
//         </>
//     );
    
//     return (
   
//         <div>
//             <nav className={` fixed z-10 font-serif flex w-full items-center justify-between p-4 bg-black text-white bg-[url('${image1}')]`}>
//                 <div className="text-2xl">Logo</div>
//                 <div className="block lg:hidden" onClick={toggleSidebar}>
//                     <button className="text-3xl focus:outline-none">☰</button>
//                 </div>
//                 <div className="hidden lg:flex justify-center space-x-4">
//                     {list1}
//                 </div>
//                 <div className="hidden lg:flex items-center space-x-4">
//                     {user ? (
//                         <>
//                             <div>
//                                 <img
//                                     src="path/to/avatar.jpg"
//                                     alt="Avatar"
//                                     className="w-8 h-8 rounded-full"
//                                 />
//                             </div>
//                             <NavLink to="/" className="hover:underline">LOGOUT</NavLink>
//                         </>
//                     ) : (
//                         <>
//                             <NavLink to="/register" className="hover:underline">REGISTER</NavLink>
//                             <NavLink to="/login" className="hover:underline">LOGIN</NavLink>
//                         </>
//                     )}
//                 </div>
//             </nav>

//             <div
//                 className={`fixed top-0 left-0 h-full mt-16 bg-gray-800 text-white w-64 p-6 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
//             >
//                 <button className="text-3xl mb-4 focus:outline-none" onClick={toggleSidebar}>×</button>
//                 {list2}
//             </div>
//         </div>


        
//     );
// };


// export default Navbar;