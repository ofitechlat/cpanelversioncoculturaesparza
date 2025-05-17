import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll events for header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-10">
            <Logo className={isScrolled ? 'text-teal-600' : 'text-white'} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            {['Home', 'Activities', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                {item}
              </Link>
            ))}

            {/* Login Button */}
            <button className="hidden md:block">
              <Link
                to="/login"
                className={`hidden md:inline-block px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md shadow hover:bg-teal-700 transition-colors ${
                  isScrolled ? 'bg-teal-600' : 'bg-transparent'
                }`}
              >
                Login
              </Link>
            </button>

            {/* Register Button */}
            <button className="hidden md:block">
              <Link
                to="/register"
                className={`hidden md:inline-block px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md shadow hover:bg-teal-700 transition-colors ${
                  isScrolled ? 'bg-teal-600' : 'bg-transparent'
                }`}
              >
                Register
              </Link>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-10 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col h-screen p-6 pt-24 space-y-8 bg-white md:hidden animate-fade-in">
            {['Home', 'Activities', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-xl font-medium text-gray-800 transition-colors hover:text-teal-600"
              >
                {item}
              </Link>
            ))}
            {/* Login button */}
            <Link
              to="/login"
              className="text-xl font-medium text-gray-800 transition-colors hover:text-teal-600"
              type='button'
            >
              Login
            </Link>
            {/* Register button */}
                        
          </div>
        )}


      </div>
    </header>
  );
};

export default Header;