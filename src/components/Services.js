import React, { useState } from 'react';
import weddingCeremony from '../images/t.PNG';
import reception from '../images/t3.PNG';
import decoration from '../images/t2.PNG';
import coordination from '../images/t4.PNG';

import corporateConference from '../images/t4.PNG';
import corporateCelebration from '../images/t4.PNG';



import NavBar from './Navbar/NavBar';

const Services = () => {
    // State Management
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeType, setActiveType] = useState('wedding');

    // Features array for the bottom section
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Swift Planning",
            description: "Quick response times and efficient planning process to meet your timeline",
            stat: "48hr Response"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            title: "Luxury Experience",
            description: "Premium venues and high-end service for an unforgettable celebration",
            stat: "5-Star Service"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            title: "Attention to Detail",
            description: "Meticulous planning and coordination of every aspect of your special day",
            stat: "100% Precision"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Personal Touch",
            description: "Dedicated team ensuring your vision comes to life exactly as imagined",
            stat: "1:1 Support"
        }
    ];

    // Services data with categories
    const services = [
        // Wedding Services
        {
            title: "Traditional Ceremony",
            image: weddingCeremony,
            description: "Classic and elegant ceremonies that honor tradition and create timeless memories.",
            type: "wedding",
            category: "ceremony",
            details: {
                price: "Starting from $3,000",
                duration: "4-6 hours",
                includes: ["Venue selection", "Ceremony planning", "Traditional elements"]
            }
        },
        {
            title: "Modern Reception",
            image: reception,
            description: "Contemporary reception designs with innovative layouts and modern aesthetics.",
            type: "wedding",
            category: "reception",
            details: {
                price: "Starting from $5,000",
                duration: "6-8 hours",
                includes: ["Modern venue", "Contemporary design", "Interactive elements"]
            }
        },
        {
            title: "Luxury Wedding Package",
            image: decoration,
            description: "All-inclusive luxury wedding experience with premium services and exclusive venues.",
            type: "wedding",
            category: "luxury",
            details: {
                price: "Starting from $15,000",
                duration: "Full day",
                includes: ["Premium venue", "Full coordination", "Luxury amenities"]
            }
        },
        {
            title: "Destination Wedding",
            image: coordination,
            description: "Exotic destination weddings with full travel and accommodation coordination.",
            type: "wedding",
            category: "full-service",
            details: {
                price: "Custom pricing",
                duration: "3-5 days",
                includes: ["Travel arrangements", "Venue coordination", "Local expertise"]
            }
        },
        // Corporate Events
        {
            title: "Business Conference",
            image: corporateConference,
            description: "Professional conference planning with state-of-the-art facilities and technical support.",
            type: "corporate",
            category: "conference",
            details: {
                price: "Starting from $10,000",
                duration: "1-3 days",
                includes: ["Venue setup", "Technical support", "Catering"]
            }
        },
        {
            title: "Corporate Gala",
            image: corporateCelebration,
            description: "Elegant corporate celebrations and award ceremonies.",
            type: "corporate",
            category: "celebration",
            details: {
                price: "Starting from $8,000",
                duration: "4-6 hours",
                includes: ["Venue decoration", "Entertainment", "Full catering"]
            }
        }
    ];

    // Category definitions
    const categories = {
        wedding: [
            { id: 'all', label: 'All Weddings' },
            { id: 'ceremony', label: 'Singapour' },
            { id: 'reception', label: 'Dolce & Gabana' },
            { id: 'luxury', label: 'Jungle' },
            { id: 'Channel Flower', label: 'Channel Flower' },

            
            { id: 'full-service', label: 'Full Service' }
        ],
        corporate: [
            { id: 'all', label: 'All Corporate' },
            { id: 'conference', label: 'Conferences' },
        ]
    };

    // Filter services based on active type and category
    const filteredServices = services.filter(service => 
        service.type === activeType && 
        (activeCategory === 'all' || service.category === activeCategory)
    );

    // Modal handlers
    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    // Handler for navigating through images in modal
    const navigateModal = (direction) => {
        const currentIndex = services.findIndex(s => s.title === selectedImage.title);
        const filteredServices = services.filter(s => s.type === activeType);
        
        if (direction === 'prev') {
            const prevIndex = (currentIndex - 1 + filteredServices.length) % filteredServices.length;
            setSelectedImage(filteredServices[prevIndex]);
        } else {
            const nextIndex = (currentIndex + 1) % filteredServices.length;
            setSelectedImage(filteredServices[nextIndex]);
        }
    };

    return (
        <>
            <NavBar />
            <div id="services" className="bg-gradient-to-b from-gray-50 to-white py-12">
                <section data-aos="zoom-in-down">
                    {/* Header Section */}
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-4xl text-gray-800 font-serif">
                            Our Professional Services
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-24 border-b-4 border-gray-400"></div>
                        </div>

                        {/* Type Switcher */}
                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                onClick={() => {
                                    setActiveType('wedding');
                                    setActiveCategory('all');
                                }}
                                className={`px-6 py-2 rounded-full font-serif transition-all duration-300 ${
                                    activeType === 'wedding' 
                                        ? 'bg-gray-800 text-white' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Weddings
                            </button>
                            <button
                                onClick={() => {
                                    setActiveType('corporate');
                                    setActiveCategory('all');
                                }}
                                className={`px-6 py-2 rounded-full font-serif transition-all duration-300 ${
                                    activeType === 'corporate' 
                                        ? 'bg-gray-800 text-white' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Corporate Events
                            </button>
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {categories[activeType].map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
                                        activeCategory === category.id
                                            ? 'bg-pink-100 text-gray-800'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredServices.map((service, index) => (
                                <div 
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
                                    onClick={() => openModal(service)}
                                >
                                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                                    <img 
                                        alt={service.title} 
                                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" 
                                        src={service.image}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                        <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                                        <p className="text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Modal */}
                {modalOpen && selectedImage && (
                    <div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300"
                        onClick={closeModal}
                    >
                        <div 
                            className="relative max-w-7xl w-full mx-auto px-4"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button 
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Content */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="md:w-2/3 relative">
                                        <img 
                                            src={selectedImage.image} 
                                            alt={selectedImage.title}
                                            className="w-full h-[400px] md:h-[600px] object-cover"
                                        />
                                    </div>

                                    {/* Details Section */}
                                    <div className="md:w-1/3 p-6 bg-gray-50">
                                        <h3 className="text-3xl font-serif text-gray-800 mb-4">
                                            {selectedImage.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            {selectedImage.description}
                                        </p>
                                        
                                        {/* Service Details */}
                                        <div className="space-y-4">
                                            <div>
                                            <h4 className="font-serif text-xl text-gray-800 mb-2">
                                                    Package Details
                                                </h4>
                                                <div className="space-y-3">
                                                    <div className="flex items-center text-gray-700">
                                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {selectedImage.details.price}
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {selectedImage.details.duration}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Included Services */}
                                            <div>
                                                <h4 className="font-serif text-xl text-gray-800 mb-2">
                                                    Included Services
                                                </h4>
                                                <ul className="space-y-2">
                                                    {selectedImage.details.includes.map((item, index) => (
                                                        <li key={index} className="flex items-center text-gray-700">
                                                            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button 
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateModal('prev');
                                }}
                            >
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateModal('next');
                                }}
                            >
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* Features Section */}
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="relative group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -z-10 group-hover:bg-pink-100 transition-colors duration-300"></div>
                                <div className="text-gray-600 mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-serif text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {feature.description}
                                </p>
                                <div className="inline-block bg-pink-50 px-4 py-2 rounded-full text-gray-600 font-semibold text-sm">
                                    {feature.stat}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="text-center mt-16">
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every event is unique, and we pride ourselves on delivering personalized experiences that exceed expectations. Our commitment to excellence ensures your special day is nothing short of perfect.
                        </p>
                        <button className="mt-8 bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                            Start Planning Your Event
                        </button>
                    </div> */}
                </section>
            </div>
        </>
    );
};

export default Services;