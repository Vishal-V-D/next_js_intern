import React, { useState } from 'react';

const SocialProject = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {/* Transparent Header */}
            <header className="bg-transparent text-white p-4 fixed w-full z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">The Social Project</h1>
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                    <nav className={`md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
                        <ul className="flex space-x-4">
                            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#about" className="hover:text-gray-300">About</a></li>
                            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                            <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
                            <li><a href="#get-involved" className="hover:text-gray-300">Get Involved</a></li>
                            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                            <li><a href="#shop" className="hover:text-gray-300">Shop</a></li>
                            <li><a href="#donate" className="hover:text-gray-300">Donate</a></li>
                        </ul>
                    </nav>
                </div>
                {menuOpen && (
                    <div className="md:hidden flex flex-col space-y-2 bg-white text-black p-4 rounded-lg shadow-lg absolute w-full left-0 top-16 z-20">
                        <a href="#home" className="hover:text-gray-600">Home</a>
                        <a href="#about" className="hover:text-gray-600">About</a>
                        <a href="#projects" className="hover:text-gray-600">Projects</a>
                        <a href="#blog" className="hover:text-gray-600">Blog</a>
                        <a href="#get-involved" className="hover:text-gray-600">Get Involved</a>
                        <a href="#contact" className="hover:text-gray-600">Contact</a>
                        <a href="#shop" className="hover:text-gray-600">Shop</a>
                        <a href="#donate" className="hover:text-gray-600">Donate</a>
                    </div>
                )}
            </header>

            {/* Main Section */}
            <section className="relative bg-gradient-to-r from-purple-400 to-pink-500 text-white p-8 flex flex-col md:flex-row items-center justify-center min-h-screen pt-24">
                {/* Main Content */}
                <div className="flex flex-col items-center justify-center text-center md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-lg mb-4 md:text-xl">
                        SET THE CHANGE IN MOTION
                    </h1>
                    <p className="text-4xl font-bold mb-8 md:text-5xl lg:text-6xl">
                        Secure her path to a 
                        <br />brighter future...
                    </p>
                    <div className="flex items-center w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Join Us"
                            className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button className="p-3 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition duration-200 w-32">
                            Join Us
                        </button>
                    </div>
                </div>

                {/* Image on the Right */}
                <div className="hidden md:block md:w-1/2">
                    <img src="/child.png" alt="A child receiving support" className="w-full h-auto object-cover rounded-lg" />
                </div>

                {/* Mobile Image Display */}
                <div className="md:hidden w-full mt-4">
                    <img src="/child.png" alt="A child receiving support" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </section>

            {/* Empowering Communities Section */}
            <section className="bg-white text-gray-800 p-8 md:p-16">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">EMPOWERING COMMUNITIES: OVERCOMING THE CYCLE OF POVERTY AND INEQUALITY</h2>
                    <p className="mb-4">
                        In a world where poverty and inequality continue to hinder progress for millions, countless individuals and families are left without the resources they need to thrive. At The Social Project, we are committed to changing this narrative by empowering the most vulnerable members of our society—including children, youth, women, and marginalized communities—through education, mentorship, health camps, and social initiatives.
                    </p>
                    <p className="mb-4">
                        Our mission is to provide essential support across various areas:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Education:</strong> Offering quality education and life skills to children and youth, ensuring they have the tools to build a brighter future.
                        </li>
                        <li>
                            <strong>Women Empowerment:</strong> Empowering women through skills training and support programs, helping them achieve financial independence and improved quality of life.
                        </li>
                        <li>
                            <strong>Health and Awareness:</strong> Conducting health camps, awareness programs, and environmental initiatives that promote well-being and sustainable living.
                        </li>
                        <li>
                            <strong>Community Support:</strong> Collaborating with local organizations and social groups to foster growth and resilience within communities.
                        </li>
                    </ul>
                    <p className="mb-4">
                        Join us in our mission to uplift and empower communities across our reach. Your support is crucial in expanding our initiatives and ensuring that every individual has access to the opportunities they deserve.
                    </p>
                    <p className="font-bold mb-4">
                        Together, we can make a lasting impact—transforming lives and creating a world where everyone has the chance to succeed. Let’s work together to build a better, brighter future for all.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#donate"
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Donate
                        </a>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="bg-gray-100 text-gray-800 p-8 md:p-16">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">OUR INITIATIVES</h2>

                    {/* Education Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">EDUCATION</h3>
                        <p className="mb-4">
                            Our Mission in Education: We are dedicated to providing a strong educational foundation that fosters critical thinking, instills core values, and nurtures creativity alongside essential knowledge and skills. Our goal is to empower individuals to become compassionate, informed, and responsible members of society, contributing meaningfully to its growth and development.
                        </p>
                    </div>

                    {/* Awareness Programs Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">AWARENESS PROGRAMS</h3>
                        <p className="mb-4">
                            Our awareness efforts are dedicated to promoting preventive measures and empowering individuals. By encouraging proactive solutions, we aim to build stronger and healthier communities.
                        </p>
                    </div>

                    {/* Medical Camps Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">MEDICAL CAMPS</h3>
                        <p className="mb-4">
                            Our medical camps play a vital role in bridging the healthcare gap by delivering essential health services and educational resources to underserved populations. We aim to ensure that every individual has access to vital health information and services.
                        </p>
                    </div>

                    {/* Environmental Awareness Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">ENVIRONMENTAL AWARENESS</h3>
                        <p className="mb-4">
                            We understand that sustainable development is key to long-term solutions. Through environmental awareness campaigns, we strive to educate communities about sustainable practices and conservation efforts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-white text-gray-800 p-8 md:p-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <p className="mb-4">
                        Stay updated with our latest initiatives and community events. Enter your email below to join our newsletter and be part of our mission.
                    </p>
                    <div className="flex items-center justify-center mt-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-64 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button className="p-3 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white p-8 md:p-16">
                <div className="container mx-auto text-center">
                    <p className="mb-4">&copy; 2024 The Social Project. All rights reserved.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                        <a href="#" className="hover:text-gray-400">Contact Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SocialProject;
