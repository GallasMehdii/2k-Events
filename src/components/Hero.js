import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

// Cloudinary image URLs
const weddingHeroImg = 'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738053632/cld-sample-2.jpg';
const consultation = 'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738582728/ttaa_bkfmgz.png';

const Hero = () => {
    const images = [weddingHeroImg, consultation];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsFading(false);
            }, 1200);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Navbar */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-105 transition-all duration-[1200ms]">
                {/* Animated Background Image */}
                <div
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transform scale-105 transition-all duration-[1200ms] ${
                        isFading ? 'opacity-0 scale-110' : 'opacity-100 scale-105'
                    }`}
                    style={{
                        backgroundImage: `url(${images[currentImageIndex]})`,
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

                {/* Hero Content */}
                <div className="relative z-20 flex items-center justify-center h-full">
                    <div className="absolute top-0 left-0 w-full z-10">
                        <NavBar />
                    </div>
                    <div className="container mx-auto px-4 text-center max-w-5xl">
                        {/* Decorative Line */}
                        <div className="flex justify-center items-center mb-8">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                            <div className="mx-4 text-gray-400 text-sm tracking-[0.3em] uppercase">Est. 2025</div>
                            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-wider text-white">
                            Where{' '}
                            <span className="italic text-gray-300">Luxury</span>
                            <br />
                            Meets{' '}
                            <span className="text-gray-400">Timeless Elegance</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Redefining celebrations with unparalleled sophistication.
                            Immerse yourself in an experience where every detail
                            reflects the pinnacle of refined excellence.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                to="/contact"
                                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20"
                            >
                                <span className="relative z-10 text-white font-medium tracking-wider">
                                    Book Your Consultation
                                </span>
                                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-gradient-to-b from-white/20 to-transparent transition-transform duration-300" />
                            </Link>

                            <Link
                                to="/AroundWorld"
                                className="group relative px-8 py-4 border border-gray-400/30 rounded-full overflow-hidden transition-all duration-300 hover:border-gray-400/50"
                            >
                                <span className="relative z-10 text-white-300 font-medium tracking-wider group-hover:text-white transition-colors duration-300">
                                    Explore Services
                                </span>
                                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-gradient-to-b from-white/10 to-transparent transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
