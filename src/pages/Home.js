import React, { useState } from 'react';
import 'animate.css';
import { InView } from 'react-intersection-observer';

const Home = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting email:', email);
    
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setMessage('Please enter a valid email address.');
      return;
    }
  
    try {
      const response = await fetch('https://subject-sage.onrender.com/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }), 
        signal: AbortSignal.timeout(10000000), 
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to subscribe: ${errorText} (Status: ${response.status})`);
      }
      const data = await response.json();
      console.log('Subscription response:', data);
      setMessage("Thank you! We'll notify you when The Subject Sage launches.");
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      if (err.name === 'TimeoutError') {
        setMessage('Taking longer than expected. Please try again!');
      } else if (err.message.includes('Email already subscribed')) {
        setMessage("You're already on our waitlist!");
      } else {
        setMessage('Oops! Something went wrong. Try again later.');
      }
    }
  };


  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const offset = 60;
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
          const offset = 60;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerHeight - offset,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Full-screen background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#070707] via-[#151515] to-[#070707] z-0"></div>

      {/* Content Container */}
      <div className="relative z-0">
        {/* Hero Section */}
        <section id="home" className="relative py-24 sm:py-48 px-4 max-w-6xl mx-auto text-center">
          <div className="absolute inset-0 z-0"></div>
          <InView triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <div ref={ref} className="relative z-10">
                <h1
                  className={`text-5xl font-bold mb-8 text-white tracking-tight sm:text-4xl lg:text-6xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                  style={{ animationDuration: '0.8s' }}
                >
                  Master Your Exams with <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#73ffed] to-[#90dcc6]">The Subject Sage</span>
                </h1>
                <p
                  className={`text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed sm:text-base sm:max-w-2xl lg:text-xl lg:max-w-4xl ${inView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
                  style={{ animationDuration: '1s', animationDelay: '0.2s' }}
                >
                  The Subject Sage is your ultimate AI-powered tutor, designed for GCSE and A-Level students across qualitative subjects. Unlike generic chatbots, The Subject Sage is specifically trained on the exam specification, and enhances your learning with subject-specific answers, model responses, practice questions from past papers, specification insights, and engaging conversations to excel in your exams.
                </p>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 sm:max-w-sm md:space-y-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to get started"
                    className={`w-full p-4 bg-[#1A1A1A] border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#4A5568] sm:p-3 md:p-5 ${inView ? 'animate__animated animate__fadeIn opacity-100' : 'opacity-0'}`}
                    style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                  />
                  <button
                    type="submit"
                    className={`w-full p-4 bg-gradient-to-r from-[#66e4d3] to-[#84c9b5] text-[#111111] font-bold rounded-xl hover:bg-[#5A6A7D] transition-all duration-300 transform hover:scale-105 sm:p-3 md:p-5 ${inView ? 'animate__animated animate__fadeIn opacity-100' : 'opacity-0 '}`}
                    style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                  >
                    Join the Waitlist Now
                  </button>
                </form>
                {message && (
                  <p
                    className={`mt-4 text-gray-400 text-base text-center sm:text-sm md:text-lg ${inView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
                    style={{ animationDuration: '0.5s' }}
                  >
                    {message}
                  </p>
                )}
              </div>
            )}
          </InView>
        </section>

        {/* Growing Community of Learners */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="community" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Growing Community of Learners
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-3 md:gap-12">
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 text-center sm:text-center ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}
                >
                  <p className="text-4xl font-bold text-gray-100 sm:text-3xl md:text-5xl">500+</p>
                  <p className="text-gray-400 mt-3 text-base sm:text-sm md:text-lg">Enthusiastic Users in the Waitlist!</p>
                </div>
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 text-center sm:text-center ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                >
                  <p className="text-4xl font-bold text-gray-100 sm:text-3xl md:text-5xl">98%</p>
                  <p className="text-gray-400 mt-3 text-base sm:text-sm md:text-lg">Testers Satisfaction Rate</p>
                </div>
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 text-center sm:text-center ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                >
                  <p className="text-4xl font-bold text-gray-100 sm:text-3xl md:text-5xl">Support</p>
                  <p className="text-gray-400 mt-3 text-base sm:text-sm md:text-lg">24/7 assistance for all users</p>
                </div>
              </div>
            </section>
          )}
        </InView>

        {/* Pricing Plans */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="pricing" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Pricing Plans for Exam Success
              </h2>
              <p
                className={`text-gray-400 mb-6 text-base max-w-3xl mx-auto text-center sm:text-sm md:text-lg md:max-w-3xl ${inView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}
              >
                Choose the plan that best fits your GCSE and A-Level study needs, designed for students aiming for top grades across qualitative subjects.
              </p>
              <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 md:gap-12 max-w-4xl mx-auto">
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 text-center sm:text-center ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                >
                  <h3 className="text-xl font-medium text-gray-200 mb-4 sm:text-lg md:text-2xl">Single Subject</h3>
                  <p className="text-gray-400 mb-3 text-base sm:text-sm md:text-lg">Master one subject with full access to its AI-powered tutor.</p>
                  <p className="text-base font-semibold text-green-400 bg-[#4A5568]/50 rounded-full px-3 py-1 inline-block mb-4 sm:text-sm md:text-lg">
                    3 Day Free Trial
                  </p>
                  <p className="text-2xl font-bold text-white mb-1 sm:text-xl md:text-3xl">
                    <span className="text-3xl">£3.99</span> <span className="text-lg text-gray-300">/ month</span>
                  </p>
                  <p className="text-xl font-semibold text-white mb-2 sm:text-lg md:text-2xl">
                    or <span className="text-2xl">£34.99</span> <span className="text-base text-gray-300">/ year</span> <span className="text-sm text-green-400">(Save 25%)</span>
                  </p>
                  <ul className="text-gray-400 list-disc list-inside mb-6 text-base sm:text-sm md:text-lg">
                    <li>Full access to one subject’s discussions</li>
                    <li>Specification-based answers and model responses</li>
                    <li>Past papers and practice questions</li>
                    <li>Ad-free experience</li>
                  </ul>
                </div>
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 text-center sm:text-center ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                >
                  <h3 className="text-xl font-medium text-gray-200 mb-4 sm:text-lg md:text-2xl">All Subjects</h3>
                  <p className="text-gray-400 mb-3 text-base sm:text-sm md:text-lg">Unlock every subject chatbot for comprehensive GCSE and A-Level support.</p>
                  <p className="text-2xl font-bold text-white mb-1 sm:text-xl md:text-3xl">
                    <span className="text-3xl">£9.99</span> <span className="text-lg text-gray-300">/ month</span>
                  </p>
                  <p className="text-xl font-semibold text-white mb-4 sm:text-lg md:text-2xl">
                    or <span className="text-2xl">£79.99</span> <span className="text-base text-gray-300">/ year</span> <span className="text-sm text-green-400">(Save 33.3%)</span>
                  </p>
                  <ul className="text-gray-400 list-disc list-inside mb-6 text-base sm:text-sm md:text-lg">
                    <li>Full access to all subjects’ discussions</li>
                    <li>Specification-based answers and model responses</li>
                    <li>Past papers and practice questions for all subjects</li>
                    <li>Ad-free experience</li>
                  </ul>
                </div>
              </div>
              <p
                className={`mt-8 text-gray-400 text-base text-center sm:text-sm md:text-lg ${inView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s', animationDelay: '0.8s' }}
              >
                Payment methods: Credit/Debit Card, PayPal (via Stripe integration). Questions?{' '}
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-gray-200 underline sm:text-xs md:text-sm">Contact us</button>
              </p>
            </section>
          )}
        </InView>

        {/* Supported Subjects */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="subjects" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown opacity-100' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Supported Subjects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Supported Subjects Card */}
                <div
                  className={`border border-[#50C878] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 ${inView ? 'animate__animated animate__zoomIn opacity-100' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl text-center">Subjects We Support</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg mb-4">
                    We support <span className="font-semibold text-green-400">qualitative subjects</span> that focus on analysis, interpretation, and written responses. The Subject Sage excels at providing detailed, specification-based answers and model responses for subjects requiring deep textual or conceptual understanding.
                  </p>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">
                    <span className="font-semibold text-gray-200">Examples:</span> English Literature, History, Sociology, Psychology, Politics
                  </p>
                </div>
                {/* Unsupported Subjects Card */}
                <div
                  className={`border border-[red] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 ${inView ? 'animate__animated animate__zoomIn opacity-100' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl text-center">Subjects We Don’t Support</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg mb-4">
                    We don’t support <span className="font-semibold text-red-400">quantitative subjects</span> that rely heavily on numerical calculations, formulas, or data-driven problem-solving. The Subject Sage is designed for text-based analysis, not mathematical or scientific computations.
                  </p>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">
                    <span className="font-semibold text-gray-200">Examples:</span> Mathematics, Physics, Chemistry, Biology, Economics
                  </p>
                </div>
              </div>
              <p
                className={`mt-8 text-gray-400 text-base text-center sm:text-sm md:text-lg ${inView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s', animationDelay: '0.8s' }}
              >
                Have any questions or suggestions?{' '}
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-gray-200 underline sm:text-xs md:text-sm">Contact us.</button>
              </p>
            </section>
          )}
        </InView>

        {/* Powerful Features for Everyone */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="features" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Powerful Features for Exam Success
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-3 md:gap-12 text-center sm:text-center">
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__slideInLeft' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl">AI-Powered Insights</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">Get precise, specification-accurate answers trained on GCSE and A-Level curricula, model responses, and past papers, surpassing generic chatbots for exam preparation.</p>
                </div>
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__slideInUp' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl">Tailored Study Support</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">Access personalized tutoring across qualitative subjects like English, History, and Sociology, enhancing your understanding with subject-specific context.</p>
                </div>
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__slideInRight' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl">Practice and Specification</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">Engage with practice questions from past papers, explore subject specifications, and have meaningful conversations to deepen your exam readiness.</p>
                </div>
              </div>
            </section>
          )}
        </InView>

        {/* Transform Your Study Journey */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="benefits" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Transform Your Study Journey
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 md:gap-12 text-center sm:text-center">
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl">Boost Confidence</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">Engage in discussions with AI-driven insights, backed by expert knowledge from specifications, model answers, and past papers, for GCSE and A-Level students.</p>
                </div>
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl">Save Time</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">Cut hours of revision with instant, accurate answers and tailored study tools, focusing on what matters for your GCSE and A-Level exams.</p>
                </div>
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl">Stay Ahead</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">Leverage personalized tutoring and practice resources to master key concepts and excel in your GCSE and A-Level studies.</p>
                </div>
                <div
                  className={`border border-[#73ffed] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.8s' }}
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-4 sm:text-lg md:text-2xl">Exam Support</h3>
                  <p className="text-gray-400 text-base sm:text-sm md:text-lg">Access tailored responses for UK GCSE and A-Level subjects, helping students enhance their exam preparation with specification insights and practice questions.</p>
                </div>
              </div>
            </section>
          )}
        </InView>

        {/* Why The Subject Sage Matters in 2025 */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Why The Subject Sage Matters in 2025
              </h2>
              <p
                className={`text-gray-400 text-base max-w-4xl mx-auto mb-6 sm:text-sm md:text-lg md:max-w-3xl text-center sm:text-center ${inView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}
              >
                In 2025, academic success hinges on personalized, accessible learning. With increasing exam complexity and diverse subject demands, students need more than generic resources. The Subject Sage steps in as your trusted AI tutor, offering clear, subject-specific support for GCSE and A-Level qualitative subjects - perfect for students aiming to excel in their exams.
              </p>
            </section>
          )}
        </InView>

        {/* How The Subject Sage Works for You */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="how-works" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                How The Subject Sage Works
              </h2>
              <div className="space-y-6 text-gray-400 text-base sm:text-sm md:text-lg">
                <div
                  className={`flex items-start space-x-6 max-w-4xl mx-auto sm:space-x-4 sm:max-w-2xl md:space-x-8 md:max-w-4xl ${inView ? 'animate__animated animate__slideInLeft' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                >
                  <span className="bg-[#73ffed] text-[#00675f] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg flex-shrink-0 sm:w-8 sm:h-8 md:w-12 md:h-12">1</span>
                  <p>Sign up for free to access The Subject Sage’s powerful AI platform instantly, for GCSE and A-Level students.</p>
                </div>
                <div
                  className={`flex items-start space-x-6 max-w-4xl mx-auto sm:space-x-4 sm:max-w-2xl md:space-x-8 md:max-w-4xl ${inView ? 'animate__animated animate__slideInLeft' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                >
                  <span className="bg-[#73ffed] text-[#00675f] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg flex-shrink-0 sm:w-8 sm:h-8 md:w-12 md:h-12">2</span>
                  <p>Chat with our intelligent assistant to explore GCSE and A-Level subjects, access specification-based answers, model responses, and practice questions.</p>
                </div>
                <div
                  className={`flex items-start space-x-6 max-w-4xl mx-auto sm:space-x-4 sm:max-w-2xl md:space-x-8 md:max-w-4xl ${inView ? 'animate__animated animate__slideInLeft' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.8s' }}
                >
                  <span className="bg-[#73ffed] text-[#00675f] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg flex-shrink-0 sm:w-8 sm:h-8 md:w-12 md:h-12">3</span>
                  <p>Receive instant, reliable answers and personalized study support to prepare effectively for your exams.</p>
                </div>
                <div
                  className={`flex items-start space-x-6 max-w-4xl mx-auto sm:space-x-4 sm:max-w-2xl md:space-x-8 md:max-w-4xl ${inView ? 'animate__animated animate__slideInLeft' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '1s' }}
                >
                  <span className="bg-[#73ffed] text-[#00675f] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg flex-shrink-0 sm:w-8 sm:h-8 md:w-12 md:h-12">4</span>
                  <p>Enjoy 24/7 access to our AI tutor and to our team’s support!</p>
                </div>
              </div>
            </section>
          )}
        </InView>

        {/* What Our Users Say */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="testimonials" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                What Some Of Our Testers Have Said
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 md:gap-12">
                <div
                  className={`border border-[#ffbcff] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-3 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}
                >
                  <p className="text-gray-300 text-base mb-4 sm:text-sm md:text-lg">"The Subject Sage transformed my revision - I felt much more confident about my answers after using it!"</p>
                  <p className="text-gray-400 font-medium sm:text-sm md:text-base">- Aisha S., A-Level Student, London</p>
                </div>
                <div
                  className={`border border-[#ffbcff] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-3 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                >
                  <p className="text-gray-300 text-base mb-4 sm:text-sm md:text-lg">"A game-changer for exam preparation - highly recommend for GCSE and A-Level success!"</p>
                  <p className="text-gray-400 font-medium sm:text-sm md:text-base">- Michael T., GCSE Student, Manchester</p>
                </div>
                <div
                  className={`border border-[#ffbcff] bg-[#222222]/50 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-3 sm:p-4 md:p-8 ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                >
                  <p className="text-gray-300 text-base mb-4 sm:text-sm md:text-lg">"The practice questions and tailored answers helped me excel in my exams - amazing tool!"</p>
                  <p className="text-gray-400 font-medium sm:text-sm md:text-base">- James K., A-Level Student, Bristol</p>
                </div>
              </div>
            </section>
          )}
        </InView>

        {/* Frequently Asked Questions */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="faq" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 text-gray-400 text-base max-w-4xl mx-auto sm:text-sm sm:max-w-2xl md:text-lg md:max-w-3xl">
                <div
                  className={`bg-[#1A1A1A]/50 backdrop-blur-md p-5 rounded-xl shadow-md sm:p-4 md:p-6 ${inView ? 'animate__animated animate__slideInUp' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}
                >
                  <p className="text-gray-200 font-medium mb-3 sm:text-sm md:text-base">Is The Subject Sage free to use?</p>
                  <p>Yes, The Subject Sage offers a free 3-day trial for one subject. Check our <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-gray-200 underline sm:text-xs md:text-sm">pricing page</button> for premium options.</p>
                </div>
                <div
                  className={`bg-[#1A1A1A]/50 backdrop-blur-md p-5 rounded-xl shadow-md sm:p-4 md:p-6 ${inView ? 'animate__animated animate__slideInUp' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}
                >
                  <p className="text-gray-200 font-medium mb-3 sm:text-sm md:text-base">How does the AI work?</p>
                  <p>Our AI is trained on verified GCSE and A-Level content, including specifications, model answers, and past papers, ensuring tailored support for your exams.</p>
                </div>
                <div
                  className={`bg-[#1A1A1A]/50 backdrop-blur-md p-5 rounded-xl shadow-md sm:p-4 md:p-6 ${inView ? 'animate__animated animate__slideInUp' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                >
                  <p className="text-gray-200 font-medium mb-3 sm:text-sm md:text-base">Can I access The Subject Sage on mobile?</p>
                  <p>Absolutely! The Subject Sage is fully responsive, offering a seamless experience on desktops, tablets, and smartphones for GCSE and A-Level students.</p>
                </div>
                <div
                  className={`bg-[#1A1A1A]/50 backdrop-blur-md p-5 rounded-xl shadow-md sm:p-4 md:p-6 ${inView ? 'animate__animated animate__slideInUp' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.8s' }}
                >
                  <p className="text-gray-200 font-medium mb-3 sm:text-sm md:text-base">What subjects does The Subject Sage cover?</p>
                  <p>We support qualitative GCSE and A-Level subjects like English, History, Sociology, and more, with tailored responses based on official specifications and past papers.</p>
                </div>
              </div>
            </section>
          )}
        </InView>

        {/* Contact Us */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} id="contact" className="py-16 px-4 max-w-6xl mx-auto">
              <h2
                className={`text-3xl font-semibold mb-8 text-gray-200 text-center sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Contact Us
              </h2>
              <p
                className={`text-gray-400 mb-6 text-base max-w-3xl mx-auto text-center sm:text-sm md:text-lg sm:max-w-2xl md:max-w-3xl ${inView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}
              >
                Have questions or need support? Reach out to our team, and we’ll get back to you within 24 hours to assist with your GCSE and A-Level study journey.
              </p>
              <div
                className={`max-w-lg mx-auto ${inView ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s', animationDelay: '0.4s' }}
              >
                <a
                  href="mailto:thesubjectsageai@gmail.com"
                  className={`block w-full p-3 bg-gradient-to-r from-[#66e4d3] to-[#84c9b5] text-[#111111] font-bold text-center rounded-xl hover:bg-[#5A6A7D] transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 sm:p-2 md:p-4 ${inView ? 'animate__animated animate__slideInUp' : 'opacity-0'}`}
                  style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
                >
                  Contact us via Email
                </a>
              </div>
            </section>
          )}
        </InView>

        {/* Ready to Excel in Your Exams? */}
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto text-center">
              <h2
                className={`text-3xl font-semibold mb-6 text-gray-200 sm:text-2xl md:text-4xl ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s' }}
              >
                Ready to Excel in Your Exams?
              </h2>
              <p
                className={`text-gray-400 mb-8 text-base max-w-3xl mx-auto sm:text-sm md:text-lg sm:max-w-2xl md:max-w-3xl ${inView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
                style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}
              >
                Join hundreds of GCSE and A-Level students who trust The Subject Sage to master their exams with specification-based answers, model responses, and practice questions - sign up today and unlock your potential in 2025’s academic landscape!
              </p>
              <button
                onClick={() => scrollToSection('home')}
                className={`inline-block bg-gradient-to-r from-[#66e4d3] to-[#84c9b5] text-[#111111] font-bold rounded-xl px-10 py-4 hover:bg-[#5A6A7D] transition-all duration-300 transform hover:scale-105 sm:px-8 sm:py-3 sm:text-lg md:px-12 md:py-5 md:text-2xl ${inView ? 'animate__animated animate__fadeIn opacity-100' : 'opacity-0'}`}
                style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}
              >
                Join the Waitlist Today!
              </button>
            </section>
          )}
        </InView>
      </div>
    </div>
  );
};

export default Home;