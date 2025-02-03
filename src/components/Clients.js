import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import kws from '../images/clients/golden.png';
import fours from '../images/clients/4s.png';
import radison from '../images/clients/rad.png';
import ihg from '../images/clients/ihg.png';
import dubai from '../images/clients/dubai.png';
import oberoi from '../images/clients/oberoi.png';
import madeo from '../images/clients/madeo.png';
import bv from '../images/clients/bv.png';


const clientImage = {
  height: '10rem',
  width: 'auto',
  mixBlendMode: 'colorBurn',
};

const Clients = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 20, // Add space between items
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <div className="mt-8 bg-black-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-4xl text-gray-700 uppercase font-serif italic ">Our Partner</h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-gray-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-1xl font-semibold text-gray-900">
            Some of our Partner.
          </h2>
        </div>

        <div className="p-8" data-aos="fade-in" data-aos-delay="600">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={20300} // Controls the speed of auto-scrolling
            keyBoardControl={false} // Disable keyboard controls
            transitionDuration={100} // Smoothness of transitions
            draggable={true} // Disable manual dragging for a continuous effect
            removeArrowOnDeviceType={['tablet', 'mobile']}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
              <img src={ihg} alt="client" />
            </div>
            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
              <img src={kws} alt="client" />
            </div>
            <div style={clientImage} className="overflow-hidden  flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
            <img src={radison}  alt="client" className="w-90 h-auto" />
            </div>
            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
              <img src={fours} alt="client" className="w-100 h-190" />
              
            </div>
            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
              <img src={ihg} alt="client" />
            </div>
            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
              <img src={dubai} alt="client" />
            </div>
            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
              <img src={oberoi} alt="client" />
            </div>
            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
              <img src={madeo} alt="client" className='w-100 h-50' />
            </div>
            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
              <img src={bv} alt="client" />
            </div>

          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Clients;
