import { FileDown } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaInstagram } from 'react-icons/fa'; // Use react-icons for better control over icons

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

                    {/* Brand Block */}
                    <div className="flex flex-col">
                        <div className="relative p-6 border border-gray-700 rounded-2xl shadow-xl bg-gray-900 overflow-hidden">
                            {/* Instagram Icon Positioned Top-Right */}
                            <Link
                                to="https://www.instagram.com/2k.events/?hl=fr"
                                target="_blank"
                                className="absolute right-4 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                            >
                                <FaInstagram size={36} />
                            </Link>

                            <h3 className="font-serif text-3xl text-white tracking-wide mb-4">Eternal Moments</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                2k Events Dubai is a premier event management company based in the United Arab Emirates, offering top-notch services in wedding planning, decoration, and catering. Specializing in creating memorable events, they provide a wide range of tailored services for weddings, corporate functions, and private celebrations.
                            </p>

                            <div className="mt-4 space-y-1">
                                <p className="font-semibold text-sm">📞 (+971) 52 938 5968</p>
                                <p className="font-semibold text-sm">📞 +(216) 20 004 777</p>
                                <p className="text-sm">✉️ info@eternalmoments.com</p>
                            </div>
                        </div>


                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h6 className="text-white font-semibold text-xl mb-4 uppercase">Quick Links</h6>
                        <ul className="space-y-3">
                            <li><HashLink to="#about" className="hover:text-gray-300 transition">Intro</HashLink></li>
                            <li><HashLink to="/#services" className="hover:text-gray-300 transition">Projects</HashLink></li>
                            <li><HashLink to="/AroundWorld" className="hover:text-gray-300 transition">About Us</HashLink></li>
                            <li><HashLink to="/blog" className="hover:text-gray-300 transition">Wedding Blog</HashLink></li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                        <h6 className="text-white font-semibold text-xl mb-4 uppercase">Visit Us</h6>
                        <p className="text-gray-400 text-sm mb-1">Dubai, 14th Floor, Blue Bay Tower - Business Bay</p>
                        <p className="text-gray-400 text-sm mb-4">Tunisie, Ennaser 2</p>
                        <div className="w-full h-48 rounded-xl overflow-hidden shadow-md border border-gray-700">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.2796639216426!2d55.27078247578987!3d25.20484998383638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4347179dfebf%3A0x48a8b4a70a7a6a1d!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1622634751289!5m2!1sen!2sae"
                                loading="lazy"
                                title="Map location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* PDF Download Section */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                    <a
                        href="/2kpd.pdf"
                        download="2k-Brochure.pdf"
                        className="inline-flex items-center px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-all duration-300 group"
                    >
                        <FileDown
                            size={20}
                            className="mr-2 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                        Download Brochure
                    </a>
                </div>

                {/* Bottom Section - Social & Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-400 text-xs md:text-sm">© {new Date().getFullYear()} Eternal Moments. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
