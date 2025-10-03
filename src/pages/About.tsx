import React from 'react';
import { Target, Users, Award, TrendingUp, Heart, Zap, Globe, Code } from 'lucide-react';
import Footer from '../shared/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000000] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Target className="w-16 h-16 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-0 w-16 h-16 bg-purple-400/20 rounded-full animate-ping" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Career Elevator
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passion project developed by 4 college students to democratize career success. 
            We're revolutionizing career development with AI-powered tools that help professionals 
            navigate the modern job market with confidence and intelligence - completely free for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                As college students, we understand the challenges of entering the job market. Our mission is to 
                democratize career success by providing completely free, accessible, intelligent tools that level 
                the playing field for job seekers worldwide. We believe everyone deserves the opportunity to 
                showcase their potential and advance their career, regardless of their financial situation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">AI-powered career optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Data-driven insights and recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Completely free tools for everyone</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 mb-4">
                      <Users className="w-8 h-8 text-white mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">10K+</h3>
                    <p className="text-gray-400">Active Users</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 mb-4">
                      <Award className="w-8 h-8 text-white mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
                    <p className="text-gray-400">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 mb-4">
                      <TrendingUp className="w-8 h-8 text-white mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                    <p className="text-gray-400">Countries</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-4 mb-4">
                      <Zap className="w-8 h-8 text-white mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                    <p className="text-gray-400">AI Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Career Elevator
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 w-fit mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Empathy</h3>
              <p className="text-gray-300 leading-relaxed">
                We understand the challenges of career growth and design our tools with genuine care for our users' success.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 w-fit mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-300 leading-relaxed">
                Career advancement should be accessible to everyone, regardless of background, location, or experience level.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 w-fit mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We continuously push the boundaries of what's possible with AI and technology to serve our users better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Team Apex</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Four passionate college students dedicated to transforming careers worldwide - completely free
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center mb-8">
              <Heart className="w-8 h-8 text-red-500 animate-pulse mr-3" />
              <span className="text-2xl font-semibold">Made with Love by Team Apex</span>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're four college students who experienced firsthand the challenges of job hunting and career development. 
              Frustrated by expensive tools and barriers to entry, we decided to build Career Elevator as a completely 
              free platform. Our diverse backgrounds in computer science, design, and business come together to create 
              tools that make a real difference in people's professional lives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of the career revolution. Start your journey with Career Elevator today - completely free.
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

export default About;
