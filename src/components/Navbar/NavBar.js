import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Globe } from 'lucide-react'; // Using lucide-react for a more elegant icon
import { useLanguage } from '../../LanguageContext'; // Import useLanguage hook
import logo from '../../images/2k.png';

const NavBar = () => {
  const { language, changeLanguage } = useLanguage(); // Use context here
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setLangMenuOpen(!langMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-30 bg-black shadow-lg">
      <div className="flex items-center py-2 px-4 max-w-7xl mx-auto">

        {/* Left Navigation */}
        <div className="hidden lg:flex flex-1 space-x-4">
          <HashLink className="font-normal  text-gray-100 hover:text-white text-xl" smooth to="/#about">
            {language === "en" ? "About" : "À propos"}
          </HashLink>
          <HashLink className="font-normal text-gray-100 hover:text-white text-xl" smooth to="/#services">
            {language === "en" ? "Gallery" : "Galerie"} 
          </HashLink>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center flex-1">
          <HashLink smooth to="/#hero">
            <img src={logo} alt="2K Events Logo" className="w-auto object-contain filter invert" style={{ height: "50px", transform: "scale(3.5)" }} />
          </HashLink>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex flex-1 justify-end space-x-4 items-center">
          <HashLink className="font-normal text-gray-100 hover:text-white text-xl" to="/">
            {language === "en" ? "Portfolio" : "Portfolio"}
          </HashLink>
          <HashLink className="font-normal text-gray-100 hover:text-white text-xl" to="/contact#contact">
            {language === "en" ? "Contact Us" : "Contactez-nous"}
          </HashLink>

          {/* Language Selection - Globe Icon */}
          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className="text-gray-100 hover:text-white px-3 py-1 rounded-full transition-all duration-300 group"
            >
              <div className="relative">
                <Globe
                  size={24}
                  className="transform transition-all duration-300 group-hover:scale-110"
                  strokeWidth={1.5} // normalner lines for more elegance
                />
                <div className="absolute -inset-1 bg-white/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></span>
              </div>
            </button>
            {langMenuOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 text-center overflow-hidden">
                <li
                  className="cursor-pointer px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 font-light"
                  onClick={() => {
                    changeLanguage("en");
                    setLangMenuOpen(false);
                  }}
                >
                  English
                </li>
                <li
                  className="cursor-pointer px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 font-light"
                  onClick={() => {
                    changeLanguage("fr");
                    setLangMenuOpen(false);
                  }}
                >
                  Français
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button className="p-2 rounded-lg text-gray-500" onClick={toggleMenu}>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 w-full bg-white rounded-md p-6 shadow-xl top-14 transition-transform duration-300 ease-in-out lg:hidden">
          <div className="flex flex-col space-y-6 text-center">
            <HashLink className="text-gray-700 hover:text-black text-lg" smooth to="/#about">
              {language === "en" ? "About" : "À propos"}
            </HashLink>
            <HashLink className="text-gray-700 hover:text-black text-lg" smooth to="/#services">
              {language === "en" ? "Services" : "Services"}
            </HashLink>
            <HashLink className="text-gray-700 hover:text-black text-lg" to="/">
              {language === "en" ? "Portfolio" : "Portfolio"}
            </HashLink>
            <HashLink className="text-gray-700 hover:text-black text-lg" to="/contact#contact">
              {language === "en" ? "Contact Us" : "Contactez-nous"}
            </HashLink>

            {/* Language Selection - Mobile */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center justify-center w-full py-3 px-4 bg-black/5 hover:bg-black/10 rounded-lg transition-all duration-300 group"
              >
                <div className="relative">
                  <Globe
                    size={28}
                    className="transform transition-all duration-300 group-hover:scale-110 text-gray-700"
                    strokeWidth={1.5}
                  />
                  <div className="absolute -inset-1 bg-black/5 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></span>
                </div>
              </button>
              {langMenuOpen && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 text-center overflow-hidden">
                  <li
                    className="cursor-pointer px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 font-light"
                    onClick={() => {
                      changeLanguage("en");
                      setLangMenuOpen(false);
                    }}
                  >
                    English
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 font-light"
                    onClick={() => {
                      changeLanguage("fr");
                      setLangMenuOpen(false);
                    }}
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
