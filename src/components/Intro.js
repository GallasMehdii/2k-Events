import React, { useState } from 'react';
import im2 from '../images/t2.PNG';

import { Link } from 'react-router-dom';

const Intro = () => {
    const galleryImages = [
        { src: 'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738680325/eyoel-kahssay--dGz-vOscYQ-unsplash_umvd23.jpg', caption: 'Elegant Ceremonies' },
        { src: im2, caption: 'Perfect Venues' },
        { src: 'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738680325/eyoel-kahssay--dGz-vOscYQ-unsplash_umvd23.jpg', caption: 'Beautiful Decorations' },
        { src: 'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738680244/kai-nachtigal-tYzZnD-b3x4-unsplash_shxxuh.jpg', caption: 'Memorable Moments' },
    ];
    const [activeImage, setActiveImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const changeImage = (newIndex) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
            setActiveImage(newIndex);
            setIsTransitioning(false);
    };

    const nextImage = () => {
        const newIndex = (activeImage + 1) % galleryImages.length;
        changeImage(newIndex);
    };

    const prevImage = () => {
        const newIndex = (activeImage - 1 + galleryImages.length) % galleryImages.length;
        changeImage(newIndex);
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12" data-aos="fade-up">
                    <div className="lg:w-1/2">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                <div className="absolute -inset-4 bg-gray-100 rounded-lg opacity-50 blur"></div>
                                <img 
                                    src={galleryImages[activeImage].src} 
                                    alt={galleryImages[activeImage].caption}
                                    className={`relative w-full h-[500px] object-contain transition-opacity duration-300 ${
                                        isTransitioning ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                {/* Navigation Arrows */}
                                <button 
                                 onClick={prevImage}
                             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-gray-200 p-2 rounded-full shadow-lg transition-all duration-300 opacity-100"
                               >
                            <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                     </svg>
                  </button>

                      <button 
                     onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-gray-200 p-2 rounded-full shadow-lg transition-all duration-300 opacity-100"
                    >
                     <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                         </svg>
                           </button>

                                {/* Caption */}
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                    <p className="text-center font-serif">{galleryImages[activeImage].caption}</p>
                                </div>
                            </div>

                            {/* Thumbnail Navigation */}
                            <div className="flex justify-center mt-4 gap-2">
                                {galleryImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === activeImage ? 'bg-gray-500 w-4' : 'bg-gray-200'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-200 rounded-full opacity-20"></div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-100 rounded-full opacity-20"></div>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="lg:w-1/2 space-y-6" data-aos="zoom-in" data-aos-delay="500">
                        <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
                            Creating Your Perfect 
                            <span className="block text-gray-600">Wedding Day</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            Transform your dream wedding into reality with our expert planning services. 
                            We handle every detail with precision and care, ensuring your special day 
                            is exactly as you've always imagined.
                        </p>
                        
                        {/* Featured Services Grid */}
                        <div className="grid grid-cols-2 gap-4 my-6">
                            {[
                                { title: 'Venue Selection', count: '50+' },
                                { title: 'Happy Couples', count: '200+' },
                                { title: 'Expert Planners', count: '15+' },
                                { title: 'Years Experience', count: '10+' }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <p className="text-gray-600 font-bold text-2xl">{item.count}</p>
                                    <p className="text-gray-600">{item.title}</p>
                                </div>
                            ))}
                        </div>

                        <Link 
                            to="/contact" 
                            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gray-600 rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Schedule Consultation
                            <svg 
                                className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;