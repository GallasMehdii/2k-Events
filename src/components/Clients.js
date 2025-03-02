import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import { Diamond, Info, PartyPopper, Star, WandSparkles } from 'lucide-react';

// Import logos
import kws from '../images/clients/golden.png';
import fours from '../images/clients/4s.png';
import radison from '../images/clients/rad.png';
import ihg from '../images/clients/ihg.png';
import Porchelogo from '../images/clients/Porchelogo.jpg';
import dubai from '../images/clients/dubai.png';
import oberoi from '../images/clients/oberoi.png';
import madeo from '../images/clients/madeo.png';
import bv from '../images/clients/bv.png';
import interc from '../images/clients/Interc.png';

const Clients = () => {
  const [hoveredClient, setHoveredClient] = useState(null);

  const clientLogos = [
    { src: ihg, alt: 'IHG', description: 'Intercontinental Hotels Group - Global hospitality leader' },
    { src: Porchelogo, alt: 'Porsche', description: 'Porsche - Luxury car manufacturer' },
    { src: kws, alt: 'Golden', description: 'Golden Hospitality Network - Premium hospitality solutions' },
    { src: radison, alt: 'Radisson', description: 'Radisson Hotel Group - International hotel chain' },
    { src: fours, alt: '4S', description: '4 Seasons Hotels - Luxury hospitality brand' },
    { src: dubai, alt: 'Dubai', description: 'Dubai Tourism - Leading global destination' },
    { src: oberoi, alt: 'Oberoi', description: 'Oberoi Hotels & Resorts - Luxury hospitality' },
    { src: madeo, alt: 'Madeo', description: 'Madeo Hospitality - Innovative hotel management' },
    { src: bv, alt: 'BV', description: 'BV Hospitality Group - Global hospitality solutions' },
    { src: interc, alt: 'Interc', description: 'Intercontinental Hotels Group - Global hospitality leader' }
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 overflow-hidden">
      {/* Luxury Introduction Section */}
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-1 mt-3 mb-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 font-bold mb-6">
            Elevating Dreams into Reality
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 italic font-serif font-medium">
            "Luxury is in every detail, and perfection is our signature."
          </p>
          <div className="h-px w-28 bg-gray-400 mx-auto mt-8"></div>
        </div>

        <div className="prose prose-xl mx-auto text-center mb-12 max-w-4xl">
          <p className="text-gray-700 leading-relaxed font-medium">
            At <span className="font-bold text-gray-900">2K Events</span>, we redefine elegance by transforming your vision into an unforgettable masterpiece. With an unwavering commitment to excellence, we create exquisite experiences that reflect your unique story.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mt-6">
            With over a decade of expertise in luxury event planning, we craft bespoke celebrations worldwide—where every detail is curated to perfection. From intimate gatherings to grand affairs, our specialists orchestrate each event with refined sophistication and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: PartyPopper, title: "Unmatched Attention to Detail", text: "Every detail crafted with precision for unforgettable moments." },
            { icon: WandSparkles, title: "Innovative Design", text: "Blending sophistication and function to transform experiences." },
            { icon: Diamond, title: "Timeless Elegance", text: "Classic designs that stand the test of time." },
            { icon: Star, title: "Unforgettable Memories", text: "Creating cherished memories with every event." }
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-200 transform transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:rotate-2 hover:-translate-y-2 text-center animate-fadeIn overflow-hidden"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"></div>
              <div className="flex justify-center mb-6">
                <item.icon className="w-14 h-14 text-[#C19A6B] transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-gray-800 font-semibold mb-3 relative">{item.title}</h3>
              <p className="text-gray-700 font-medium leading-relaxed relative">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl italic text-gray-800 uppercase font-serif mb-6"
        >
          Our Strategic Partners
        </motion.h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          transitionDuration={700}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          renderDotsOutside={true}
          customTransition="transform 700ms ease-in-out"
          containerClass="w-full px-4"
          itemClass="px-2"
          draggable={true}
          centerMode={true}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="relative group"
              onHoverStart={() => setHoveredClient(index)}
              onHoverEnd={() => setHoveredClient(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-48 h-32 flex items-center justify-center rounded-lg shadow-md bg-white overflow-hidden"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>

                {hoveredClient === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full mt-4 z-10 bg-white shadow-lg p-4 rounded-lg w-64 text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Info className="mr-2 text-blue-500" size={20} />
                      <span className="font-bold text-gray-700">{logo.alt}</span>
                    </div>
                    <p className="text-sm text-gray-600">{logo.description}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Clients;
