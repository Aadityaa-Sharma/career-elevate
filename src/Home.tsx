import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from './shared/components/Particles';
import Footer from './shared/components/Footer';
import ScrollIndicator from './shared/components/ScrollIndicator';
import { features, featuresConfig, moreTools, Feature } from './shared/data/features';
import {
  ArrowRight,
  X,
  ExternalLink,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [showMoreToolsModal, setShowMoreToolsModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleFeatureClick = (feature: Feature) => {
    switch (feature.action) {
      case 'modal':
        setShowModal(true);
        break;
      case 'learn-more':
        setSelectedFeature(feature);
        setShowLearnMoreModal(true);
        break;
      case 'more-tools':
        setShowMoreToolsModal(true);
        break;
      case 'redirect':
        if (feature.redirectUrl) {
          navigate(feature.redirectUrl);
        }
        break;
      case 'coming-soon':
      default:
        // You could open a small "Coming Soon" toast notification here
        // Feature coming soon
        break;
    }
  };

  const handleRedirect = (type: string) => {
    // ✨ Updated URLs to use the new, masked paths
    const urls = {
      traditional: "https://ats-scanner2.onrender.com/",
      ai: "https://streamlit-2-fpzz.onrender.com/"
    };
    const url = urls[type as keyof typeof urls];
    
    // Open the URL in a new tab for a better user experience
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setShowLearnMoreModal(false);
      setShowMoreToolsModal(false);
      setSelectedFeature(null);
      setIsClosing(false);
    }, 300);
  };

  const handleGetStartedFromLearnMore = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowLearnMoreModal(false);
      setSelectedFeature(null);
      setIsClosing(false);
      // Open the next modal after the first one is closed
      setShowModal(true);
    }, 300);
  };

  const handleGetStartedAndRedirect = (redirectUrl?: string) => {
    if (!redirectUrl) return;
    setIsClosing(true);
    setTimeout(() => {
      setShowLearnMoreModal(false);
      setSelectedFeature(null);
      setIsClosing(false);
      navigate(redirectUrl);
    }, 300);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return (
          <div className="flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
            <CheckCircle className="w-3 h-3" />
            Available
          </div>
        );
      case 'beta':
        return (
          <div className="flex items-center gap-1 bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
            <Zap className="w-3 h-3" />
            Beta
          </div>
        );
      case 'coming-soon':
      default:
        return (
          <div className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            Soon
          </div>
        );
    }
  };

  return (
    <>
      {/* Hero Section with Particles */}
      <section className="relative overflow-hidden" style={{ width: '100%', height: '100dvh', position: 'relative' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #000000 100%)' }}></div>
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <Particles
            particleColors={['#ffffff']}
            particleCount={650}
            particleSpread={50}
            speed={1}
            particleBaseSize={200}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-30">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
              <span className="text-sm text-gray-300 font-medium">AI-Powered Career Tools</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight max-w-4xl">
            Elevate Your Career with{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Professional Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Advanced AI-powered tools that analyze, optimize, and accelerate your professional journey through intelligent career development.          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleSmoothScroll('features')}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => handleSmoothScroll('features')}
              className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/5 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
          <ScrollIndicator targetId="features" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {featuresConfig.sectionTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {featuresConfig.sectionSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleFeatureClick(feature)}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  <div className={`${feature.bgColor} rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm font-medium text-blue-600 transition-colors duration-300">
                      <span>
                        {feature.action === 'more-tools' ? 'Explore Tools' : 'Learn More'}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                   {feature.details?.status && (
                      <div className="absolute top-4 right-4">
                        {getStatusBadge(feature.details.status)}
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <Footer />

      {/* ATS Analysis Options Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
          <div
            className={`bg-white rounded-xl shadow-xl p-6 w-full max-w-4xl mx-4 relative transform transition-all duration-300 ${
              isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Choose Analysis Method</h2>
              <p className="text-gray-600">
                Select how you'd like to analyze your resume
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="text-xl font-bold mb-2">Manual Analysis</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Traditional parsing using our proprietary engine
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✅</span>
                    Fast processing
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✅</span>
                    Rule-based analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✅</span>
                    Consistent results
                  </li>
                </ul>
                <button
                  onClick={() => handleRedirect('traditional')}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  Choose Manual <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">🤖</div>
                  <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Advanced AI-powered analysis with deep insights
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✅</span>
                    Context understanding
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✅</span>
                    Advanced recommendations
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✅</span>
                    Industry-specific insights
                  </li>
                </ul>
                <button
                  onClick={() => handleRedirect('ai')}
                  className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors duration-300 font-medium"
                >
                  Choose AI <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMoreModal && selectedFeature && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
          <div
            className={`bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl mx-4 max-h-[90dvh] overflow-y-auto relative transform transition-all duration-300 ${
              isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="pr-8">
              <div className="flex items-center mb-6">
                <div className={`${selectedFeature.bgColor} rounded-xl p-3 mr-4`}>
                  <selectedFeature.icon className={`w-8 h-8 ${selectedFeature.iconColor}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedFeature.title}</h2>
                  <div className="mt-2">
                    {selectedFeature.details?.status && getStatusBadge(selectedFeature.details.status)}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedFeature.details?.longDescription}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedFeature.details?.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedFeature.details?.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Zap className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  {selectedFeature.id === 'ats-analyzer' ? (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Optimize Your Resume?</h4>
                      <p className="text-gray-600 mb-4">Get your score and see how you stack up against the competition.</p>
                      <button
                        onClick={handleGetStartedFromLearnMore}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                      >
                        Get Started Now
                      </button>
                    </div>
                  ) : selectedFeature.id === 'ai-interview-prep' ? (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Ace Your Interview?</h4>
                      <p className="text-gray-600 mb-4">Start practicing with our AI coach and question banks.</p>
                      <button
                        onClick={() => handleGetStartedAndRedirect(selectedFeature.redirectUrl)}
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium"
                      >
                        Start Practicing
                      </button>
                    </div>
                  ) : selectedFeature.details?.status === 'available' ? (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
                      <p className="text-gray-600 mb-4">This feature is available now. Start using it to boost your career!</p>
                      <button
                        onClick={() => handleGetStartedAndRedirect(selectedFeature.redirectUrl)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                      >
                        Explore Feature
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Coming Soon!</h4>
                      <p className="text-gray-600 mb-4">We're working hard to bring you this amazing feature. Stay tuned!</p>
                      <button className="bg-gray-300 text-gray-600 px-6 py-3 rounded-lg cursor-not-allowed font-medium">
                        Notify When Available
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* More Tools Modal */}
      {showMoreToolsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
          <div
            className={`bg-white rounded-xl shadow-xl p-8 w-full max-w-5xl mx-4 max-h-[90dvh] overflow-y-auto relative transform transition-all duration-300 ${
              isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="pr-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">More Career Tools</h2>
                <p className="text-gray-600">Explore additional tools to supercharge your career growth</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moreTools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                    >
                      <div className="text-center mb-4">
                        <div className={`bg-gradient-to-br ${tool.color} rounded-xl p-3 w-fit mx-auto mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{tool.desc}</p>
                      </div>
                      <div className="text-center">
                        {getStatusBadge(tool.status)}
                        <button
                          className={`mt-4 w-full px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                            tool.status === 'available' || tool.status === 'beta'
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                          disabled={tool.status === 'coming-soon'}
                          onClick={() => {
                            if (tool.action === 'redirect' && tool.redirectUrl) {
                              window.location.assign(tool.redirectUrl);
                            }
                          }}
                        >
                          {tool.status === 'available' || tool.status === 'beta' ? 'Try Now' : 'Coming Soon'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Request a Tool</h3>
                  <p className="text-gray-600 mb-4">Have an idea for a career tool that would help you? Let us know!</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                    Suggest a Tool
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;