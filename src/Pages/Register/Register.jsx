import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Register= () => {
    const [countryCode, setCountryCode] = useState('+1'); // Default country code for USA

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };

    // Define regions and their respective country codes
    const regions = {
        richCountries: [
            { code: '+1', name: 'USA' },
            { code: '+44', name: 'UK' },
            { code: '+49', name: 'Germany' },
            // Add more rich countries as needed
        ],
        asianCountries: [
            { code: '+91', name: 'India' },
            { code: '+86', name: 'China' },
            { code: '+81', name: 'Japan' },
            // Add more Asian countries as needed
        ],
        // Add more regions or categories if required
    };



    return (
        <div className="bg-[url('https://i.ibb.co/ScTG5H0/fr88395q.png')] min-h-screen flex items-center justify-center bg-black">
            <div className="relative  max-w-md w-full bg-gray-800 p-8 shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-4 text-green-500">Create an Account</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-green-500">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                autoComplete="given-name"
                                required
                                className="block w-full mt-1 px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-green-500">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                autoComplete="family-name"
                                required
                                className="block w-full mt-1 px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-green-500">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            required
                            className="block w-full mt-1 px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-green-500">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="new-password"
                            required
                            className="block w-full mt-1 px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>

                    {/* Phone number section */}
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-green-500">Phone Number</label>
                        <div className="flex items-center mt-1 rounded-md shadow-sm">
                            <select
                                id="countryCode"
                                name="countryCode"
                                className="bg-gray-900 text-gray-600 appearance-none border border-gray-700 rounded-l-md px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                            >
                                {/* Option groups for rich countries */}
                                <optgroup label="Rich Countries">
                                    {regions.richCountries.map((country) => (
                                        <option key={country.code} value={country.code}>{`${country.code} (${country.name})`}</option>
                                    ))}
                                </optgroup>

                                {/* Option groups for Asian countries */}
                                <optgroup label="Asian Countries">
                                    {regions.asianCountries.map((country) => (
                                        <option key={country.code} value={country.code}>{`${country.code} (${country.name})`}</option>
                                    ))}
                                </optgroup>

                                {/* Add more optgroup sections for other regions/categories */}
                            </select>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                autoComplete="tel"
                                required
                                className="flex-1 block w-full px-3 py-2 border border-gray-700 rounded-r-md bg-gray-900 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Enter phone number"
                            />
                        </div>
                    </div>

                    {/* Agreement checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                            required
                        />
                        <label htmlFor="agree" className="ml-2 block text-sm text-green-500">
                            I agree to the <span className="text-green-600">Privacy Policy</span>
                        </label>
                    </div>

                    {/* Submit button */}
                    <div className='w-full'>
                        <button 
                            type="submit"
                            className="w-full bg-green-500 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-green-600"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                {/* Login link */}
                <div className="text-sm text-center mt-4">
                    <Link to="/login" className="text-green-500 hover:underline">Already have an account? Login</Link>
                </div>

                {/* Social login buttons */}
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

export default Register;
