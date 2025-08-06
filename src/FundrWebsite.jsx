import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, Play, Filter, Video, Database, MessageSquare, ArrowRight, X } from 'lucide-react';
import mainimg from './assets/mainimg.png';
import playstore from './assets/playstore.png';
import ios from './assets/ios.png';
import instagram from './assets/Instagram.png';
import facebook from './assets/Facebook.png';
import Linkedin from './assets/LinkedIn.png';

const FundrWebsite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [currentPage, setCurrentPage] = useState('home');
  const [heroEmail, setHeroEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [heroEmailError, setHeroEmailError] = useState(false);
  const [footerEmailError, setFooterEmailError] = useState(false);

  const sectionRefs = {
    overview: useRef(null),
    problems: useRef(null),
    features: useRef(null),
    contact: useRef(null)
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle URL routing based on location
  useEffect(() => {
    const path = location.pathname;
    if (path === '/privacy-policy') {
      setCurrentPage('privacy');
    } else if (path === '/terms-of-service') {
      setCurrentPage('terms');
    } else if (path === '/cookie-policy') {
      setCurrentPage('cookies');
    } else if (path === '/child-safety-standards-policy') {
      setCurrentPage('child-safety');
    } else {
      setCurrentPage('home');
    }
  }, [location.pathname]);

  // Navigation scroll
  const scrollToSection = (sectionKey) => {
    setActiveSection(sectionKey);
    sectionRefs[sectionKey]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Contact us scroll to footer
  const scrollToContact = () => {
    sectionRefs.contact?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // App store links
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/', '_blank');
  };

  // Email validation
  const validateEmail = (email) => {
    return email && email.includes('@') && email.includes('.');
  };

  // Send email function
  const sendEmail = async (email, type) => {
    try {
      const subject = encodeURIComponent('Premium Access Request - Fundr');
      const body = encodeURIComponent(`Premium access email request from: ${email}\n\nType: ${type}\nDate: ${new Date().toLocaleString()}`);
      const mailtoLink = `mailto:official.fundr@gmail.com?subject=${subject}&body=${body}`;

      // Create a temporary link and click it
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.click();

      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  // Handle hero email submission
  const handleHeroEmailSubmit = async () => {
    if (!validateEmail(heroEmail)) {
      setHeroEmailError(true);
      return;
    }

    setHeroEmailError(false);
    await sendEmail(heroEmail, 'Hero Section');
    setHeroEmail('');
    alert('Thank you! Your request has been sent.');
  };

  // Handle footer email submission
  const handleFooterEmailSubmit = async () => {
    if (!validateEmail(footerEmail)) {
      setFooterEmailError(true);
      return;
    }

    setFooterEmailError(false);
    await sendEmail(footerEmail, 'Footer Section');
    setFooterEmail('');
    alert('Thank you! Your request has been sent.');
  };

  // Handle Get Premium Access button
  const handleGetPremiumAccess = async () => {
    if (!validateEmail(heroEmail)) {
      setHeroEmailError(true);
      return;
    }

    setHeroEmailError(false);
    await sendEmail(heroEmail, 'Premium Access');
    setHeroEmail('');
    alert('Thank you! Your premium access request has been sent.');
  };

  // Handle page navigation with React Router
  const navigateToPage = (page) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  const goHome = () => {
    navigate('/');
  };

  // Legal content
  const privacyPolicyContent = `Privacy Policy

Last updated: January 2025

1. Information We Collect
We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.

2. How We Use Your Information
- To provide and maintain our services
- To notify you about changes to our services
- To provide customer support
- To monitor usage and improve our services

3. Information Sharing
We do not sell, trade, or rent your personal information to third parties without your consent.

4. Data Security
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

5. Your Rights
You have the right to access, update, or delete your personal information. Contact us at privacy@fundr.com for any requests.

6. Contact Us
If you have questions about this Privacy Policy, please contact us at info@fundr.com`;

  const childSafetyPolicyContent = `Child Safety and Protection Policy

Effective Date: August 2025
Last Updated: August 2025

Our Commitment to Child Safety

Fundr is committed to providing a safe environment for all users, especially children. We have zero tolerance for content or behavior that exploits, harms, or endangers children.

Prohibited Content and Activities

We strictly prohibit:
- Child sexual abuse material (CSAM)
- Content that sexualizes minors
- Grooming behavior or predatory conduct
- Content that facilitates child exploitation
- Inappropriate interactions between adults and minors
- Content that could endanger child safety or welfare

Safety Measures

Content Moderation
- All user-generated content is subject to review
- Automated detection systems for inappropriate content
- Human moderation for reported content
- Immediate removal of violating content

User Protection
- Age verification processes where applicable
- Parental controls and supervision features
- Clear reporting mechanisms for users
- Privacy protection for minor users

Account Management
- Immediate suspension of accounts violating child safety
- Cooperation with law enforcement when required
- Regular security audits and updates

Reporting Mechanisms

Users can report concerns through:
- In-app reporting feature within Fundr
- Email: official.fundr@gmail.com
- Direct contact through Fundr app support

Cooperation with Authorities

We fully cooperate with:
- Law enforcement agencies
- National Center for Missing & Exploited Children (NCMEC)
- Other relevant child protection organizations

Regular Review

This policy is reviewed and updated regularly to ensure continued effectiveness in protecting children.

Contact Information

For questions about this policy:
- Email: official.fundr@gmail.com
- App: Fundr (com.fundrnetwork.fundr)

This policy demonstrates our unwavering commitment to child safety and our proactive approach to preventing child sexual abuse and exploitation.`;

  const termsContent = `Terms of Service

Last updated: January 2025

1. Acceptance of Terms
By accessing and using Fundr, you accept and agree to be bound by the terms and provision of this agreement.

2. Description of Service
Fundr is a platform that connects startup founders with investors through video pitches and data-driven profiles.

3. User Accounts
- You must be at least 18 years old to use our service
- You are responsible for maintaining the security of your account
- You agree to provide accurate and complete information

4. Prohibited Uses
You may not use our service:
- For any unlawful purpose or to solicit others to unlawful acts
- To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
- To transmit or procure the sending of any advertising or promotional material

5. Limitation of Liability
Fundr shall not be liable for any indirect, incidental, special, consequential, or punitive damages.

6. Termination
We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms.

Contact us at legal@fundr.com for any questions regarding these terms.`;

  const cookiePolicyContent = `Cookie Policy

Last updated: January 2025

1. What Are Cookies
Cookies are small text files that are placed on your computer by websites that you visit. They are widely used to make websites work more efficiently.

2. How We Use Cookies
We use cookies for the following purposes:
- Essential cookies: Required for the website to function properly
- Analytics cookies: Help us understand how visitors interact with our website
- Functional cookies: Remember your preferences and settings

3. Types of Cookies We Use
- Session cookies: Temporary cookies that expire when you close your browser
- Persistent cookies: Remain on your device for a set period or until deleted

4. Managing Cookies
You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.

5. Third-Party Cookies
We may use third-party services like Google Analytics that place cookies on your device.

For more information about our cookie practices, contact us at cookies@fundr.com`;

  if (currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'cookies' || currentPage === 'child-safety') {
    let content = '';
    let title = '';

    if (currentPage === 'privacy') {
      content = privacyPolicyContent;
      title = 'Privacy Policy';
    } else if (currentPage === 'terms') {
      content = termsContent;
      title = 'Terms of Service';
    } else if (currentPage === 'cookies') {
      content = cookiePolicyContent;
      title = 'Cookie Policy';
    } else if (currentPage === 'child-safety') {
      content = childSafetyPolicyContent;
      title = 'Child Safety Standards Policy';
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Simple Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={goHome}
                className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Fundr
              </button>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="pt-20 px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-white">{title}</h1>
            
            {/* Child Safety Standards Policy link only on Privacy Policy page */}
            {currentPage === 'privacy' && (
              <div className="mb-8">
                <button
                  onClick={() => navigateToPage('child-safety-standards-policy')}
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <span>Child Safety Standards Policy</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            )}
            
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <pre className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm font-sans">
                {content}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Rest of your component remains the same...
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          html {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-emerald-400">Fundr</div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('overview')}
                className={`text-sm font-medium transition-all duration-200 pb-1 ${activeSection === 'overview'
                    ? 'text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-slate-300 hover:text-white'
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('problems')}
                className={`text-sm font-medium transition-all duration-200 pb-1 ${activeSection === 'problems'
                    ? 'text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-slate-300 hover:text-white'
                  }`}
              >
                Problem & Solutions
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`text-sm font-medium transition-all duration-200 pb-1 ${activeSection === 'features'
                    ? 'text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-slate-300 hover:text-white'
                  }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-all duration-200 pb-1 ${activeSection === 'contact'
                    ? 'text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-slate-300 hover:text-white'
                  }`}
              >
                Launch
              </button>
            </div>

            <button
              onClick={scrollToContact}
              className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Contact us
            </button>
          </div>
        </div>
      </nav>
      <div className='bg-[linear-gradient(to_bottom,_#101323_0%,_#101323_70%,_#3F4A89_100%)]'>
        {/* Hero Section */}
        <section ref={sectionRefs.overview} className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="md:text-4xl font-normal mb-0 pb-0 leading-tight mb-1 text-white">
              Your Gateway to Smart Startup
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 mt-0 pt-0">
              <span className="text-emerald-400">Fundraising & Seamless VC Discovery</span>
            </h2>

            <p className="text-lg md:text-l text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Fundr connects ambitious founders with active investors — built on trust,
              transparency, and curated matching.
            </p>

            <div className="mb-12">
              <button
                onClick={handleGetPremiumAccess}
                className="text-lg font-medium mb-8 transition-all duration-200 text-emerald-400"
              >
                Get Prelaunch Access
              </button>

              <div className="flex items-center justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your Email ID"
                  value={heroEmail}
                  onChange={(e) => {
                    setHeroEmail(e.target.value);
                    setHeroEmailError(false);
                  }}
                  className={`bg-slate-800/80 border ${heroEmailError ? 'border-red-500' : 'border-slate-700'} rounded-l-lg px-4 py-3 flex-1 text-sm focus:outline-none focus:border-emerald-400 focus:bg-slate-800 transition-all duration-200 placeholder-slate-400`}
                />
                <button
                  onClick={handleHeroEmailSubmit}
                  className="bg-emerald-500 hover:bg-emerald-600 px-4 py-3 rounded-r-lg transition-all duration-200 shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              {heroEmailError && (
                <p className="text-red-400 text-sm mt-2">Please enter a valid email address</p>
              )}
            </div>

            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={handlePlayStoreClick}
                className="flex items-center space-x-3 bg-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl w-55"
              >
                <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                  <img src={playstore} alt="Google Play" className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 uppercase tracking-wide">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>

              <button
                onClick={handleAppStoreClick}
                className="flex items-center space-x-3 bg-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl w-55"
              >
                <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                  <img src={ios} alt="App Store" className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section ref={sectionRefs.problems} className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center border border-emerald-500/30 px-4 py-2 rounded-full mb-0">
              <span className="text-emerald-400 font-medium text-sm">Problem & Solution</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-normal leading-tight text-white">
                  Bridging the Gap Between{' '}
                  <span className="text-emerald-400 font-bold">Founders and Investors</span>
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">The Problem</h3>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 font-light">
                      Early-stage fundraising remains slow, inefficient, and outdated. Founders spend valuable time creating pitch decks, sending cold emails, and following up with little success.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed font-light">
                      Meanwhile, investors are flooded with unstructured, irrelevant pitches and lack a streamlined way to discover high-quality startups.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">The Solution</h3>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 font-light">
                      FUNDR is a modern pitch discovery platform that simplifies early-stage investing.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed mb-4 font-light">
                      We replace traditional pitch decks with concise video pitches anchored by real startup data — including traction, financials, and team insights.
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed font-light">
                      With smart filters and direct engagement tools, investors can easily discover, evaluate, and connect with promising startups all in one place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-8">
                <img src={mainimg} alt="Fundr Overview" className="w-100 h-auto rounded-2xl" />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Features Section */}
      <section ref={sectionRefs.features} className="py-16 px-4 bg-[#222958]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-1 text-white">
            The Smart Way to Find
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-7 text-white">
            Promising Startups
          </h3>

          <p className="text-slate-300 text-lg mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            From discovery to connection, FUNDR is packed with powerful tools that make early-stage investing faster, smarter, and more efficient for both founders and investors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 text-left hover:bg-slate-800/60 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6">
                <Filter className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-white">Smart Filters for Instant Discovery</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Filter startups by sector, stage, revenue, geography, or background to get instantly relevant matches.
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 text-left hover:bg-slate-800/60 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6">
                <Video className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-white">Short-form Video Pitches</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Founders present their vision in 60-second videos — concise, authentic, and engaging.
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 text-left hover:bg-slate-800/60 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6">
                <Database className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-white">Data-Backed Profiles</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Startup profiles include key metrics like revenue, team size, cap table, and founder idea fit for smarter decisions.
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 text-left hover:bg-slate-800/60 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-white">Direct Messaging & Tracking</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Investors can connect directly with founders — no intermediaries, no delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-[#0F121D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">Coming Soon</h2>
          <p className="text-xl text-slate-300 font-light">
            Be the first to discover smarter <span className="text-emerald-400 font-bold">startup investing with FUNDR</span>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer ref={sectionRefs.contact} className="border-t border-slate-700/50 py-16 px-4 bg-[#0A0C19]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-emerald-400 mb-4">Fundr</div>
              <div className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                DLF Cyber Park <br />
                Phase II, Udyog Vihar, Sector 20,<br />
                Gurugram, Haryana 122022
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('overview')}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-light"
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('problems')}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-light"
                  >
                    Problems
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-light"
                  >
                    Key Features
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => navigateToPage('privacy-policy')}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-light"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToPage('terms-of-service')}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-light"
                  >
                    Terms
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToPage('cookie-policy')}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-light"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                +91 6386054558<br />
                official.fundr@gmail.com
              </div>

              <div>
                <h5 className="text-sm font-semibold mb-2 text-emerald-400">Prelaunch Access</h5>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed font-light">
                  Join our waitlist today! See the curated pitches, key insights, and fundraising success every week.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your Email ID"
                    value={footerEmail}
                    onChange={(e) => {
                      setFooterEmail(e.target.value);
                      setFooterEmailError(false);
                    }}
                    className={`bg-slate-800/80 border ${footerEmailError ? 'border-red-500' : 'border-slate-700'} rounded-l-lg px-3 py-2 text-xs flex-1 focus:outline-none focus:border-emerald-400 transition-all duration-200 placeholder-slate-400`}
                  />
                  <button
                    onClick={handleFooterEmailSubmit}
                    className="bg-emerald-500 hover:bg-emerald-600 px-3 py-2 rounded-r-lg transition-all duration-200 shadow-lg"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
                {footerEmailError && (
                  <p className="text-red-400 text-xs mt-1">Please enter a valid email</p>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0 font-light">
                © 2025. All rights reserved.
              </div>
              <div className="flex space-x-3">
                <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200" />
                <img src={instagram} alt="Instagram" className="w-6 h-6 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200" />
                <img src={facebook} alt="Facebook" className="w-6 h-6 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FundrWebsite;