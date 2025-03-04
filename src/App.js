import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white">
      <Header />
      <div className="flex flex-1">
        <div className="hidden md:block w-20 flex-shrink-0"></div>
        <main className="flex-1 max-w-6xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;