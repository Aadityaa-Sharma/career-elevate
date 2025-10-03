import React from 'react';
import { Mail, MessageCircle, Headphones, HelpCircle, AlertCircle, CheckCircle, Clock, Users, Heart } from 'lucide-react';
import Footer from '../shared/components/Footer';

const Support = () => {
  const supportOptions = [
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials for all our features",
      icon: HelpCircle,
      color: "from-blue-500 to-indigo-600",
      status: "available",
      features: ["Step-by-step guides", "Video tutorials", "FAQ section", "API documentation"]
    },
    {
      title: "Community Forum",
      description: "Connect with other users and get help from the community",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      status: "available",
      features: ["User discussions", "Expert answers", "Success stories", "Feature requests"]
    },
    {
      title: "Professional Services",
      description: "Get personalized help from our career experts",
      icon: Headphones,
      color: "from-purple-500 to-violet-600",
      status: "available",
      features: ["1-on-1 consultations", "Resume reviews", "Interview coaching", "Career planning"]
    },
    {
      title: "Premium Support",
      description: "Priority support with faster response times",
      icon: CheckCircle,
      color: "from-amber-500 to-orange-600",
      status: "coming-soon",
      features: ["24/7 chat support", "Phone support", "Priority ticket handling", "Dedicated account manager"]
    },
    {
      title: "Skills Assessment",
      description: "Evaluate your skills and get improvement recommendations",
      icon: AlertCircle,
      color: "from-cyan-500 to-blue-600",
      status: "coming-soon",
      features: ["Skill gap analysis", "Learning paths", "Progress tracking", "Certification prep"]
    },
    {
      title: "System Status",
      description: "Check the current status of all our services",
      icon: Clock,
      color: "from-gray-500 to-gray-700",
      status: "available",
      features: ["Real-time status", "Incident reports", "Maintenance schedules", "Performance metrics"]
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email within 24 hours",
      icon: Mail,
      contact: "support@careerelevator.com",
      responseTime: "Within 24 hours"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: MessageCircle,
      contact: "Coming Soon",
      responseTime: "Coming Soon"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support team",
      icon: Headphones,
      contact: "+1 (555) 123-4567",
      responseTime: "Business hours"
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
            Support &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Help Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're here to help you succeed. Get the support you need to make the most of Career Elevator
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the support option that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(option.status)}
                  </div>
                  
                  <div className={`bg-gradient-to-br ${option.color} rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {option.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to reach our support team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 w-fit mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-purple-300">
                      {method.contact}
                    </p>
                    <p className="text-sm text-gray-400">
                      Response time: {method.responseTime}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">How do I get started?</h3>
              <p className="text-gray-300 leading-relaxed">
                Simply sign up for a free account and explore our features. Start with the ATS Analyzer to optimize your resume, then try our AI Interview Prep for practice sessions.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Is my data secure?</h3>
              <p className="text-gray-300 leading-relaxed">
                Yes, we use enterprise-grade security measures to protect your data. All information is encrypted and we never share your personal details with third parties.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer refunds?</h3>
              <p className="text-gray-300 leading-relaxed">
                We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our services, contact support for a full refund.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Can I use this for any industry?</h3>
              <p className="text-gray-300 leading-relaxed">
                Absolutely! Our tools are designed to work across all industries and job levels. We provide industry-specific recommendations and templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or concerns - completely free
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

export default Support;
