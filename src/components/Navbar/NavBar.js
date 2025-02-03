import React, { useState } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/2k.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-30 bg-black shadow-lg">
      <div className="flex items-center py-2 px-4 max-w-7xl mx-auto">
        {/* Left Navigation */}
        <div className="hidden lg:flex flex-1 space-x-4">
          <HashLink className="font-serif text-gray-100 hover:text-white text-xl" smooth to="/#about">About</HashLink>
          <HashLink className="font-serif text-gray-100 hover:text-white text-xl" smooth to="/#services">Services</HashLink>
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center flex-1">
          <HashLink smooth to="/#hero">
            <img 
              src={logo} 
              alt="2K Events Logo" 
              className="w-auto object-contain filter invert" 
              style={{ height: '50px', transform: 'scale(3.5)' }}
            />
          </HashLink>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex flex-1 justify-end space-x-4">
          <HashLink className="font-serif text-gray-100 hover:text-white text-xl" to="/">Portfolio</HashLink>
          <HashLink className="font-serif text-gray-100 hover:text-white text-xl" to="/contact#contact">Contact Us</HashLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button className="p-2 rounded-lg text-gray-500" onClick={handleClick}>
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
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
