import React from 'react';
import { CheckCircle, Star, Zap, Users, Shield, Heart } from 'lucide-react';
import Footer from '../shared/components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: "Career Elevator",
      price: "Free",
      period: "forever",
      description: "Complete career development platform - completely free",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      features: [
        "Unlimited ATS Resume Analysis",
        "AI Interview Coach",
        "Full company insights",
        "Learning resources library",
        "Advanced templates",
        "Salary negotiation tools",
        "LinkedIn optimization",
        "Career path planning",
        "Community support",
        "All features included"
      ],
      limitations: [],
      popular: true
    }
  ];

  const addOns = [
    {
      name: "Resume Writing Service",
      description: "Professional resume writing by certified writers",
      price: "$149",
      icon: Star
    },
    {
      name: "Interview Coaching",
      description: "1-on-1 interview coaching sessions",
      price: "$99",
      icon: Zap
    },
    {
      name: "LinkedIn Optimization",
      description: "Complete LinkedIn profile optimization",
      price: "$79",
      icon: Users
    }
  ];

  const faqs = [
    {
      question: "Is it really free?",
      answer: "Yes! Career Elevator is completely free forever. We're college students passionate about helping others succeed, and we believe career development tools should be accessible to everyone."
    },
    {
      question: "Why is it free?",
      answer: "As college students, we understand the financial barriers to career development. We built this platform to democratize career success and make professional tools accessible to everyone."
    },
    {
      question: "Will it always be free?",
      answer: "Yes, our core platform will always remain free. We may add premium services in the future, but all current features will always be available at no cost."
    },
    {
      question: "How do you sustain the platform?",
      answer: "We're currently self-funded college students. We may explore sustainable funding options in the future, but we're committed to keeping the platform free for users."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000000] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            All our tools are completely free! No hidden costs, no premium tiers - just powerful career development tools for everyone.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular 
                      ? 'border-purple-500/50 bg-white/10 scale-105' 
                      : 'border-white/10 hover:border-purple-500/50 hover:bg-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`bg-gradient-to-br ${plan.color} rounded-xl p-4 w-fit mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Features:</h4>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white">
                    Get Started - Completely Free
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Additional services we're working on - all will remain free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 w-fit mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{addon.name}</h3>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-purple-300 mb-4">Coming Soon</div>
                  
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-all duration-300 border border-white/20">
                    Coming Soon
                  </button>
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
              Common questions about our pricing and plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Forever */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-white mr-4" />
              <h2 className="text-4xl font-bold text-white">Free Forever</h2>
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              No hidden costs, no premium tiers, no subscriptions. Career Elevator is completely free for everyone, forever.
            </p>
            <div className="flex items-center justify-center">
              <Heart className="w-6 h-6 text-white mr-2" />
              <span className="text-white font-semibold">Made with love by Team Apex</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Career?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your journey today and experience the power of AI-driven career development - completely free
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

export default Pricing;
