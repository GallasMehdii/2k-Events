import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import weddingHeroImg from "../images/t5.PNG";
import consultation from "../images/t5.PNG";
import dubai from '../images/t5.PNG';
import morocco from '../images/t.PNG';
import algeria from'../images/t.PNG';

const AroundWorld = () => {
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
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <NavBar />
      </div>

      {/* Background Swiper */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {[weddingHeroImg, consultation].map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[1500ms] scale-105"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wide text-white mb-6">
          Discover{" "}
          <span className="italic text-gray-300">Luxury Weddings</span> Around
          the World
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-3xl leading-relaxed">
          From the deserts of Dubai to the vibrant colors of Morocco, immerse
          yourself in a world of exquisite wedding experiences.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/contact"
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20"
          >
            <span className="relative z-10 text-white font-medium tracking-wider">
              Book Your Consultation
            </span>
          </Link>
          <Link
            to="/AroundWorld"
            className="group relative px-8 py-4 border border-gray-400/30 rounded-full overflow-hidden transition-all duration-300 hover:border-gray-400/50"
          >
            <span className="relative z-10 text-white-300 font-medium tracking-wider group-hover:text-white transition-colors duration-300">
              Explore Services
            </span>
          </Link>
        </div>
      </div>

      {/* 🌍 Worldwide Showcase Section */}
      <div className="relative z-30 mt-20">
        <h2 className="text-4xl text-center text-white font-bold mb-10">
          Our Work Around The Globe
        </h2>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides
          loop
          autoplay={{ delay: 4000 }}
          className="max-w-6xl mx-auto"
        >
          {[{ city: "Dubai", img: dubai }, { city: "Morocco", img: morocco }, { city: "Algeria", img: algeria }].map(
            (place, index) => (
              <SwiperSlide key={index} className="relative group">
                <div
                  className="w-full h-96 bg-cover bg-center rounded-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${place.img})` }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                    <h3 className="text-white text-2xl font-semibold">
                      {place.city}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default AroundWorld;
