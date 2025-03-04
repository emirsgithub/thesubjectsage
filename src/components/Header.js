import React, { useState } from 'react';
import 'animate.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerHeight - offset,
          behavior: 'smooth',
        });
      }
    } else {
      window.location.href = '/';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerHeight - offset,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
    setIsMenuOpen(false); 
  };

  return (
    <header className="bg-[#070707] p-5 fixed top-0 left-0 w-full z-50 shadow-md animate__animated animate__fadeInDown" style={{ animationDuration: '0.3s' }}>
      <button
        className="md:hidden absolute left-4 top-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A6A7D] transition-colors duration-300 ease-out-cubic"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      <nav className="hidden md:flex justify-center space-x-8">
        <button onClick={() => scrollToSection('home')} className="text-gray-400 transition duration-200">
          Home
        </button>
        <button onClick={() => scrollToSection('pricing')} className="text-gray-400 transition duration-200">
          Pricing
        </button>
        <button onClick={() => scrollToSection('subjects')} className="text-gray-400 transition duration-200">
          Supported Subjects
        </button>
        <button onClick={() => scrollToSection('features')} className="text-gray-400 transition duration-200">
          Features
        </button>
        <button onClick={() => scrollToSection('benefits')} className="text-gray-400 transition duration-200">
          Benefits
        </button>
        <button onClick={() => scrollToSection('how-works')} className="text-gray-400 transition duration-200">
          How It Works
        </button>
        <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 transition duration-200">
          Testimonials
        </button>
        <button onClick={() => scrollToSection('faq')} className="text-gray-400 transition duration-200">
          FAQ
        </button>
        <button onClick={() => scrollToSection('contact')} className="text-gray-400 transition duration-200">
          Contact Us
        </button>
      </nav>


      {isMenuOpen && (
        <>

          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-30 md:hidden"
            onClick={toggleMenu}
          />

          <nav
            className="fixed top-0 left-0 w-full h-screen bg-[#1A1A1A]/30 backdrop-blur-lg shadow-2xl z-40 md:hidden animate__animated animate__slideInUp animate__faster"
            style={{ animationDuration: '0.2s' }}
          >
            <div className="flex flex-col items-center space-y-6 p-8 pt-20">
              <button
                onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                Home
              </button>
              <button
                onClick={() => { scrollToSection('pricing'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                Pricing
              </button>
              <button
                onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                Features
              </button>
              <button
                onClick={() => { scrollToSection('benefits'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                Benefits
              </button>
              <button
                onClick={() => { scrollToSection('how-works'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                How It Works
              </button>
              <button
                onClick={() => { scrollToSection('news'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                News
              </button>
              <button
                onClick={() => { scrollToSection('testimonials'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                Testimonials
              </button>
              <button
                onClick={() => { scrollToSection('faq'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                FAQ
              </button>
              <button
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
                className="text-gray-300 transition duration-300 text-xl font-semibold shadow-md rounded-lg px-6 py-3 hover:bg-[#1A1A1A]/80"
              >
                Contact Us
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;