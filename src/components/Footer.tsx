import React, { useState, useEffect } from 'react';
import { Target, Sparkles, ArrowUp, Mail, ExternalLink, Heart, Zap, Rocket, Globe, Code, Users, Award, TrendingUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkSections = {
    platform: {
      icon: Rocket,
      links: ['Features', 'Enterprise', 'Job Board', 'Career Tools', 'Security', 'Pricing', 'Team', 'Resources', 'Roadmap', 'Compare']
    },
    ecosystem: {
      icon: Globe,
      links: ['Developer API', 'Partners', 'Education', 'Career CLI', 'Desktop App', 'Mobile App']
    },
    support: {
      icon: Users,
      links: ['Docs', 'Community Forum', 'Professional Services', 'Premium Support', 'Skills', 'Status', 'Contact Us']
    },
    company: {
      icon: Award,
      links: ['About', 'Why Career Elevator', 'Customer Stories', 'Blog', 'Careers', 'Newsroom', 'Inclusion', 'Social Impact', 'Shop']
    }
  };

  const socialPlatforms = [
    { 
    name: 'LinkedIn', 
    color: 'from-blue-400 to-blue-600',
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  },
  { 
    name: 'Twitter', 
    color: 'from-cyan-400 to-blue-500',
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
  },
  { 
    name: 'GitHub', 
    color: 'from-gray-400 to-gray-700',
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .296C5.373.296 0 5.669 0 12.296c0 5.293 3.438 9.786 8.207 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.494.997.108-.775.418-1.304.76-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.403c1.018.005 2.043.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.37.814 1.102.814 2.222 0 1.606-.015 2.901-.015 3.293 0 .319.216.694.825.576C20.565 22.08 24 17.587 24 12.296 24 5.669 18.627.296 12 .296z"/>
    </svg>
  },
  { 
    name: 'Buy Me a Coffee', 
    color: 'from-yellow-400 to-orange-500',
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 3H6a2 2 0 00-2 2v9a4 4 0 004 4h6a4 4 0 004-4V5a2 2 0 00-2-2zm0 11a2 2 0 01-2 2H8a2 2 0 01-2-2V6h12v8z"/>
      <path d="M7.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14 7a1 1 0 100 2 1 1 0 000-2z"/>
    </svg>
  },
  ];

  return (
    <footer className="relative overflow-hidden text-white">
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header Section with Glass Morphism */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Brand with Animation */}
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="relative">
                <Target className="w-12 h-12 mr-4 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-0 w-12 h-12 mr-4 bg-purple-400/20 rounded-full animate-ping" />
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Career Elevator
                </h2>
                <p className="text-gray-300 text-sm flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Elevating careers worldwide
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Stay Ahead of the Game
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Get exclusive career insights, job opportunities, and growth strategies delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-black/30 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                  <button
                    onClick={handleSubscribe}
                    className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 flex items-center ${
                      isSubscribed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transform hover:scale-105'
                    }`}
                  >
                    {isSubscribed ? (
                      <>
                        <Heart className="w-4 h-4 mr-1" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-1" />
                        Subscribe
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Made with Love Section */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" fill="currentColor" />
              by Team Apex
            </p>
          </div>
        </div>

        {/* Links Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(linkSections).map(([key, section]) => {
            const IconComponent = section.icon;
            return (
              <div
                key={key}
                className="group relative"
                onMouseEnter={() => setActiveSection(key)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-500 ${
                  activeSection === key ? 'transform scale-105 bg-white/10 border-purple-500/50' : ''
                }`}>
                  <div className="flex items-center mb-4">
                    <IconComponent className={`w-6 h-6 mr-3 transition-all duration-300 ${
                      activeSection === key ? 'text-purple-400 scale-110' : 'text-gray-400'
                    }`} />
                    <h4 className="text-lg font-semibold capitalize">{key}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-all duration-200 text-sm flex items-center group-link hover:translate-x-1"
                        >
                          <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-purple-400 transition-colors" />
                          {link}
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Copyright and Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6 lg:mb-0">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full px-4 py-2 border border-purple-500/30">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>© 2025 Career Elevator, Inc.</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              {['Terms', 'Privacy (Updated 02/2024)', 'Sitemap', 'What is Career Elevator?', 'Manage cookies', 'Do not share my personal information'].map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors hover:underline decoration-purple-400">
                  {link}
                </a>
              ))}
            </div>

            {/* Social Media with Creative Hover Effects */}
            <div className="flex items-center space-x-4">
              {socialPlatforms.map((platform, index) => (
                <a
                  key={platform.name}
                  href="#"
                  className="group relative"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${platform.color} rounded-full opacity-0 group-hover:opacity-75 blur transition-all duration-300 group-hover:scale-110`} />
                  <div className="relative w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    {platform.svg}
                  </div>
                </a>
              ))}
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="group relative ml-4"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-75 blur transition-all duration-300 group-hover:scale-110" />
                <div className="relative w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:-translate-y-1">
                  <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .group-link:hover {
          transform: translateX(4px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
