import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Clock, Send, CheckCircle, Users, Heart } from 'lucide-react';
import Footer from '../shared/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email within 24 hours",
      icon: Mail,
      contact: "support@careerelevator.com",
      responseTime: "Within 24 hours",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: MessageCircle,
      contact: "Available 24/7",
      responseTime: "Instant",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support team",
      icon: Phone,
      contact: "+1 (555) 123-4567",
      responseTime: "Business hours",
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Office Location",
      description: "Visit our headquarters",
      icon: MapPin,
      contact: "San Francisco, CA",
      responseTime: "By appointment",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const departments = [
    {
      name: "General Support",
      email: "support@careerelevator.com",
      description: "General questions and technical support"
    },
    {
      name: "Sales",
      email: "sales@careerelevator.com",
      description: "Pricing, plans, and enterprise inquiries"
    },
    {
      name: "Partnerships",
      email: "partnerships@careerelevator.com",
      description: "Business partnerships and collaborations"
    },
    {
      name: "Press & Media",
      email: "press@careerelevator.com",
      description: "Media inquiries and press releases"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000000] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're here to help! Get in touch with our team for any questions or support needs.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to reach our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${method.color} rounded-xl p-4 w-fit mx-auto mb-6`}>
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

      {/* Contact Form & Departments */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Send us a Message</h2>
              <p className="text-xl text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Departments */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact Departments</h2>
              <p className="text-xl text-gray-300 mb-8">
                Reach out to specific departments for specialized support.
              </p>
              
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                    <p className="text-gray-300 mb-3">{dept.description}</p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-purple-300 hover:text-purple-200 transition-colors font-semibold"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-12 h-12 text-purple-400 mr-4" />
                <h2 className="text-4xl font-bold">Office Hours</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our team is available during these hours to provide the best support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Support Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Emergency Support</h3>
                <div className="space-y-2 text-gray-300">
                  <p>24/7 for Enterprise customers</p>
                  <p>Critical issues only</p>
                  <p>Response within 2 hours</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Live Chat</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Available 24/7</p>
                  <p>Average response: 2 minutes</p>
                  <p>All plan types supported</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Message */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white mr-3" />
              <h2 className="text-4xl font-bold text-white">We're Here to Help</h2>
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our team of college students is passionate about helping you succeed in your career. Don't hesitate to reach out 
              with any questions, concerns, or feedback - completely free. We're committed to providing the best possible support.
            </p>
            <div className="flex items-center justify-center">
              <Users className="w-6 h-6 text-white mr-2" />
              <span className="text-white font-semibold">Made with love by Team Apex</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
