import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Cloudinary transformation function
const transformUrl = (url, size = 'default') => {
  const baseUrl = url.split('/upload/')[0];
  const imageId = url.split('/upload/')[1];

  const transforms = {
    default: 'f_auto,q_auto,w_1200,c_fill',
    thumbnail: 'w_50,e_blur:1000,q_1,f_auto'
  };

  return `${baseUrl}/upload/${transforms[size]}/${imageId}`;
};

const Intro = () => {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const galleryImages = [
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/184-sur-355_bqysac.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/290-sur-355_l5fk2q.jpg"
    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/11-sur-355_-_1_cxkczv.jpg",

    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779868/201-sur-355_q4pad4.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779869/4-sur-355_ypzyer.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779871/323-sur-355_-_2_oykjij.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779871/134-sur-355_etciph.jpg",
    }
  ];


  // Preload images - useRef to track loaded images
  const loadedImagesRef = useRef(new Set());

  const preloadImages = (index) => {
    const nextIndex = (index + 1) % galleryImages.length;
    const prevIndex = (index - 1 + galleryImages.length) % galleryImages.length;

    [nextIndex, prevIndex].forEach((i) => {
      if (!loadedImagesRef.current.has(i)) {
        const img = new Image();
        img.src = transformUrl(galleryImages[i].src);
        img.onload = () => loadedImagesRef.current.add(i);
      }
    });
  };

  useEffect(() => {
    preloadImages(activeImage);
  }, [activeImage]);

  const handleImageChange = (direction) => {
    setIsImageLoading(true);
    const newIndex = direction === 'next'
      ? (activeImage + 1) % galleryImages.length
      : (activeImage - 1 + galleryImages.length) % galleryImages.length;
    setActiveImage(newIndex);
  };

  const handleDotClick = (index) => {
    if (index !== activeImage) {
      setIsImageLoading(true);
      setActiveImage(index);
    }
  };

  const eventDetails = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Date",
      primary: "31 January 2025"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      primary: "Four Seasons Hotel"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Guests",
      primary: "250 Persons"
    }
  ];


  return (
    <section className="bg-white py-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl  text-gray-900 tracking-tight font-serif italic ">
            Our Last Project
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Gallery */}
          <div className="lg:w-1/2 w-full relative group">
            <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl border border-gray-200 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              {/* Low Quality Placeholder */}
              <img
                src={transformUrl(galleryImages[activeImage].src, 'thumbnail')}
                alt="Loading..."
                className="absolute inset-0 w-full h-full object-cover blur-sm transition-opacity duration-500"
                style={{
                  opacity: isImageLoading ? 1 : 0
                }}
              />

              {/* High Quality Image */}
              <img
                src={transformUrl(galleryImages[activeImage].src)}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105"
                style={{
                  opacity: isImageLoading ? 0 : 1
                }}
                onLoad={() => {
                  setIsImageLoading(false);
                  loadedImagesRef.current.add(activeImage);
                }}
                loading="lazy"
                decoding="async"
                fetchPriority={activeImage === 0 ? "high" : "auto"}
              />

              {/* Gallery Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button
                  onClick={() => handleImageChange('prev')}
                  className="ml-2 sm:ml-6 p-2 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-xl transform transition-all duration-500 -translate-x-12 group-hover:translate-x-0 hover:scale-110 hover:bg-white"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => handleImageChange('next')}
                  className="mr-2 sm:mr-6 p-2 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-xl transform transition-all duration-500 translate-x-12 group-hover:translate-x-0 hover:scale-110 hover:bg-white"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Gallery Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 transition-opacity duration-500 opacity-70 group-hover:opacity-100">
                <div className="bg-white/70 backdrop-blur-sm py-2 px-3 rounded-full flex items-center space-x-2 shadow-md">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeImage ? 'bg-gray-800 w-3 h-3' : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="lg:w-1/2 w-full space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-tight animate-fade-in">
                {t('Porsche Macan Electric')}
              </h2>
              <p className="text-xl sm:text-2xl font-light text-gray-600">Reveal Event</p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
              {t('Step into the future of automotive luxury at the exclusive Porsche Macan Electric Reveal Event. This one-of-a-kind event brings together the perfect fusion of advanced technology and high-end design, showcasing the innovative features of the Porsche Macan Electric, a bold new step in the world of electric vehicles.')}
            </p>
            <div className="mt-8 transform hover:scale-[1.01] transition-all duration-500">
              <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {eventDetails.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="text-gray-600">{detail.icon}</div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-medium">{detail.label}</p>
                        <p className="text-xs sm:text-sm text-gray-700">{detail.primary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  );
};

export default Intro;