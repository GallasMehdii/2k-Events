import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

// Import logos
import kws from '../images/clients/golden.png';
import fours from '../images/clients/4s.png';
import radison from '../images/clients/rad.png';
import ihg from '../images/clients/ihg.png';
import dubai from '../images/clients/dubai.png';
import oberoi from '../images/clients/oberoi.png';
import madeo from '../images/clients/madeo.png';
import bv from '../images/clients/bv.png';

const Clients = () => {
  const [hoveredClient, setHoveredClient] = useState(null);

  const clientLogos = [
    { 
      src: ihg, 
      alt: 'IHG', 
      description: 'Intercontinental Hotels Group - Global hospitality leader' 
    },
    { 
      src: kws, 
      alt: 'Golden', 
      description: 'Golden Hospitality Network - Premium hospitality solutions' 
    },
    { 
      src: radison, 
      alt: 'Radisson', 
      description: 'Radisson Hotel Group - International hotel chain' 
    },
    { 
      src: fours, 
      alt: '4S', 
      description: '4 Seasons Hotels - Luxury hospitality brand' 
    },
    { 
      src: dubai, 
      alt: 'Dubai', 
      description: 'Dubai Tourism - Leading global destination' 
    },
    { 
      src: oberoi, 
      alt: 'Oberoi', 
      description: 'Oberoi Hotels & Resorts - Luxury hospitality' 
    },
    { 
      src: madeo, 
      alt: 'Madeo', 
      description: 'Madeo Hospitality - Innovative hotel management' 
    },
    { 
      src: bv, 
      alt: 'BV', 
      description: 'BV Hospitality Group - Global hospitality solutions' 
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl italic text-gray-800 uppercase font-serif mb-6 "
        >
          Our Strategic Partners
        </motion.h2>
        
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          renderDotsOutside={true}
          customTransition="transform 500ms ease-in-out"
          containerClass="w-full px-4"
          itemClass="px-2"
        >
          {clientLogos.map((logo, index) => (
            <motion.div 
              key={index}
              className="relative group"
              onHoverStart={() => setHoveredClient(index)}
              onHoverEnd={() => setHoveredClient(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center">
                <div className={`
                  w-48 h-32 flex items-center justify-center 
                  ${hoveredClient === index ? 'opacity-30' : 'opacity-70'}
                  transition-all duration-300 ease-in-out
                  hover:opacity-100 hover:shadow-2xl rounded-lg
                `}>
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                {hoveredClient === index && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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