import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] text-white min-h-screen overflow-hidden">
      <header className="bg-[#1A1A1A] p-4 border-b border-gray-700 fixed top-0 left-0 w-full z-50 shadow-md">
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="text-gray-400 hover:glow-gray-300 transition duration-200">
            Home
          </Link>
          <Link to="/terms" className="text-gray-400 hover:glow-gray-300 transition duration-200">
            Terms of Service
          </Link>
        </nav>
      </header>

      <main className="flex-1 p-8 max-w-4xl mx-auto mt-20 animate__animated animate__fadeInUp" style={{ animationDuration: '0.5s' }}>
        <h1 className="text-4xl font-bold mb-8 text-gray-200">Privacy Policy for The Subject Sage</h1>
        <p className="text-gray-400 mb-6">Last Updated: February 21, 2025</p>

        <p className="text-gray-400 mb-6">
          Welcome to The Subject Sage Website. This Privacy Policy explains how we collect, use, process, and protect your personal information when you use our website at <Link to="https://www.thesubjectsage.com" className="text-gray-300 hover:text-gray-200 underline">www.thesubjectsage.com</Link> and our AI-powered A-level politics chatbot. We are committed to protecting your privacy and complying with applicable data protection laws, including the UK Data Protection Act 2018, General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant regulations.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">1. Information We Collect</h2>
        <p className="text-gray-400 mb-6">
          We may collect the following types of personal information when you interact with The Subject Sage:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li><strong>Contact Information</strong>: Email addresses you provide when joining our waitlist or subscribing to updates.</li>
          <li><strong>Account Information</strong>: Usernames and passwords you create to access your account and use our chatbot.</li>
          <li><strong>Chat Data</strong>: Content of your interactions with our chatbot, including questions, responses, and preferences, stored as chat history in our MongoDB cluster for your access.</li>
          <li><strong>Usage Data</strong>: IP addresses or device information may be collected indirectly through MongoDB Atlas or server logs, but we do not use cookies, tracking tools, or third-party analytics services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">2. How We Use Your Information</h2>
        <p className="text-gray-400 mb-6">
          We use your personal information solely to enable you to use The Subject Sage website and services, including:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li>To create and manage your account, allowing you to log in and out securely.</li>
          <li>To store and retrieve your chat history, so you can access previous interactions with our AI chatbot.</li>
          <li>To send you updates, notifications, or promotional materials about The Subject Sage (you can opt-out at any time).</li>
          <li>To ensure the functionality and security of our services, using data stored in our MongoDB cluster.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">3. Legal Basis for Processing (GDPR/UK DPA)</h2>
        <p className="text-gray-400 mb-6">
          If you are in the European Economic Area (EEA) or the UK, our legal bases for processing your data include:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li><strong>Contractual Necessity</strong>: To provide The Subject Sage service you request (e.g., account creation, chatbot responses, chat history access).</li>
          <li><strong>Legitimate Interests</strong>: To improve our services, ensure security, and manage our relationship with you.</li>
          <li><strong>Consent</strong>: For optional data collection (e.g., newsletter subscriptions).</li>
        </ul>
        <p className="text-gray-400 mb-6">
          You have the right to withdraw consent at any time (see “Your Rights” below).
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">4. Sharing and Disclosure</h2>
        <p className="text-gray-400 mb-6">
          We do not sell, share, or disclose your personal data to third parties, including advertisers, analytics providers, or news aggregators. Your data is stored exclusively in our MongoDB cluster and is not transferred or shared with any external entities, except as required by law or to comply with legal obligations (e.g., court orders, subpoenas).
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">5. Data Security</h2>
        <p className="text-gray-400 mb-6">
          We prioritize the security of your personal information and use MongoDB Atlas, which provides built-in security features, including:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li><strong>Encryption</strong>: Data is encrypted at rest and in transit using TLS/SSL and AES-256 encryption.</li>
          <li><strong>Access Controls</strong>: Role-based access control (RBAC) and authentication mechanisms to limit access to authorized personnel only.</li>
          <li><strong>Network Security</strong>: Firewall rules, private IP whitelisting, and VPC peering to secure data transmission.</li>
          <li><strong>Monitoring</strong>: Audit logs and alerts to detect and respond to unauthorized access.</li>
        </ul>
        <p className="text-gray-400 mb-6">
          While we implement these measures, no method is 100% secure, and we cannot guarantee absolute protection against all risks.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">6. Your Rights</h2>
        <p className="text-gray-400 mb-6">
          Depending on your location, you have rights regarding your personal data, including:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li><strong>Access</strong>: Request a copy of your data (e.g., email, username, chat history).</li>
          <li><strong>Correction</strong>: Update inaccurate or incomplete data.</li>
          <li><strong>Deletion</strong>: Request erasure of your data (“right to be forgotten”).</li>
          <li><strong>Restriction</strong>: Limit how we process your data.</li>
          <li><strong>Objection</strong>: Object to processing based on legitimate interests.</li>
          <li><strong>Data Portability</strong>: Receive your data in a structured, machine-readable format.</li>
          <li><strong>Opt-Out</strong>: Withdraw consent or opt-out of marketing communications.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">7. Data Retention</h2>
        <p className="text-gray-400 mb-6">
          We retain your personal information only as long as necessary for the purposes outlined or as required by law. Specifically:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li>Email addresses from the waitlist are kept until you unsubscribe or for up to 2 years after your last interaction, unless otherwise required by law.</li>
          <li>Account information (usernames, passwords) and chat history are retained as long as your account is active. You can request deletion at any time, and we’ll delete data within 30 days, unless retention is required for legal or operational reasons.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">8. Third-Party Services</h2>
        <p className="text-gray-400 mb-6">
          We may integrate third-party payment processors (e.g., PayPal, Stripe) for premium subscriptions and potentially Google for optional account login via Google accounts. These services have their own privacy policies, and we ensure they comply with GDPR, UK DPA, and CCPA. We do not use external APIs or news scraping services (e.g., `newsScraper.js`) at this time, but if implemented, data will be anonymized or minimized to protect user privacy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">9. Changes to This Policy</h2>
        <p className="text-gray-400 mb-6">
          We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We’ll notify you of changes via email, a prominent notice on our website, or through the Service. Your continued use after updates constitutes acceptance.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;