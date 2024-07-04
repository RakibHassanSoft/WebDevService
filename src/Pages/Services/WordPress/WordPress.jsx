// WebDevelopment
import React from 'react';

const WordPress = () => {
    return (
        <div className="bg-gray-900 text-white font-sans">
            {/* Hero Section */}
            <section className="relative h-[38rem] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative  text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Web Development</h1>
                    <p className="text-xl md:text-2xl mb-8">Building modern, responsive websites</p>
                    <a href="#details" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">Learn More</a>
                </div>
            </section>

         

            {/* Image/Video Section */}
            <section className="container mx-auto py-16 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Our Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Image/Video 1 */}
                    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <img src="https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0" alt="Project Image" className="h-64 w-full object-cover object-center" />
                    </div>
                    {/* Image/Video 2 */}
                    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <img src="https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0" alt="Project Image" className="h-64 w-full object-cover object-center" />
                    </div>
                    {/* Image/Video 3 */}
                    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <img src="https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0" alt="Project Image" className="h-64 w-full object-cover object-center" />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto py-16 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-800 rounded-lg shadow-md p-6">
                        <p className="text-gray-300 mb-4">"The team at MyCompany did an amazing job on our website. Highly recommend!"</p>
                        <div className="flex items-center">
                            <img src="https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0" alt="Client Photo" className="h-10 w-10 rounded-full mr-4" />
                            <div>
                                <p className="font-semibold">John Doe</p>
                                <p className="text-gray-500">CEO, Company</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="bg-gray-800 rounded-lg shadow-md p-6">
                        <p className="text-gray-300 mb-4">"Excellent service and support. Our project was completed on time and within budget."</p>
                        <div className="flex items-center">
                            <img src="https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0" alt="Client Photo" className="h-10 w-10 rounded-full mr-4" />
                            <div>
                                <p className="font-semibold">Jane Smith</p>
                                <p className="text-gray-500">Manager, AnotherCompany</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="bg-gray-800 rounded-lg shadow-md p-6">
                        <p className="text-gray-300 mb-4">"Great experience working with MyCompany. Their expertise and professionalism are unmatched."</p>
                        <div className="flex items-center">
                            <img src="https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0" alt="Client Photo" className="h-10 w-10 rounded-full mr-4" />
                            <div>
                                <p className="font-semibold">Mark Johnson</p>
                                <p className="text-gray-500">Director, TechCorp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto py-16 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {/* FAQ 1 */}
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">What is the turnaround time for a web development project?</h3>
                        <p className="text-gray-300">The turnaround time varies depending on the project scope and complexity. On average, it takes 4-6 weeks to complete a standard website.</p>
                    </div>
                    {/* FAQ 2 */}
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Do you offer support and maintenance services?</h3>
                        <p className="text-gray-300">Yes, we offer ongoing support and maintenance services to ensure your website remains up-to-date and secure.</p>
                    </div>
                </div>
            </section>

            
        </div>
    );
}

export default WordPress;
