import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import logo from '../../images/2k1.png';

const NavBar = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setLangMenuOpen(!langMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-30 bg-black/95 backdrop-blur-md shadow-lg">
      <div className="flex items-center py-3 px-6 max-w-7xl mx-auto">

        {/* Left Navigation */}
        <div className="hidden lg:flex flex-1 space-x-6">
          <HashLink className="font-serif text-gray-100 hover:text-gold-400 text-lg transition-all duration-300" smooth to="/#about">
            {language === "en" ? "About" : "À propos"}
          </HashLink>
          <HashLink className="font-serif text-gray-100 hover:text-gold-400 text-lg transition-all duration-300" to="/blog">
            {language === "en" ? "Blog" : "Blog"}
          </HashLink>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center flex-1">
          <HashLink smooth to="/#hero">
            <img src={logo} alt="2K Events Logo" className="w-auto object-contain filter invert" style={{ height: "40px", transform: "scale(3.0)" }} />
          </HashLink>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex flex-1 justify-end space-x-6 items-center">
          <HashLink className="font-serif text-gray-100 hover:text-gold-400 text-lg transition-all duration-300" smooth to="/#services">
            {language === "en" ? "Projects" : "Projets"}
          </HashLink>
          <HashLink className="font-serif text-gray-100 hover:text-gold-400 text-lg transition-all duration-300" to="/contact#contact">
            {language === "en" ? "Contact Us" : "Contactez-nous"}
          </HashLink>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className="text-gray-100 hover:text-gold-400 p-2 rounded-full transition-all duration-300 group"
            >
              <Globe size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </button>
            {langMenuOpen && (
              <ul className="absolute right-0 mt-2 w-36 bg-black/90 border border-white/10 backdrop-blur-md rounded-lg shadow-xl text-center overflow-hidden">
                <li
                  className="cursor-pointer px-4 py-2 text-gray-300 hover:bg-gold-500/20 hover:text-white transition-all"
                  onClick={() => { changeLanguage("en"); setLangMenuOpen(false); }}
                >
                  English
                </li>
                <li
                  className="cursor-pointer px-4 py-2 text-gray-300 hover:bg-gold-500/20 hover:text-white transition-all"
                  onClick={() => { changeLanguage("fr"); setLangMenuOpen(false); }}
                >
                  Français
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 text-gray-400">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 text-gray-100 shadow-xl py-4 space-y-4 transition-transform duration-300 lg:hidden">
          <HashLink
            className="block text-center py-2 hover:bg-white/10 transition-all"
            smooth
            to="/#about"
            onClick={() => setIsOpen(false)} // Close the menu after selecting
          >
            {language === "en" ? "About" : "À propos"}
          </HashLink>
          <HashLink
            className="block text-center py-2 hover:bg-white/10 transition-all"
            to="/blog"
            onClick={() => setIsOpen(false)} // Close the menu after selecting
          >
            {language === "en" ? "Blog" : "Blog"}
          </HashLink>
          <HashLink
            className="block text-center py-2 hover:bg-white/10 transition-all"
            smooth
            to="/#services"
            onClick={() => setIsOpen(false)} // Close the menu after selecting
          >
            {language === "en" ? "Projects" : "Projets"}
          </HashLink>
          <HashLink
            className="block text-center py-2 hover:bg-white/10 transition-all"
            to="/contact#contact"
            onClick={() => setIsOpen(false)} // Close the menu after selecting
          >
            {language === "en" ? "Contact Us" : "Contactez-nous"}
          </HashLink>

          {/* Mobile Language Selector */}
          <div className="flex justify-center">
            <div className="relative">
              <button onClick={toggleLangMenu} className="p-2">
                <Globe size={24} className="text-gray-100" />
              </button>
              {langMenuOpen && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-32 bg-black/90 border border-white/10 backdrop-blur-md rounded-lg shadow-lg text-center overflow-hidden">
                  <li
                    className="cursor-pointer px-4 py-2 text-gray-300 hover:bg-gold-500/20 hover:text-white transition-all"
                    onClick={() => { changeLanguage("en"); setLangMenuOpen(false); }}
                  >
                    English
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2 text-gray-300 hover:bg-gold-500/20 hover:text-white transition-all"
                    onClick={() => { changeLanguage("fr"); setLangMenuOpen(false); }}
                  >
                    Français
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
