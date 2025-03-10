import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';

const Blog = () => {

  const [expandedPosts, setExpandedPosts] = useState({}); // State to track expanded posts

  const blogPosts = [
    {
      title: "Curating the Extraordinary: Essential Planning Tips for Your Luxury Wedding Experience",
      content: `
        2K Event has proudly orchestrated the most memorable and extravagant weddings in Dubai. Our signature events showcase meticulous attention to detail and an unwavering commitment to excellence, transforming ordinary celebrations into extraordinary experiences.

        Timing is perhaps the most valuable currency in luxury wedding planning. We recommend securing your premier venue and most sought-after vendors at least 12-18 months in advance. This foresight not only ensures availability but provides ample time for creating custom elements that reflect your personal narrative and aesthetic sensibilities.

        For couples seeking the pinnacle of wedding experiences, consider incorporating rare and unexpected elements—private string quartets performing contemporary arrangements, custom fragrance development to scent your celebration spaces, or commissioned artistic installations that serve as both décor and lasting mementos of your exceptional day.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562517/VOGUE_uhw2cb.png",
      imageWidth: 727,
      imageHeight: 909,
      author: "Elizabeth Montgomery",
      date: "February 18, 2025",
      tags: ["Luxury Planning", "Wedding Design", "Elite Venues"]
    },
    {
      title: "The Hauteur of Celebration: 2025's Most Coveted Wedding Décor Concepts",
      content: `
        As we embrace the sophisticated aesthetics of 2025, the realm of luxury wedding décor is experiencing a renaissance of artistic expression and technical innovation. This season transcends fleeting trends, instead establishing new paradigms of elegance that will influence celebration design for years to come.

        Tablescapes now function as tactile galleries, where guests experience layers of sensory details through custom-developed linens featuring hand-embroidered elements, place settings that incorporate multiple metals in proprietary finishes, and statement chargers commissioned from celebrated ceramic artists. Each element contributes to an overarching textural narrative that complements your celebration's architectural context.

        The paradigm has shifted from decoration to curation—every element thoughtfully selected and positioned to contribute to a cohesive design narrative that feels both timeless and unmistakably contemporary.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1741562515/Lebanese_Weddings_Maaloul_u4gwwv.png",
      author: "Jonathan Winters",
      
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

      {/* Blog Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: 'url(/images/luxury-wedding-hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-12 text-center max-w-3xl py">
          <h1 className="text-6xl font-serif font-light tracking-wide mb-6 text-white ">The Art of Exceptional Celebrations</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-white font-light leading-relaxed">
            Immerse yourself in a curated exploration of luxury wedding design, planning expertise, and avant-garde celebration concepts for the discerning couple.
          </p>
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