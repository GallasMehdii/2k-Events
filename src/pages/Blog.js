import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const Blog = () => {
  const blogPosts = [
    {
      title: "Curating the Extraordinary: Essential Planning Tips for Your Luxury Wedding Experience",
      content: `
        The art of orchestrating an exceptional wedding celebration requires meticulous attention to detail and an unwavering commitment to excellence. Far beyond the ordinary planning process, a truly luxurious wedding demands a harmonious blend of sophisticated aesthetics, personalized experiences, and flawless execution.

        Our seasoned luxury wedding consultants have compiled their most coveted insights to guide you through this transformative journey. Begin by envisioning the essence of your celebration—whether it manifests as a grand affair in a historic European château, an intimate gathering in a private Santorini villa overlooking the Aegean, or a sophisticated metropolitan celebration in a landmark venue.

        The foundation of an extraordinary wedding experience lies in assembling an elite team of artisans and specialists who understand your distinctive vision. From renowned floral designers who create architectural installations that transcend conventional arrangements to master chefs who craft bespoke culinary journeys, each collaborator should elevate your celebration to unprecedented heights.

        Timing is perhaps the most valuable currency in luxury wedding planning. We recommend securing your premier venue and most sought-after vendors at least 12-18 months in advance. This foresight not only ensures availability but provides ample time for creating custom elements that reflect your personal narrative and aesthetic sensibilities.

        For couples seeking the pinnacle of wedding experiences, consider incorporating rare and unexpected elements—private string quartets performing contemporary arrangements, custom fragrance development to scent your celebration spaces, or commissioned artistic installations that serve as both décor and lasting mementos of your exceptional day.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1740483922/-99__aogrbz.jpg",
      author: "Elizabeth Montgomery",
      date: "February 18, 2025",
      tags: ["Luxury Planning", "Wedding Design", "Elite Venues"]
    },
    {
      title: "The Hauteur of Celebration: 2025's Most Coveted Wedding Décor Concepts",
      content: `
        As we embrace the sophisticated aesthetics of 2025, the realm of luxury wedding décor is experiencing a renaissance of artistic expression and technical innovation. This season transcends fleeting trends, instead establishing new paradigms of elegance that will influence celebration design for years to come.

        Prepare to witness the emergence of "architectural botanicals"—where master floral artists create structural installations that transform celebration spaces into immersive environments. These botanical sculptures incorporate rare orchid varieties, imported garden roses, and preserved elements arranged with mathematical precision to create visual experiences that appear to defy natural limitations.

        The lighting narrative has evolved beyond functional illumination to become a crucial storytelling medium. Custom projection mapping transforms blank architectural canvases into animated tapestries that evolve throughout your celebration. New-generation crystal installations incorporate programmable LED elements that subtly shift in intensity and color temperature to mirror the emotional journey of your celebration timeline.

        Color palettes have matured into sophisticated chromatic conversations. Expect to see tonal explorations replacing traditional color schemes—variations of a single hue creating depth through subtle gradations, or unexpected color pairings like burnished gold with deep marine blue creating tension and visual interest. These nuanced approaches signal a departure from predictable aesthetics toward a more curatorial approach to color theory.

        Tablescapes now function as tactile galleries, where guests experience layers of sensory details through custom-developed linens featuring hand-embroidered elements, place settings that incorporate multiple metals in proprietary finishes, and statement chargers commissioned from celebrated ceramic artists. Each element contributes to an overarching textural narrative that complements your celebration's architectural context.

        The paradigm has shifted from decoration to curation—every element thoughtfully selected and positioned to contribute to a cohesive design narrative that feels both timeless and unmistakably contemporary.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1740352364/--42_rkvyxa.jpg",
      author: "Jonathan Winters",
      date: "February 10, 2025",
      tags: ["Décor Trends", "Luxury Design", "Avant-garde Aesthetics"]
    },
    {
      title: "Beyond Destination: Crafting Transcendent Wedding Experiences in the World's Most Exclusive Locales",
      content: `
        The concept of destination weddings has evolved dramatically for the discerning couple, transcending mere location selection to become a comprehensive curation of experiences that celebrate both relationship and place. Today's luxury destination celebrations are immersive cultural journeys that unfold over several days, creating a narrative tapestry that guests will reminisce about for decades to come.

        The selection process begins not with venues but with identifying destinations that resonate with your personal history or aspirations. Consider landscapes that provide natural grandeur—the dramatic fjords of New Zealand, the architectural splendor of a private Moroccan palace, or the untouched beauty of a Swedish archipelago accessible only by private yacht. These exceptional settings become not merely backdrops but active participants in your celebration story.

        Once your destination is secured, the art of guest experience curation becomes paramount. This extends beyond logistical considerations to creating a progressive revelation of place. Imagine welcoming gatherings in hidden local venues inaccessible to typical visitors, custom-guided explorations led by cultural luminaries, or surprise experiences that showcase the destination's most captivating elements.

        Logistical orchestration requires partners with unparalleled local knowledge and global resources. Our network of in-country specialists navigates complex regulations, secures exclusive access to restricted venues, and creates contingency plans that remain invisible to guests. This infrastructure of excellence ensures that even the most ambitious celebration unfolds with apparent effortlessness.

        The modern luxury destination wedding transcends traditional hospitality to create a private ecosystem of experience. Custom transportation solutions, on-site wellness specialists, personal concierges for VIP guests, and bespoke security protocols work in concert to create an environment where every detail is anticipated and every moment is potential for delight.

        When conceptualizing your destination celebration, remember that true luxury lies not in ostentation but in meaning—creating experiences that honor both your journey as a couple and the remarkable setting you've chosen to commemorate your commitment.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1740352344/--13_pslwnf.jpg",
      author: "Alessandra Rossi",
      date: "January 25, 2025",
      tags: ["Destination Celebrations", "Exclusive Venues", "Guest Experiences"]
    },
    {
      title: "The Botanical Sublime: Mastering the Art of Couture Floral Narratives",
      content: `
        In the rarefied world of luxury weddings, floral design has transcended decoration to become a sophisticated artistic medium—one that communicates narrative, evokes emotion, and transforms architectural spaces into immersive botanical environments. The most visionary floral artists approach each commission as an opportunity to create living installations that reflect both personal story and cultural context.

        The foundation of exceptional floral design begins with sourcing practices that prioritize both quality and sustainability. Our master florists maintain direct relationships with specialty growers across five continents, securing access to rare cultivars, heirloom varieties, and specimens with extraordinary characteristics not available through conventional supply chains. These relationships allow for custom growing programs where specific blooms can be cultivated exclusively for your celebration.

        Contemporary luxury floral design embraces complexity through disciplined restraint. Rather than overwhelming abundance, expect to see architectural precision—installations that create visual tension through unexpected scale relationships, negative space that frames and highlights botanical elements, and thoughtful asymmetry that guides the viewer's experience through carefully orchestrated visual journeys.

        Palette development has evolved beyond color matching to explore chromatic narratives that unfold throughout your celebration. Your arrival experience might feature a restrained monochromatic statement that establishes sophistication, which progressively expands into richer, more complex color relationships as guests move deeper into your celebration environment—culminating in a reception space where the full botanical vocabulary is expressed.

        Technical innovation has expanded the possibilities of floral expression. Advances in preservation techniques allow delicate elements to maintain their beauty throughout extended celebrations. Suspended installations utilizing specialized engineering can create the illusion of botanical elements in perpetual motion or defying gravity. Integration of subtle lighting elements can transform arrangements from day to evening, revealing new dimensions as natural light transitions to curated illumination.

        The most meaningful floral narratives incorporate personal symbolism—blooms that featured in family celebrations across generations, specimens native to significant locations in your relationship journey, or botanical elements that carry cultural significance relevant to your heritage. These considered details transform beautiful arrangements into deeply personal expressions of identity and connection.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1740350903/DSC01713_t49xsp.jpg",
      author: "Olivier St. James",
      date: "January 18, 2025",
      tags: ["Floral Artistry", "Botanical Design", "Luxury Installations"]
    },
    {
      title: "Thematic Authenticity: Crafting a Celebration Narrative That Transcends Convention",
      content: `
        The concept of wedding themes has evolved dramatically within sophisticated celebration design. No longer defined by literal interpretations or predictable motifs, the modern luxury wedding theme functions as a conceptual framework—a cohesive narrative lens through which every element of your celebration is considered and refined.

        Begin the development process not with visual references but with meaningful introspection. What cultural traditions resonate with your heritage? Which shared experiences have defined your relationship? What aesthetic sensibilities reflect your authentic selves? These considerations provide the foundation for a celebration concept that feels both personally significant and visually distinctive.

        The most compelling thematic approaches embrace nuance and subtlety. Rather than explicit representation, consider thematic elements as inspirational touchpoints that influence design decisions across multiple dimensions. A shared passion for Japanese aesthetics might manifest not through obvious motifs but through principles of asymmetry, reverence for natural materials, and moments of intentional minimalism throughout your celebration environment.

        Sophisticated thematic development explores sensory continuity beyond the visual realm. Consider how your narrative can be expressed through carefully selected musical progressions, signature scents developed to evolve throughout your celebration timeline, or tactile experiences that invite guests to engage with materials that carry thematic significance.

        Architectural spaces become active participants in your thematic expression. The most memorable celebrations create harmony between venue characteristics and thematic elements—either through complementary relationships that enhance inherent qualities or through transformative approaches that reimagine familiar spaces through unexpected design interventions.

        Communication with your creative partners becomes essential in executing a cohesive thematic vision. Beyond mood boards and visual references, develop a conceptual brief that articulates the emotional qualities, cultural references, and aesthetic principles that define your celebration narrative. This foundational document ensures that all creative decisions—from invitation design to floral concepts to musical selection—contribute to a harmonious and integrated guest experience.

        Remember that the most impactful themes remain flexible frameworks rather than rigid formulas. Allow your celebration concept to evolve organically through collaboration with exceptional creative partners who bring their artistic perspectives while honoring your core narrative vision.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1740350324/-97__sdh6wg.jpg",
      author: "Victoria Harrington",
      date: "January 5, 2025",
      tags: ["Thematic Design", "Luxury Concepts", "Celebration Narratives"]
    }
  ];
  

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <NavBar />

      {/* Blog Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: 'url(/images/luxury-wedding-hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-12 text-center max-w-3xl">
          <h1 className="text-6xl font-serif font-light tracking-wide mb-6 text-white">The Art of Exceptional Celebrations</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-white font-light leading-relaxed">
            Immerse yourself in a curated exploration of luxury wedding design, planning expertise, and avant-garde celebration concepts for the discerning couple.
          </p>
        </div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-serif mb-8 text-stone-800">Refined Perspectives on Celebration Design</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-12">
            Our editorial team brings decades of experience in luxury event curation, working with discerning clients across global destinations. 
            These insights represent our philosophy that truly exceptional celebrations transcend trends to create immersive experiences that 
            honor personal narrative while establishing new paradigms of elegance. Each article offers a sophisticated exploration of the artistic, 
            logistical, and emotional dimensions of contemporary wedding design.
          </p>
          <div className="w-16 h-0.5 bg-stone-300 mx-auto"></div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-serif text-center mb-16 text-stone-800">Curated Insights & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow rounded-sm overflow-hidden flex flex-col h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-stone-500">{post.date}</span>
                    <h3 className="text-xl font-serif mt-2 mb-3 leading-tight">{post.title}</h3>
                    <div className="w-12 h-0.5 bg-stone-200 mb-4"></div>
                  </div>
                  <p className="text-stone-600 text-sm mb-4 flex-grow">
                    {post.content}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-stone-100 text-stone-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                      
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