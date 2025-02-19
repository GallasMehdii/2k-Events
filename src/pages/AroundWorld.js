import React, { useState } from 'react';
import { Users, Award, Building, Globe, Heart, Star, CheckCircle, MapPin } from 'lucide-react';
import NavBar from '../components/Navbar/NavBar';

const TeamPage = () => {
  const [hoveredService, setHoveredService] = useState(null);

  // Team Members Data (more detailed info)
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Wedding Planner",
      description: "Sarah is an expert at curating bespoke weddings. With over 15 years of experience in the industry, her expertise is rooted in providing a highly personalized and unforgettable experience for every couple.",
      expertise: ["Event Coordination", "Creative Design", "Vendor Relations", "Timeless Elegance"],
      education: "BA in Event Management, University of California",
      certifications: ["Certified Wedding Planner", "Luxury Event Expert"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      experience: "15+ years of experience in wedding planning and event management."
    },
    {
      name: "Michael Chen",
      role: "Creative Director & Design Specialist",
      description: "Michael brings his artistic touch to every wedding he works on, ensuring that each design reflects the couple's vision. His creativity has been featured in top wedding magazines and blogs.",
      expertise: ["Floral & Thematic Design", "Creative Direction", "Aesthetic Elegance"],
      education: "MFA, Rhode Island School of Design",
      certifications: ["Certified Floral Designer", "Luxury Wedding Decor Specialist"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      experience: "10+ years designing for high-profile weddings and luxury events."
    },
    {
      name: "Emma Rodriguez",
      role: "Logistics & Coordination Specialist",
      description: "Emma ensures that every wedding runs without a hitch, coordinating all logistics and vendor schedules to guarantee a seamless experience from start to finish.",
      expertise: ["Timelines", "Vendor Coordination", "Guest Experience", "Wedding Day Excellence"],
      education: "MS in Hospitality Management, Cornell University",
      certifications: ["Certified Event Specialist", "Certified Wedding Coordinator"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      experience: "8+ years in managing logistics for luxury weddings and events."
    },
    {
      name: "David Williams",
      role: "Client Relations & Marketing Director",
      description: "David ensures that our clients' experience is flawless from the moment they reach out. He works closely with the team to ensure that marketing aligns with client expectations.",
      expertise: ["Client Engagement", "Brand Strategy", "Digital Marketing", "Relationship Building"],
      education: "BS Marketing, Northwestern University",
      certifications: ["Certified Digital Marketing Professional", "Client Relationship Expert"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      experience: "5+ years in digital marketing and client relations within the luxury event space."
    }
  ];

  // Premium Services Data (more detailed)
  const premiumServices = [
    {
      icon: Building,
      title: "Tailored Wedding Packages",
      description: "We offer fully customized wedding packages that include everything from venue selection to post-wedding follow-ups. Every detail is tailored to your preferences, ensuring that your wedding is unique and personal.",
      additionalInfo: "Each package includes planning meetings, day-of coordination, vendor referrals, and more."
    },
    {
      icon: Globe,
      title: "Destination Weddings",
      description: "Whether you're dreaming of a beachside ceremony or a romantic European getaway, we specialize in destination weddings and will coordinate everything from travel to venue selection and local vendor management.",
      additionalInfo: "Our services include travel arrangements for you and your guests, location scouting, and vendor partnerships in your destination."
    },
    {
      icon: Heart,
      title: "Luxury Wedding Planning",
      description: "Luxury is at the heart of everything we do. From choosing premium venues to selecting the finest vendors, we ensure every element of your wedding is top-tier.",
      additionalInfo: "Includes exclusive access to luxury vendors, high-end decor options, and premium guest experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-48 overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-black"></div>
        <div className="container mx-auto px-6 relative text-center">
          <h1 className="text-6xl font-extrabold leading-tight mb-12 tracking-wide animate__animated animate__fadeIn animate__delay-1s">
            Crafting Unforgettable Moments, One Wedding at a Time
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-16 animate__animated animate__fadeIn animate__delay-2s">
            With impeccable attention to detail, we bring your dream wedding to life. Whether it's an intimate gathering or a grand celebration, we make it unforgettable.
          </p>
          <a
            href="#services"
            className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-full text-xl font-semibold uppercase transform hover:bg-white hover:text-black transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">About Our Wedding Planning Agency</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-2s">
            At Wedding Bliss, we believe that every couple deserves a celebration that reflects their love story. Our team is dedicated to creating unforgettable experiences by blending creativity, luxury, and meticulous planning. From stunning floral arrangements to personalized itineraries, we handle every detail to ensure a seamless and beautiful event. Whether you're planning an intimate garden ceremony or a grand ballroom wedding, we're here to make your vision come true.
          </p>
          <div className="text-center">
            <a
              href="#contact"
              className="bg-gray-700 text-white py-3 px-8 rounded-full text-lg font-semibold uppercase transform hover:bg-gray-600 transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300">
                <img
                  src={`https://placeimg.com/300/300/people?${index}`}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
                <p className="text-sm text-gray-300 mt-4">{member.experience}</p>
                <p className="text-sm text-gray-300 mt-4">{member.description}</p>
                <div className="mt-4">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
                    LinkedIn
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500 ml-4">
                    Twitter
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {premiumServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl shadow-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-2s"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <service.icon className="w-16 h-16 mx-auto mb-6 text-white" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-lg text-gray-300 mb-4">{service.description}</p>
                <p className="text-sm text-gray-400">{service.additionalInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
