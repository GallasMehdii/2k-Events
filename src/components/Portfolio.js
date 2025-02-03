import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const Portfolio = () => {
  // Custom Star component with golden fill
  const GoldenStar = () => (
    <Star 
      className="w-5 h-5" 
      style={{ 
        fill: '#FFD700',
        stroke: '#FFD700'
      }} 
    />
  );

  const testimonials = [
    {
      name: "EMMA & JAMES WORTHINGTON",
      location: "Paris, France",
      rating: 5,
      text: "An absolutely exquisite experience. Our Parisian celebration exceeded every expectation, with immaculate attention to detail and unparalleled sophistication.",
      eventType: "CHÂTEAU WEDDING",
      projectIcon: "✦",
      date: "SPRING 2024"
    },
    {
      name: "SOFIA & ALESSANDRO VISCONTI",
      location: "Lake Como, Italy",
      rating: 5,
      text: "Pure perfection. Our Lake Como celebration was choreographed with exceptional grace, creating moments of timeless elegance we'll treasure forever.",
      eventType: "VILLA WEDDING",
      projectIcon: "✦",
      date: "SUMMER 2024"
    },
    {
      name: "AISHA & OMAR AL RAHMAN",
      location: "Dubai, UAE",
      rating: 4,
      text: "A masterpiece of luxury and cultural refinement. Every element was curated to absolute perfection, creating an unforgettable celebration of love.",
      eventType: "PALACE WEDDING",
      projectIcon: "✦",
      date: "WINTER 2024"
    },
    {
      name: "VICTORIA & MICHAEL ROTHSCHILD",
      location: "Santorini, Greece",
      rating: 5,
      text: "An ethereal celebration that surpassed our wildest dreams. The attention to detail and level of service was nothing short of magnificent.",
      eventType: "PRIVATE ESTATE",
      projectIcon: "✦",
      date: "AUTUMN 2024"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-5 text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm tracking-[0.3em] mb-4 uppercase">Testimonials</p>
          <h2 className="text-5xl md:text-6xl font-thin tracking-wider leading-tight mb-8">
            Curated Love Stories
          </h2>
          <div className="flex justify-center items-center gap-6">
            <div className="h-[2px] w-20 bg-gray-600"></div>
            <Heart className="w-6 h-6 text-gray-400" />
            <div className="h-[2px] w-20 bg-gray-600"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/10"
            >
              {/* Luxury Icon */}
              <div className="absolute -top-5 -right-5 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center text-2xl font-light transform transition-transform duration-500 group-hover:rotate-45">
                {testimonial.projectIcon}
              </div>

              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gray-500 mb-6" />

              {/* Content */}
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <GoldenStar key={i} />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                  "{testimonial.text}"
                </p>

                <div className="pt-6 border-t border-gray-700">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>{testimonial.eventType}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          {[
            { value: "100+", label: "Luxury Weddings" },
            { value: "15+", label: "Destinations" },
            { value: "98%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-3xl p-12 text-center hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-6xl font-light text-white mb-3">{stat.value}</div>
              <div className="text-gray-400 text-lg tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;