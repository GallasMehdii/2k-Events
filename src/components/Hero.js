import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "./Navbar/NavBar";

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRefs = useRef([]);
  const [mediaLoaded, setMediaLoaded] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Configure refs array
  const setVideoRef = (element, index) => {
    videoRefs.current[index] = element;
  };

  const media = [
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/video/upload/q_auto,f_auto,c_limit/v1740500376/2k_7_wfzxh4.mp4",
      type: "video",
      poster: "https://res.cloudinary.com/dx5y2bzdq/video/upload/q_auto,f_auto,c_limit,so_0/v1740500376/2k_7_wfzxh4.jpg"
    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/video/upload/q_auto,f_auto,c_limit/v1740762132/Morroco_Caroussel_wb9f10.mp4",
      type: "video",
      poster: "https://res.cloudinary.com/dx5y2bzdq/video/upload/q_auto,f_auto,c_limit,so_0/v1740762132/Morroco_Caroussel_wb9f10.jpg"
    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/video/upload/q_auto,f_auto,c_limit/v1740692706/2k_atmospher_gabeve.mp4",
      type: "video",
      poster: "https://res.cloudinary.com/dx5y2bzdq/video/upload/q_auto,f_auto,c_limit,so_0/v1740692706/2k_atmospher_gabeve.jpg"
    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/video/upload/q_auto,f_auto,c_limit/v1740501848/2k_reveal_4_qbvr3c.mp4",
      type: "video",
      poster: "https://res.cloudinary.com/dx5y2bzdq/video/upload/q_auto,f_auto,c_limit,so_0/v1740501848/2k_reveal_4_qbvr3c.jpg"
    },
  ];

  // Function to move to the next media
  const nextMedia = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  }, [media.length]);

  // Mark a specific media item as loaded
  const handleMediaLoaded = (index) => {
    setMediaLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Preload the next two items
  useEffect(() => {
    const preloadIndices = [
      (currentMediaIndex + 1) % media.length,
      (currentMediaIndex + 2) % media.length
    ];

    preloadIndices.forEach(index => {
      const item = media[index];
      if (item.type === "video") {
        // Preload poster image
        if (item.poster) {
          const img = new Image();
          img.src = item.poster;
        }
        
        // Preload video with a low priority
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = item.src;
        link.setAttribute('fetchpriority', 'low');
        document.head.appendChild(link);
        
        // Clean up
        return () => document.head.removeChild(link);
      } else if (item.type === "image") {
        const img = new Image();
        img.src = item.src;
      }
    });
  }, [currentMediaIndex, media]);

  // Handle current media playback
  useEffect(() => {
    let timer;
    const currentItem = media[currentMediaIndex];

    if (currentItem.type === "video") {
      const video = videoRefs.current[currentMediaIndex];
      if (video) {
        // Reset and play current video
        video.currentTime = 0;
        video.muted = true;
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn("Autoplay prevented:", error);
          });
        }

        // Move to next media when video ends
        const handleVideoEnd = () => nextMedia();
        video.addEventListener("ended", handleVideoEnd);
        return () => video.removeEventListener("ended", handleVideoEnd);
      }
    } else {
      // For images, use a timeout
      timer = setTimeout(nextMedia, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentMediaIndex, nextMedia, media]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <NavBar />  {/* Place NavBar here if you want it inside the Hero component */}
      
      {/* Media and hero content */}
      {media.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            index === currentMediaIndex && !isTransitioning ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {item.type === "video" ? (
            <video
              ref={el => setVideoRef(el, index)}
              src={item.src}
              poster={item.poster}
              autoPlay={index === currentMediaIndex}
              loop={false}
              muted
              playsInline
              preload={index === currentMediaIndex ? "auto" : "none"}
              className="w-full h-full object-cover"
              onLoadedData={() => handleMediaLoaded(index)}
              style={{ 
                opacity: mediaLoaded[index] ? 1 : 0, 
                transition: "opacity 500ms ease-in-out" 
              }}
            />
          ) : (
            <img
              src={item.src}
              alt="Hero Background"
              className="w-full h-full object-cover"
              loading={index <= 1 ? "eager" : "lazy"}
              onLoad={() => handleMediaLoaded(index)}
              style={{ 
                opacity: mediaLoaded[index] ? 1 : 0, 
                transition: "opacity 500ms ease-in-out" 
              }}
            />
          )}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <div className="flex justify-center items-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <div className="mx-4 text-gray-400 text-sm tracking-[0.3em] uppercase">
              Est. 2017
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-wider text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Where{" "}
            <motion.span
              className="italic text-gray-300"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              Luxury
            </motion.span>
            <br />
            Meets{" "}
            <motion.span
              className="text-gray-400"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            >
              Timeless Elegance
            </motion.span>
          </motion.h1>

          <span className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Redefining celebrations with unparalleled sophistication.
          </span>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 mt-8">
            <Link
              to="/contact"
              className="relative px-10 py-4 bg-gradient-to-r from-gray-600 to-white-900 text-white font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg hover:from-gray-600 hover:to-gray-800 animate-in"
            >
              Book Your Consultation
            </Link>

            <Link
              to="/AroundWorld"
              className="relative px-10 py-4 bg-gradient-to-r from-gray-600 to-white-900 text-white font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg hover:from-gray-600 hover:to-gray-800 animate-in"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;