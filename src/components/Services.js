import React, { useEffect, useState } from 'react';
import weddingCeremony from '../images/t.PNG';
import reception from '../images/t3.PNG';
import decoration from '../images/t2.PNG';
import coordination from '../images/t4.PNG';
import corporateConference from '../images/t4.PNG';
import corporateCelebration from '../images/t4.PNG';
import NavBar from './Navbar/NavBar';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeType, setActiveType] = useState('wedding');
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const services = [
        {
            title: "Singapour",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226077/DSC03568_yvgxx7.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226071/DSC03534_tqnwqw.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226063/DSC03521_exkyyi.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226516/zz_i7t6bz.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155154/IMG_7427_e7qoa5.jpg",
            type: "wedding",
            category: "ceremony"
        },
        {
            title: "Dolce & Gabana",
            photos: [reception, weddingCeremony, decoration],
            thumbnailImage: reception,
            type: "wedding",
            category: "reception"
        },
        {
            title: "Jungle",
            photos: [decoration, reception, coordination],
            thumbnailImage: decoration,
            type: "wedding",
            category: "luxury"
        },
        {
            title: "Channel Flower",
            photos: [coordination, decoration, weddingCeremony],
            thumbnailImage: coordination,
            type: "wedding",
            category: "full-service"
        },
        {
            title: "Business Conference",
            photos: [corporateConference, corporateCelebration],
            thumbnailImage: corporateConference,
            type: "corporate",
            category: "conference"
        },
        {
            title: "Corporate Gala",
            photos: [corporateCelebration, corporateConference],
            thumbnailImage: corporateCelebration,
            type: "corporate",
            category: "celebration"
        },
        {
            title: "Mosaique",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155051/1-9_t4rwpc.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155035/1-2_ev59ii.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155020/1-3_brr4gk.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155003/1-8_ldhysv.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154982/1-4_pe6rov.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154854/1-6_ejxdnd.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154827/1-5_s1kklu.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154766/1-7_w2jdfb.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155051/1-9_t4rwpc.jpg",
            type: "wedding",
            category: "mosaique"
        }
    ];

    const categories = {
        wedding: [
            { id: 'all', label: 'All Weddings' },
            { id: 'ceremony', label: 'Singapour' },
            { id: 'reception', label: 'Dolce & Gabana' },
            { id: 'luxury', label: 'Jungle' },
            { id: 'mosaique', label: 'Mosaique' },
            { id: 'Channel Flower', label: 'Channel Flower' },
        ],
        corporate: [
            { id: 'all', label: 'All Corporate' },
            { id: 'conference', label: 'Conferences' },
        ]
    };

    useEffect(() => {
        if (selectedService) {
            const img = new Image();
            img.src = selectedService.photos[currentPhotoIndex];
            img.onload = () => setLoading(false);
        }
    }, [currentPhotoIndex, selectedService]);


    const filteredServices = services.filter(service =>
        service.type === activeType &&
        (activeCategory === 'all' || service.category === activeCategory)
    );

    const openModal = (service) => {
        setSelectedService(service);
        setCurrentPhotoIndex(0);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    const prevPhoto = (e) => {
        e.stopPropagation();
        setCurrentPhotoIndex((prevIndex) =>
            (prevIndex - 1 + selectedService.photos.length) % selectedService.photos.length
        );
    };

    const nextPhoto = (e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setCurrentPhotoIndex((prevIndex) =>
            (prevIndex + 1) % selectedService.photos.length
        );
    };

    const navigateModal = (direction, e) => {
        e.stopPropagation();
        const currentIndex = filteredServices.findIndex(s => s.title === selectedService.title);

        if (direction === 'prev') {
            const prevIndex = (currentIndex - 1 + filteredServices.length) % filteredServices.length;
            setSelectedService(filteredServices[prevIndex]);
            setCurrentPhotoIndex(0);
        } else {
            const nextIndex = (currentIndex + 1) % filteredServices.length;
            setSelectedService(filteredServices[nextIndex]);
            setCurrentPhotoIndex(0);
        }
    };

    return (
        <>
            <NavBar />
            <div id="services" className="bg-gradient-to-b from-gray-50 to-white py-12">
                <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-4xl text-gray-800 font-serif">
                            Our Professional Services
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-24 border-b-4 border-gray-400"></div>
                        </div>

                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                onClick={() => {
                                    setActiveType('wedding');
                                    setActiveCategory('all');
                                }}
                                className={`px-6 py-2 rounded-full font-serif transition-all duration-300 ${activeType === 'wedding'
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
                                className={`px-6 py-2 rounded-full font-serif transition-all duration-300 ${activeType === 'corporate'
                                    ? 'bg-gray-800 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Corporate Events
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {categories[activeType].map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-pink-100 text-gray-800'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="px-4 sm:px-8 md:px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                                    onClick={() => openModal(service)}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">                                        <img
                                        src={service.thumbnailImage}
                                        srcSet={`${service.thumbnailImage.replace("upload/", "upload/w_400/")} 400w, 
                                             ${service.thumbnailImage.replace("upload/", "upload/w_800/")} 800w, 
                                            ${service.thumbnailImage.replace("upload/", "upload/w_1200/")} 1200w`}
                                        sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    </div>

                                    {/* Title Container */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="font-serif text-2xl text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {modalOpen && selectedService && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-95 flex justify-center items-center"
                        onClick={closeModal}
                    >
                        <div
                            className="relative w-full h-full flex flex-col justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative max-w-7xl max-h-[85vh] p-4 flex justify-center items-center">
                                {/* Loading State */}
                                {loading && (
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                )}

                                <img
                                    src={selectedService.photos[currentPhotoIndex]}
                                    alt={`${selectedService.title} - photo ${currentPhotoIndex + 1}`}
                                    className={`max-w-full max-h-[85vh] object-contain transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
                                        }`}
                                    onLoad={() => setLoading(false)}
                                />

                                {/* Navigation Buttons */}
                                {!loading && selectedService.photos.length > 1 && (
                                    <>
                                        <button
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLoading(true);
                                                prevPhoto();
                                            }}
                                        >
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLoading(true);
                                                nextPhoto();
                                            }}
                                        >
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Thumbnails Strip */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto py-2">
                                    {selectedService.photos.map((photo, index) => (
                                        <img
                                            key={index}
                                            src={photo}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`w-16 h-16 object-cover cursor-pointer border-2 ${currentPhotoIndex === index ? 'border-white' : 'border-transparent'
                                                }`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLoading(true);
                                                setCurrentPhotoIndex(index);
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 text-white hover:text-gray-300"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </>
    );
};

export default Services;