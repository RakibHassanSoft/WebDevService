import React, { useState } from 'react';
import ServiceCard from './ServiceCard'; // Update the path as per your file structure

const ServicesPage = () => {
    const [selectedSection, setSelectedSection] = useState('');

    const serviceSections = [
        {
            id: 'webDevelopment',
            title: 'Web Development',
            services: [
                {
                    title: 'Front-end Development',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'We specialize in building modern, responsive front-end interfaces using frameworks like React, Angular, and Vue.js.'
                },
                {
                    title: 'Back-end Development',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'Our expertise includes building robust server-side applications using technologies like Node.js, Django, and Laravel.'
                },
                {
                    title: 'Back-end Development',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'Our expertise includes building robust server-side applications using technologies like Node.js, Django, and Laravel.'
                },
                {
                    title: 'Responsive Development',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'Our expertise includes building robust server-side applications using technologies like Node.js, Django, and Laravel.'
                },
            ]
        },
        {
            id: 'appDevelopment',
            title: 'App Development',
            services: [
                {
                    title: 'Native App Development',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'We develop native mobile applications for iOS and Android platforms using Swift, Kotlin, and Flutter.'
                },
                {
                    title: 'Cross-platform App Development',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'We create cross-platform applications that work seamlessly on multiple operating systems using React Native, Xamarin, etc.'
                },
                {
                    title: 'Awsom UI App Development',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'We create cross-platform applications that work seamlessly on multiple operating systems using React Native, Xamarin, etc.'
                },
            ]
        },
        {
            id: 'wordpress',
            title: 'WordPress',
            services: [
                {
                    title: 'Custom Theme Development',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'We specialize in creating bespoke WordPress themes tailored to your brand\'s unique identity and requirements.'
                },
                {
                    title: 'Plugin Customization',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'We extend WordPress functionality by customizing plugins to meet specific business needs and enhance site performance.'
                },
                {
                    title: 'Plugin Customization',
                    imageUrl: 'https://th.bing.com/th/id/R.c56b9564a522c8e9b94e9908c6e750bc?rik=eHw76u1niWPm0w&pid=ImgRaw&r=0',
                    description: 'We extend WordPress functionality by customizing plugins to meet specific business needs and enhance site performance.'
                },
            ]
        }
    ];

    const handleSectionChange = (event) => {
        setSelectedSection(event.target.value);
    };

    return (
        <div className="bg-gray-900 text-white font-sans">
            <div className="relative">


                {/* Page Content */}
                <div className="pt-16"> {/* Add padding top equal to the navbar height */}
                    <div className="container mx-auto py-12">
                        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
                        <div className="flex justify-center mb-8">
                            <select className="bg-gray-800 text-white py-2 px-4 rounded-md mr-4" onChange={handleSectionChange} value={selectedSection}>
                                <option value="">Select Section</option>
                                {serviceSections.map((section,index) => (
                                    <option key={index} value={section.id}>{section.title}</option>
                                ))}
                            </select>
                        </div>

                        {/* Service Sections */}
                        <div className="flex flex-wrap justify-center">
                            {serviceSections.map((section,index) => (
                                <section key={section.id} id={index} className={`mb-12 ${selectedSection === section.id || !selectedSection ? 'block' : 'hidden'}`}>
                                    <h2 className="text-3xl font-semibold mb-4 text-center">{section.title}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {/* Service Cards */}
                                        {section.services.map((service,inedx) => (
                                            <ServiceCard
                                                key={inedx}
                                                title={service.title}
                                                imageUrl={service.imageUrl}
                                                description={service.description}
                                            />
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* Contact or CTA Section */}
                        <div className="mt-12 text-center">
                            <p className="text-lg">Ready to discuss your project?</p>
                            <a href="#" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-4 inline-block transition duration-300">Contact Us</a>
                        </div>
                    </div>
                </div>


            </div>
            {/* <!-- Testimonials --> */}
            <section className="container mx-auto py-16 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Testimonial 1 --> */}
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
                    {/* <!-- Testimonial 2 --> */}
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
                    {/* <!-- Testimonial 3 --> */}
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
};

export default ServicesPage;
