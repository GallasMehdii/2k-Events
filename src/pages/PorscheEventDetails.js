import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";


const TEST_IMAGES = [
  'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738967682/porch1_vdyecj.jpg',
  'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738967682/porch1_vdyecj.jpg',
  'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738967682/porch1_vdyecj.jpg',
  'https://res.cloudinary.com/dx5y2bzdq/image/upload/v1738967682/porch1_vdyecj.jpg'
];

// Rest of the code remains exactly the same, just moved all imports to the top
const mediaContent = {
  photos: [
    {
      category: "Event Highlights",
      images: [
        {
          src: TEST_IMAGES[0],
          caption: "Grand Opening Ceremony",
          description: "An unforgettable evening of luxury and innovation."
        },
        {
          src: TEST_IMAGES[1],
          caption: "Exhibition Showcase",
          description: "Featuring the latest masterpieces in automotive excellence."
        },
        {
          src: TEST_IMAGES[2],
          caption: "VIP Reception",
          description: "Exclusive gathering of distinguished guests and enthusiasts."
        },
        {
          src: TEST_IMAGES[3],
          caption: "Design Presentation",
          description: "Revealing the future of automotive design and craftsmanship."
        }
      ]
    },
    {
      category: "Behind the Scenes",
      images: [
        {
          src: TEST_IMAGES[0],
          caption: "Event Setup",
          description: "Meticulous attention to every detail in preparation."
        },
        {
          src: TEST_IMAGES[1],
          caption: "Technical Installation",
          description: "State-of-the-art equipment ensuring perfect presentation."
        }
      ]
    }
  ],
  videos: [
    {
      category: "Event Coverage",
      images: [
        {
          src: TEST_IMAGES[0],
          caption: "Opening Ceremony",
          description: "Capturing the essence of luxury and innovation."
        },
        {
          src: TEST_IMAGES[1],
          caption: "Exclusive Interviews",
          description: "Insights from industry leaders and visionaries."
        }
      ]
    }
  ]
};

const MediaGallery = () => {
  const [activeCategory, setActiveCategory] = useState('photos');
  const [selectedCategory, setSelectedCategory] = useState(mediaContent.photos[0].category);
  const [focusedImage, setFocusedImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentImages = mediaContent[activeCategory]
    .find(cat => cat.category === selectedCategory)?.images || [];

  const handleImageFocus = (index) => {
    setFocusedImage(index);
  };

  const navigateImage = (direction) => {
    setIsTransitioning(true);
    const newIndex = direction === 'next'
      ? (focusedImage + 1) % currentImages.length
      : (focusedImage - 1 + currentImages.length) % currentImages.length;
    setFocusedImage(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="w-full max-w-7xl px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light tracking-wide mb-4 text-green">Event Gallery</h2>
        <div className="w-16 h-px bg-black mx-auto mb-4" />
        <p className="text-lg text-gray-600">Capturing moments of excellence</p>
      </div>

      {/* Media Type Selector */}
      <div className="flex justify-center space-x-8 mb-12">
        {['photos', 'videos'].map(type => (
          <button
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`px-8 py-3 text-lg tracking-wider transition-all border-b-2 ${
              activeCategory === type 
                ? 'border-black text-black' 
                : 'border-transparent text-gray-400 hover:text-black'
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {mediaContent[activeCategory].map(category => (
          <button
            key={category.category}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-6 py-2 text-sm tracking-wider transition-all ${
              selectedCategory === category.category
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentImages.map((item, index) => (
          <div
            key={index}
            onClick={() => handleImageFocus(index)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={item.src} 
                  alt={item.caption}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-medium mb-2">{item.caption}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen View */}
      {focusedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            onClick={() => setFocusedImage(null)}
            className="absolute top-8 right-8 text-white text-xl"
          >
            ✕
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-8 text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>

          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <img
              src={currentImages[focusedImage].src}
              alt={currentImages[focusedImage].caption}
              className="max-h-[80vh] max-w-[80vw] object-contain"
            />
            <div className="text-white text-center mt-6">
              <h3 className="text-2xl font-light mb-2">{currentImages[focusedImage].caption}</h3>
              <p className="text-gray-400">{currentImages[focusedImage].description}</p>
            </div>
          </div>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-8 text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

const PorscheEventDetails = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main className="pt-20">
        <div className="flex flex-col items-center justify-center w-full">
          <MediaGallery />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PorscheEventDetails;