import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

                    {/* Brand Block */}
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="p-6 border border-gray-700 rounded-xl shadow-lg w-full">
                            <h3 className="font-serif text-3xl text-white tracking-wide mb-4">Eternal Moments</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Crafting timeless wedding experiences with elegance and precision. Your dream wedding is our passion.
                            </p>
                            <div className="mt-4">
                                <p className="font-semibold text-lg">📞 (+216) 52593384</p>
                                <p className="text-lg">✉️ info@eternalmoments.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="text-white font-semibold text-lg mb-3 uppercase">Quick Links</h6>
                        <ul className="space-y-2">
                            <li><HashLink to="#about" className="hover:text-gray-300 transition">About Us</HashLink></li>
                            <li><HashLink to="#portfolio" className="hover:text-gray-300 transition">Portfolio</HashLink></li>
                            <li><HashLink to="#testimonials" className="hover:text-gray-300 transition">Testimonials</HashLink></li>
                            <li><HashLink to="#blog" className="hover:text-gray-300 transition">Wedding Blog</HashLink></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="text-white font-semibold text-lg mb-3 uppercase">Our Services</h6>
                        <ul className="space-y-2">
                            <li><Link to="/full-planning" className="hover:text-gray-300 transition">Full Wedding Planning</Link></li>
                            <li><Link to="/day-coordination" className="hover:text-gray-300 transition">Day-of Coordination</Link></li>
                            <li><Link to="/destination" className="hover:text-gray-300 transition">Destination Weddings</Link></li>
                            <li><Link to="/decor" className="hover:text-gray-300 transition">Decor & Styling</Link></li>
                            <li><Link to="/vendor" className="hover:text-gray-300 transition">Vendor Coordination</Link></li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h6 className="text-white font-semibold text-lg mb-3 uppercase">Visit Us</h6>
                        <p className="text-gray-400 mb-2">Dubai, UAE - Luxury Wedding Planning</p>
                        <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.2796639216426!2d55.27078247578987!3d25.20484998383638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4347179dfebf%3A0x48a8b4a70a7a6a1d!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1622634751289!5m2!1sen!2sae"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Eternal Moments. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <Link to="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-facebook text-2xl"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-instagram text-2xl"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-twitter text-2xl"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
