import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Cloudinary image URLs
const images = [
  "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto/v1739218950/jungle-1_npxmvf.png",
  "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto/v1739218810/meddeb-3_uprgj4.png",
  "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto/v1739218874/tamer-hosni-3_ncpdy0.png",
  "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto/v1739219858/yacine-fatma-golden-tulip_dov0cp.png"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images (Preloaded & Animated) */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Hero Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ position: "absolute", transition: "opacity 1s ease-in-out" }}
          loading="lazy"
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          {/* Decorative Line */}
          <div className="flex justify-center items-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <div className="mx-4 text-gray-400 text-sm tracking-[0.3em] uppercase">
              Est. 2017
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>

          {/* Main Title with Enhanced Animations */}
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-wider text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Where {" "}
            <motion.span
              className="italic text-gray-300"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              Luxury
            </motion.span>
            <br />
            Meets {" "}
            <motion.span
              className="text-gray-400"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            >
              Timeless Elegance
            </motion.span>
          </motion.h1>

          {/* Description */}
          <span
            className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
          >
            Redefining celebrations with unparalleled sophistication.
          </span>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 mt-8">
            <Link
              to="/contact"
              className="relative px-10 py-4 bg-gradient-to-r from-gray-500 to-gray-900 text-white font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg hover:from-gray-600 hover:to-gray-800 animate-in"
            >
              Book Your Consultation
            </Link>

            <Link
              to="/AroundWorld"
              className="relative px-10 py-4 bg-gradient-to-r from-gray-500 to-gray-900 text-white font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg hover:from-gray-600 hover:to-gray-800 animate-in"
            >
              About Our Agency
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Hero;
