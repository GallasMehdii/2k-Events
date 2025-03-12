import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';

const Blog = () => {

  const [expandedPosts, setExpandedPosts] = useState({}); // State to track expanded posts

  const blogPosts = [
    {
      title: "Curating the Extraordinary: Essential Planning Tips for Your Luxury Wedding Experience✨",
      content: `
        2K Event has proudly orchestrated the most memorable and extravagant weddings in Dubai. Our signature events showcase meticulous attention to detail and an unwavering commitment to excellence, transforming ordinary celebrations into extraordinary experiences.

        Timing is perhaps the most valuable currency in luxury wedding planning.

      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562517/VOGUE_uhw2cb.png",
      imageWidth: 727,
      imageHeight: 909,
      author: "Elizabeth Montgomery",
      date: "February 18, 2025",
      tags: ["Luxury Planning", "Wedding Design", "Elite Venues"]
    },
    {
      "title": "✨ Raving Reviews from Our Happy Clients ✨",
      "content": `
        Nothing speaks louder than the joy of our clients! 💕 From breathtaking designs to unforgettable experiences, your words inspire us to keep crafting magic. ✨
      `,
      "image": "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562515/Lebanese_Weddings_Maaloul_u4gwwv.png",
      "author": "Elite Weddings",
      "date": "March 11, 2025",
      "tags": ["Client Love", "5-Star Reviews", "Luxury Experience"]
    },

    {
      title: "Selected one of the best 15 breathtaking venues for a fairytale wedding in the UAE",
      content: `
A Fairytale Wedding with 2K Event Step into a world of elegance and romance with 2K Event at one of the UAE’s most breathtaking venues, where every detail is crafted for a magical and unforgettable celebration.      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741733526/blo_au1wpu.jpg",
      author: "Jonathan Winters",
      date: "February 10, 2025",
      tags: ["Décor Trends", "Luxury Design", "Avant-garde Aesthetics"]
    },
    {
      title: "Selected one of the best 15 breathtaking venues for a fairytale wedding in the UAE",
      content: `
A Fairytale Wedding with 2K Event Step into a world of elegance and romance with 2K Event at one of the UAE’s most breathtaking venues, where every detail is crafted for a magical and unforgettable celebration.      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741734040/a_xsaxuj.jpg",
      author: "Jonathan Winters", imageWidth: 527,
      imageHeight: 609,
      date: "February 10, 2025",
      tags: ["Décor Trends", "Luxury Design", "Avant-garde Aesthetics"]
    },
  ];

  const truncateContent = (content) => {
    const lines = content.split('\n').filter(line => line.trim() !== '');  // Split the content by lines
    const truncatedLines = lines.slice(0, 4);  // Limit to the first 4 lines
    return truncatedLines.join('\n');  // Join them back as a single string
  };


  // Function to toggle expanded state for a post
  const toggleExpand = (index) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <NavBar />

      <section
        className="relative w-full overflow-hidden"
        aria-label="Luxury Wedding Planning and Design Services"
      >
        {/* SEO-optimized hero section with schema markup */}
        <div
          className="bg-cover bg-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] w-full flex items-center justify-center"
          style={{ backgroundImage: 'url(https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611439/pic4_uq7vvg.jpg)' }}
          role="img"
          aria-label="Exquisite luxury wedding venue decoration"
        >
          {/* Enhanced overlay with luxury-focused gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75"></div>

          {/* SEO-enhanced content container */}
          <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 text-center max-w-4xl mx-auto">
            {/* Decorative element with semantic meaning */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-px bg-gold"></div>
              <span className="mx-4 text-gold text-xs tracking-[0.3em] uppercase font-light">Elite Wedding Planners</span>
              <div className="w-12 h-px bg-gold"></div>
            </div>

            {/* H1 with strategic keyword placement */}
            <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight text-white mb-8">
              <span className="block">Luxury Wedding Design</span>
              <span className="block italic mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">For Discerning Couples</span>
            </h1>

            {/* Elegant divider */}
            <div className="w-16 sm:w-24 h-px bg-gold mx-auto mb-8" aria-hidden="true"></div>

          </div>
        </div>

        {/* Decorative elements enhancing luxury feel */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-gold/30 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-gold/30 hidden lg:block" aria-hidden="true"></div>

        {/* Hidden semantic rich text for SEO */}
        <div className="sr-only">
          <h2>Premier Luxury Wedding Planning and Design Services</h2>
          <p>Specializing in high-end wedding experiences for elite clientele in destination venues worldwide. Full-service luxury wedding planning, design, and coordination for sophisticated celebrations.</p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-serif text-center mb-16 text-stone-800">Curated Insights & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow rounded-sm overflow-hidden flex flex-col h-full">
                {/* Updated Image Container */}
                <div className="relative overflow-hidden" style={{ aspectRatio: `${post.imageWidth || 4}/${post.imageHeight || 3}` }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-stone-500">{post.date}</span>
                    <h3 className="text-xl font-serif mt-2 mb-3 leading-tight">{post.title}</h3>
                    <div className="w-12 h-0.5 bg-stone-200 mb-4"></div>
                  </div>
                  <p className="text-stone-600 text-sm mb-4 flex-grow">
                    {expandedPosts[index] ? post.content : truncateContent(post.content)}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-stone-100 text-stone-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {post.content.split('\n').filter(line => line.trim() !== '').length > 4 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-sm text-stone-600 hover:text-stone-900 underline"
                      >
                        {expandedPosts[index] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-serif mb-6 text-stone-800">Curated Insights for the Discerning Couple</h2>
          <p className="text-lg text-stone-600 mb-8">
            Subscribe to receive our exclusive planning perspectives, emerging design concepts, and invitations to private events.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-6 py-4 flex-grow bg-white border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
            <button className="bg-stone-900 text-white px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-stone-800 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-4">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </div>
      </section>

      {/* Consultation Section - Refined */}
      <section className="py-24 bg-stone-900 text-white text-center">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-4xl font-serif font-light mb-6">Elevate Your Wedding Experience</h2>
          <div className="w-24 h-0.5 bg-stone-300 mx-auto mb-8 opacity-40"></div>
          <p className="text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Our team of distinguished wedding planners and design specialists curate exceptional celebrations for discerning couples.
            With an uncompromising commitment to excellence and discretion, we transform your vision into an immersive experience
            that exceeds expectations in every detail.
          </p>
          <a href="/contact" className="inline-block border border-white py-4 px-12 text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-stone-900 transition-all">
            Request Private Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;