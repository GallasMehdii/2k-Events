import { FileDown } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

                    {/* Brand Block */}
                    <div className="flex flex-col items-center">
                        <div className="p-6 border border-gray-700 rounded-xl shadow-lg w-full">
                            <h3 className="font-serif text-2xl text-white tracking-wide mb-2">Eternal Moments</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                            2k Events Dubai is a premier event management company based in the United Arab Emirates, offering top-notch services in wedding planning, decoration, and catering. Specializing in creating memorable events, they provide a wide range of tailored services for weddings, corporate functions, and private celebrations.
                            </p>
                            <div className="mt-2">
                                <p className="font-semibold text-sm">📞 (+971) 52 938 5968</p>
                                <p className="font-semibold text-sm">📞 +(216) 20 004 777</p>
                                <p className="text-sm">✉️ info@eternalmoments.com</p>
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

                    {/* Location */}
                    <div>
                        <h6 className="text-white font-semibold text-lg mb-3 uppercase">Visit Us</h6>
                        <p className="text-gray-400 text-sm">Dubai,14th Floor ,Blue Bay Tower-Business Bay</p>
                        <p className="text-gray-400 text-sm mb-3">Tunisie, Ennaser 2 </p>
                        <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.2796639216426!2d55.27078247578987!3d25.20484998383638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4347179dfebf%3A0x48a8b4a70a7a6a1d!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1622634751289!5m2!1sen!2sae"
                                loading="lazy"
                                title="Map location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* PDF Download Link */}
                <div className="mt-6 pt-4 border-t border-gray-700 text-center">
                    <a
                        href="/2kpd.pdf"
                        download="2k-Brochure.pdf"
                        className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                    >
                        <FileDown
                            size={18}
                            className="mr-2 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300"
                        />
                        <span className="text-sm">Download Brochure</span>
                    </a>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-center gap-4">
                    <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Eternal Moments. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link to="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-facebook text-xl"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-instagram text-xl"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-twitter text-xl"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
