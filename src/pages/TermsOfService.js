import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-b from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] text-white min-h-screen overflow-hidden">
      <header className="bg-[#1A1A1A] p-4 border-b border-gray-700 fixed top-0 left-0 w-full z-50 shadow-md">
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="text-gray-400 hover:glow-gray-300 transition duration-200">
            Home
          </Link>
          <Link to="/privacy" className="text-gray-400 hover:glow-gray-300 transition duration-200">
            Privacy Policy
          </Link>
        </nav>
      </header>

      <main className="flex-1 p-8 max-w-4xl mx-auto mt-20 animate__animated animate__fadeInUp" style={{ animationDuration: '0.5s' }}>
        <h1 className="text-4xl font-bold mb-8 text-gray-200">Terms of Service for The Subject Sage</h1>
        <p className="text-gray-400 mb-6">Last Updated: February 21, 2025</p>

        <p className="text-gray-400 mb-6">
          Welcome to The Subject Sage Website. These Terms of Service (“Terms”) govern your access to and use of our website at <Link to="https://www.thesubjectsage.com" className="text-gray-300 hover:text-gray-200 underline">www.thesubjectsage.com</Link> and our AI-powered A-level politics chatbot. By accessing or using The Subject Sage, you agree to these Terms. If you do not agree, please do not use our Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">1. Acceptance of Terms</h2>
        <p className="text-gray-400 mb-6">
          By using The Subject Sage, you agree to be bound by these Terms, our Privacy Policy, and any additional guidelines or rules we post. You must be at least 13 years old to use our Service. If you are under 18, you may use The Subject Sage only with parental consent.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">2. Services Provided</h2>
        <p className="text-gray-400 mb-6">
          The Subject Sage offers an AI-powered chatbot trained on A-level politics textbooks, political debates, past papers, specifications, model answers, and real-time news aggregated from major outlets (e.g., BBC, Sky News, CNN, Fox News) and smaller, independent journalists. Our services include:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li>A free tier with basic chatbot access, real-time news, textbook answers, and practice questions.</li>
          <li>A premium subscription for enhanced features, such as advanced AI responses, unlimited chat history, and priority support for A-level exam preparation.</li>
          <li>Support for UK A-level politics learning, accessible to all users, including students preparing for exams.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">3. User Conduct</h2>
        <p className="text-gray-400 mb-6">
          You agree to use The Subject Sage responsibly and lawfully, including:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          <li>Not using the Service for illegal, harmful, or offensive purposes.</li>
          <li>Not interfering with or disrupting the Service, including through hacking, spamming, or distributing malware.</li>
          <li>Respecting intellectual property rights, including not copying or distributing our content without permission.</li>
          <li>Not engaging in any activity that could harm our reputation or violate third-party rights.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">4. Limitation of Liability</h2>
        <p className="text-gray-400 mb-6">
          The Subject Sage is provided “as is” without warranties of any kind, express or implied. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service, including errors, interruptions, or inaccuracies in chatbot responses or news content. Our total liability is limited to the amount you’ve paid us for premium subscriptions, if any.
        </p>


        <h2 className="text-2xl font-semibold mb-4 text-gray-200">5. Payments and Subscriptions</h2>
        <p className="text-gray-400 mb-6">
          - Premium subscriptions are available via third-party processors (e.g., PayPal, Stripe) as outlined on our Pricing page.
          - Payments are non-refundable unless you cancel within our 3-day money-back guarantee period, starting from the subscription date. Refunds will be processed through the original payment method.
          - Subscriptions renew automatically until cancelled. If a recurring payment fails, your membership will be halted immediately, and your access may be suspended until payment is resolved.
          - We may change pricing with 30 days’ notice, and continued use after changes constitutes acceptance.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">6. Third-Party Services</h2>
        <p className="text-gray-400 mb-6">
          We may integrate third-party payment processors (e.g., PayPal, Stripe) for premium subscriptions and potentially thesubjectsage for optional account login via thesubjectsage accounts. These services have their own terms and privacy policies, which you must agree to separately. We do not use external APIs or news scraping services (e.g., `newsScraper.js`) at this time, but if implemented, they will comply with these Terms and our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">7. Governing Law and Jurisdiction</h2>
        <p className="text-gray-400 mb-6">
          These Terms are governed by the laws of England and Wales. Any disputes will be resolved in the courts of London, UK, and you consent to their jurisdiction.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">8. Dispute Resolution</h2>
        <p className="text-gray-400 mb-6">
          Before filing a lawsuit, you agree to attempt to resolve disputes through good-faith negotiation or mediation. If unresolved, disputes may proceed to arbitration or court in London, UK, as outlined above.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-200">9. Changes to These Terms</h2>
        <p className="text-gray-400 mb-6">
          We may update these Terms periodically to reflect changes in our practices or legal requirements. We’ll notify you of changes via email, a notice on our website, or through the Service. Your continued use after updates constitutes acceptance.
        </p>
      </main>
    </div>
  );
};

export default TermsOfService;