import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // ... existing useEffect hooks ...

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
            <Logo className={isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-teal-300'} />
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
            <Link
              to="/login"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-teal-300'
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`font-medium transition-colors px-4 py-2 rounded ${
                isScrolled 
                  ? 'bg-teal-600 text-white hover:bg-teal-700' 
                  : 'bg-white text-teal-600 hover:bg-teal-100'
              }`}
            >
              Register
            </Link>
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
            <Link
              to="/login"
              className="text-xl font-medium text-gray-800 transition-colors hover:text-teal-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-xl font-medium text-white transition-colors bg-teal-600 rounded hover:bg-teal-700"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;