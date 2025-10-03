import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import Profile from './features/profile/Profile';
import Home from './Home';
import Particles from './shared/components/Particles';
import { Target } from 'lucide-react';
import AIInterviewPrep from './features/ai-interview-prep/index';
import ModeSelection from './features/ai-interview-prep/mode-selection';
import AICoach from './features/ai-interview-prep/ai-coach';
import QuestionBank from './features/ai-interview-prep/question-bank';
import ScrollToTop from './shared/components/ScrollToTop';
import CompanyPrepApp from './features/company-prep/App';
import LearningResources from './features/learning-resources/index';
import About from './pages/About';
import Features from './pages/Features';
import Support from './pages/Support';
import Company from './pages/Company';
import Security from './pages/Security';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';

function AppContent() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsNavbarVisible(false);
    }
  }, [lastScrollY, isHomePage]);

  useEffect(() => {
    if (isHomePage) {
      setIsNavbarVisible(true);
      setLastScrollY(0);
    }
    // close mobile menu when navigating
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      {/* Background Particles */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
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

      {/* Root Layout */}
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000000] overflow-x-hidden">
        {/* Navbar */}
        {isHomePage && (
          <nav 
            className={`absolute top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
              isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-md"></div>
            <div className="relative flex justify-between items-center px-8 md:px-12 lg:px-20 py-5">
              {/* Logo */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-full p-2.5 group-hover:border-white/40 transition-all">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Career Elevator
                </span>
              </div>
              
              {/* Desktop Nav - Glass Morphism */}
              <div className="hidden md:flex items-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="/"
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                        location.pathname === '/' 
                          ? 'bg-white/20 text-white shadow-inner' 
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      Home
                    </Link>
                    <Link
                      to="/profile"
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                        location.pathname === '/profile' 
                          ? 'bg-white/20 text-white shadow-inner' 
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button 
                  className="text-white/70 hover:text-white transition-colors bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown - Glass Morphism */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-2">
                <Link 
                  to="/" 
                  className={`block px-4 py-2 rounded-lg transition-all ${
                    location.pathname === '/' 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/profile" 
                  className={`block px-4 py-2 rounded-lg transition-all ${
                    location.pathname === '/profile' 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </div>
            )}
          </nav>
        )}

        {/* Main Content */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={
              <div>
                <div className="min-h-screen w-full flex items-center justify-center relative">
                  <div className="w-full">
                    <Home />
                  </div>
                </div>
              </div>
            } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ai-interview-prep" element={<AIInterviewPrep />} />
            <Route path="/ai-interview-prep/mode-selection" element={<ModeSelection />} />
            <Route path="/ai-interview-prep/ai-coach" element={<AICoach />} />
            <Route path="/ai-interview-prep/question-bank" element={<QuestionBank />} />
            <Route path="/company-prep/*" element={<CompanyPrepApp />} />
            <Route path="/learning-resources/*" element={<LearningResources />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/support" element={<Support />} />
            <Route path="/company" element={<Company />} />
            <Route path="/security" element={<Security />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;