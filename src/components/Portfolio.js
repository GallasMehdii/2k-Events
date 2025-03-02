import React from 'react';

const Portfolio = () => {
  // const locations = [
  //   {
  //     name: "Morocco",
  //     events: "Cultural Celebrations, Destination Weddings",
  //     region: "North Africa"
  //   },
  //   {
  //     name: "Algeria",
  //     events: "Corporate Events, Traditional Festivals",
  //     region: "North Africa"
  //   },
  //   {
  //     name: "Tunisia",
  //     events: "Beach Weddings, Luxury Retreats",
  //     region: "North Africa"
  //   },
  //   {
  //     name: "Saudi Arabia",
  //     events: "Royal Weddings, Business Conferences",
  //     region: "Middle East"
  //   },
  //   {
  //     name: "Kuwait",
  //     events: "High-End Gatherings, Corporate Meetings",
  //     region: "Middle East"
  //   },
  //   {
  //     name: "Qatar",
  //     events: "Luxury Events, International Summits",
  //     region: "Middle East"
  //   },
  //   {
  //     name: "United Arab Emirates",
  //     events: "Exclusive Parties, Global Expos",
  //     region: "Middle East"
  //   }
  // ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-8 text-center z-20">
        <h1 className="text-5xl font-thin tracking-widest mb-4">GLOBAL PRESENCE</h1>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-[#8B4513] to-transparent mb-4"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="pt-40 px-4 md:px-8 max-w-8xl mx-auto">
        {/* Image Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          <div className="overflow-hidden rounded-2xl">
            <img 
              src="https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto/v1739885367/Sans-titre-2030_eektch.png" 
              alt="Portfolio Showcase" 
              className="w-full h-auto max-h-[70vh] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
      
      {/* Location List */}
      {/* <div className="relative mt-8 pb-3">
        <div className="max-w-7xl mx-auto px-1 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {locations.map((location) => (
              <div 
                key={location.name}
                className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-[#8B4513]/20 hover:border-[#8B4513]/40 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <h3 className="text-[#C4A484] text-xl mb-3 font-semibold">{location.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{location.events}</p>
                <span className="text-[#8B4513] text-xs mt-3 block uppercase tracking-wider">{location.region}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    
  );
};

export default Portfolio;
