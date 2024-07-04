import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-[url('https://i.ibb.co/ScTG5H0/fr88395q.png')]  flex items-center justify-center bg-black">
            <div className="max-w-md w-full bg-gray-800 p-8 shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-4 text-green-500">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-green-500">Email Address</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                required
                                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-green-500">Password</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                required
                                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mb-6 w-full">
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-green-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <Link to="/register" className="text-green-500 hover:underline">Do not have an account? Register</Link>
                </div>
                <div className="mt-6 flex justify-center">
                    <button className="text-green-500 hover:text-green-600 focus:outline-none">
                        <span className="sr-only">Sign up with Google</span>
                        <FcGoogle className='text-3xl' />
                    </button>
                    <button className="text-green-500 hover:text-green-600 focus:outline-none ml-4">
                        <span className="sr-only">Sign up with Facebook</span>
                        <FaFacebook className='text-3xl' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
