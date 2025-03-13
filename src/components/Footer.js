import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#070707] p-12 text-center text-gray-400 animate__animated animate__fadeInUp" style={{ animationDuration: '1.7s' }}>
      <p className="text-lg">© 2025 The Subject Sage. All rights reserved.</p>
      <div className="mt-6 space-x-8">
        <Link to="/privacy" className="text-gray-400 hover:text-gray-300 transition duration-200 text-lg">Privacy Policy</Link>
        <Link to="/terms" className="text-gray-400 hover:text-gray-300 transition duration-200 text-lg">Terms of Service</Link>
        <a href="https://www.buymeacoffee.com/thesubjectsage" rel="noreferrer" target="_blank" className="text-gray-400 hover:text-gray-300 transition duration-200 text-lg" >Buy Me A Coffee</a>
      </div>
    </footer>
  );
};

export default Footer;