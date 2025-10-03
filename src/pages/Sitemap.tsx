import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, Home, Users, BookOpen, Target, Heart } from 'lucide-react';
import Footer from '../shared/components/Footer';

const Sitemap = () => {
  const siteStructure = {
    main: {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Landing page with features overview' },
        { name: 'About', path: '/about', description: 'Learn about Career Elevator and Team Apex' },
        { name: 'Features', path: '/features', description: 'Comprehensive feature overview' },
        { name: 'Pricing', path: '/pricing', description: 'Free forever pricing model' },
        { name: 'Company', path: '/company', description: 'Company information and values' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
        { name: 'Support', path: '/support', description: 'Help center and support options' },
        { name: 'Security', path: '/security', description: 'Security and privacy information' }
      ]
    },
    features: {
      title: 'Core Features',
      icon: Target,
      links: [
        { name: 'AI Interview Prep', path: '/ai-interview-prep', description: 'AI-powered mock interviews and practice' },
        { name: 'Company Prep', path: '/company-prep', description: 'Company-specific preparation tools' },
        { name: 'Learning Resources', path: '/learning-resources', description: 'Educational content and guides' },
        { name: 'Profile', path: '/profile', description: 'User profile and progress tracking' }
      ]
    },
    resources: {
      title: 'Resources & Tools',
      icon: BookOpen,
      links: [
        { name: 'Learning Resources Home', path: '/learning-resources', description: 'Main resources hub' },
        { name: 'Resource Library', path: '/learning-resources/resources', description: 'Browse all available resources' },
        { name: 'About Resources', path: '/learning-resources/about', description: 'Learn about our resource collection' },
        { name: 'Company Dashboard', path: '/company-prep', description: 'Company preparation dashboard' },
        { name: 'Company Profiles', path: '/company-prep/company-profile', description: 'Detailed company information' },
        { name: 'Compare Companies', path: '/company-prep/compare', description: 'Compare different companies' },
        { name: 'Mock Tests', path: '/company-prep/mock-test', description: 'Practice tests and assessments' }
      ]
    },
    support: {
      title: 'Support & Community',
      icon: Users,
      links: [
        { name: 'Support Center', path: '/support', description: 'Help and support resources' },
        { name: 'Contact Us', path: '/contact', description: 'Direct contact options' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000000] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Map className="w-16 h-16 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Site{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Map
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Navigate through all pages and features of Career Elevator. Find everything you need to advance your career.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(siteStructure).map(([key, section]) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={key}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-3 mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {section.links.map((link, index) => (
                      <div
                        key={index}
                        className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <ArrowRight className="w-4 h-4 text-purple-400 mt-1 group-hover:translate-x-1 transition-transform" />
                        <div className="flex-1">
                          {link.external ? (
                            <a
                              href={link.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-purple-300 transition-colors font-medium"
                            >
                              {link.name}
                            </a>
                          ) : (
                            <Link
                              to={link.path}
                              className="text-white hover:text-purple-300 transition-colors font-medium"
                            >
                              {link.name}
                            </Link>
                          )}
                          <p className="text-gray-400 text-sm mt-1">{link.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Site Overview</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Career Elevator offers comprehensive career development tools - completely free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                <Home className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">8+</h3>
              <p className="text-gray-400">Main Pages</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">4</h3>
              <p className="text-gray-400">Core Features</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">7+</h3>
              <p className="text-gray-400">Resource Pages</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">3</h3>
              <p className="text-gray-400">Support Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your career development journey with Career Elevator - completely free
            </p>
            <div className="flex items-center justify-center">
              <Heart className="w-6 h-6 text-white mr-2" />
              <span className="text-white font-semibold">Made with love by Team Apex</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;
