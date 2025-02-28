import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [prevMediaIndex, setPrevMediaIndex] = useState(null);
  const videoRef = useRef(null);
  const [mediaLoaded, setMediaLoaded] = useState(Array(4).fill(false));

  const media = [
    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto/v1739218950/jungle-1_npxmvf.png",
    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740500376/2k_7_wfzxh4.mp4",
    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692706/2k_atmospher_gabeve.mp4",
    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740501848/2k_reveal_4_qbvr3c.mp4",
  ];

  // Function to move to the next media
  const nextMedia = useCallback(() => {
    setPrevMediaIndex(currentMediaIndex);
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  }, [currentMediaIndex]);

  // Mark a specific media item as loaded
  const handleMediaLoaded = (index) => {
    setMediaLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  useEffect(() => {
    let timer;
    const currentMedia = media[currentMediaIndex];

    // Preload the next media item
    const preloadNextIndex = (currentMediaIndex + 1) % media.length;
    const preloadMedia = media[preloadNextIndex];
    
    if (preloadMedia.endsWith(".mp4")) {
      const preloadVideo = document.createElement("video");
      preloadVideo.src = preloadMedia;
      preloadVideo.preload = "auto";
      preloadVideo.muted = true;
    } else {
      const preloadImg = new Image();
      preloadImg.src = preloadMedia;
    }

    if (currentMedia.endsWith(".mp4") && videoRef.current) {
      const video = videoRef.current;
      video.currentTime = 0;
      video.play().catch((err) => console.warn("Autoplay blocked:", err));

      const handleVideoEnd = () => nextMedia();
      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    } else {
      // For images, use a timeout
      timer = setTimeout(() => {
        nextMedia();
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [currentMediaIndex, nextMedia]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {media.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentMediaIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ 
            zIndex: index === currentMediaIndex ? 1 : 0,
            transitionProperty: "opacity",
            transitionTimingFunction: "ease-in-out"
          }}
        >
          {src.endsWith(".mp4") ? (
            <video
              key={`video-${index}`}
              ref={index === currentMediaIndex ? videoRef : null}
              src={src}
              autoPlay={index === currentMediaIndex}
              loop={false}
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onLoadedData={() => handleMediaLoaded(index)}
              style={{ opacity: mediaLoaded[index] ? 1 : 0, transition: "opacity 500ms ease-in-out" }}
            />
          ) : (
            <img
              src={src}
              alt="Hero Background"
              className="w-full h-full object-cover"
              loading="eager"
              onLoad={() => handleMediaLoaded(index)}
              style={{ opacity: mediaLoaded[index] ? 1 : 0, transition: "opacity 500ms ease-in-out" }}
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
              About Our Agency
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;