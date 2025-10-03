import React from 'react';
import { FileText, Users, Building2, BookOpen, Briefcase, Settings, CheckCircle, Zap, Clock, Heart } from 'lucide-react';
import Footer from '../shared/components/Footer';

const Features = () => {
  const features = [
    {
      id: "ats-analyzer",
      title: "ATS Score & Resume Analyzer",
      description: "Check how well your resume passes Applicant Tracking Systems with detailed analysis and scoring.",
      icon: FileText,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      status: "available",
      features: [
        "ATS compatibility scoring (0-100)",
        "Keyword optimization suggestions", 
        "Format and structure analysis",
        "Industry-specific recommendations",
        "Real-time feedback and improvements"
      ]
    },
    {
      id: "ai-interview-prep",
      title: "AI Interview Preparation",
      description: "Master your interviews with AI-powered mock sessions, question banks, and personalized feedback.",
      icon: Users,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      status: "available",
      features: [
        "AI-powered mock interview sessions",
        "Industry-specific question databases",
        "Real-time feedback and scoring",
        "Voice recognition and practice",
        "Behavioral and technical question preparation"
      ]
    },
    {
      id: "company-prep",
      title: "Company-Wise Career Prep",
      description: "Get targeted preparation strategies and insights for specific companies and their hiring processes.",
      icon: Building2,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      status: "available",
      features: [
        "Company culture and values analysis",
        "Interview process breakdowns",
        "Salary negotiation insights",
        "Employee testimonials and experiences",
        "Customized application strategies"
      ]
    },
    {
      id: "resources",
      title: "Learning Resources Library",
      description: "Access comprehensive guides, templates, and educational content to accelerate your career growth.",
      icon: BookOpen,
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-700",
      status: "available",
      features: [
        "Professional resume and cover letter templates",
        "Industry-specific career guides",
        "Salary negotiation frameworks",
        "Networking and LinkedIn optimization",
        "Career transition roadmaps"
      ]
    },
    {
      id: "market-intelligence",
      title: "Job Finder",
      description: "Stay ahead with real-time job market trends, salary insights, and hiring demand analytics.",
      icon: Briefcase,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      status: "coming-soon",
      features: [
        "Real-time salary benchmarking",
        "Skills demand analytics",
        "Geographic job market insights",
        "Industry growth predictions",
        "Company hiring trend analysis"
      ]
    },
    {
      id: "more-tools",
      title: "More Tools",
      description: "Explore additional career development tools and utilities to enhance your professional journey.",
      icon: Settings,
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      status: "available",
      features: [
        "LinkedIn Profile Optimizer",
        "Skill Gap Analyzer",
        "Cover Letter Generator",
        "Salary Negotiation Coach",
        "Career Path Planner"
      ]
    }
  ];

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
            Coming Soon
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000000] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Powerful{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Features
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools designed to give you the competitive edge in today's job market - completely free
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(feature.status)}
                  </div>
                  
                  <div className={`${feature.bgColor} rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {feature.features.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                      {feature.features.length > 3 && (
                        <li className="text-xs text-gray-500 ml-3">
                          +{feature.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Career Elevator?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers - completely free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">10K+</h3>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-400">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-400">Countries</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-400">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven career development tools - completely free
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

export default Features;
