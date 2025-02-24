import React, { useState } from 'react';
import {Heart, EyeClosed, Gem } from 'lucide-react';
import NavBar from '../components/Navbar/NavBar';

const AroundWorld = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const teamMembers = [
    {
      name: "Kammoun Khouloud",
      role: "Founder & Lead Wedding Planner",
      description: "With over 15 years of experience in curating luxury weddings, Khouloud transforms dreams into reality with elegance and precision.",
      expertise: ["Exclusive Event Curation", "Luxury Vendor Networking", "Timeless Wedding Aesthetics"],
      social: { linkedin: "#", twitter: "#" },
      experience: "15+ years crafting unforgettable luxury weddings."
    },
    {
      name: "Khawla Kammoun",
      role: "Creative Director & Design Specialist",
      description: "A master of sophisticated wedding aesthetics, Khawla brings visionary artistry to every event, ensuring elegance in every detail.",
      expertise: ["Bespoke Wedding Designs", "Floral Artistry", "Trendsetting Wedding Styles"],
      social: { linkedin: "#", twitter: "#" },
      experience: "10+ years designing high-end wedding experiences."
    }
  ];

  const premiumServices = [
    {
      icon: EyeClosed,
      title: "Event Design & Scenography",
      description: "Transforming spaces with bespoke concepts and immersive storytelling, specializing in custom set design and bespoke décor. With dynamic lighting and audiovisual integration, we craft captivating atmospheres that leave a lasting impression.",
    },
    {
      icon: Heart,
      title: "Luxury Wedding Planning",
      description: "Crafting elegant, tailor-made weddings in stunning locations worldwide. Finding the perfect setting and optimizing layouts for a seamless experience, and bringing sophistication and charm through breathtaking floral arrangements and décor.",
    },
    {
      icon: Gem,
      title: "Corporate Events & Brand Experiences",
      description: "Creating impactful product launches, gala dinners, conferences, and team-building events. Crafting visually striking stage setups for performances, speeches, and entertainment, and bringing sophistication and charm through breathtaking floral arrangements and décor."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white py-48 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-6xl font-extrabold leading-tight mb-12 tracking-wide">
            Crafting Unforgettable Experiences
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-16 opacity-80">
            2K Events Group curates exceptional events where design, technology, and artistry come together to create breathtaking and unforgettable experiences.
          </p>
          <a
            href="#services"
            className="border border-white py-3 px-8 rounded-full text-xl font-semibold uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Discover Our Expertise
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            At 2K Events Group, we craft immersive experiences where every detail matters. From scenography and refined décor to lighting design and floral artistry, we create unique settings that elevate your events. With cutting-edge sound, lighting, and audiovisual solutions, we bring your vision to life and create an unforgettable atmosphere.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="border border-white rounded-xl p-6 hover:bg-white hover:text-black transition-all duration-300">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-lg opacity-80">{member.role}</p>
                <p className="text-sm mt-4">{member.description}</p>
                <div className="mt-4 space-x-4">
                  <a href={member.social.linkedin} className="hover:opacity-70 transition-opacity">LinkedIn</a>
                  <a href={member.social.twitter} className="hover:opacity-70 transition-opacity">Twitter</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Exclusive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {premiumServices.map((service, index) => (
              <div
                key={index}
                className="border border-black rounded-xl p-8 transition-all hover:bg-black hover:text-white"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <service.icon 
                  className="w-16 h-16 mx-auto mb-6" 
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-lg opacity-80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AroundWorld;