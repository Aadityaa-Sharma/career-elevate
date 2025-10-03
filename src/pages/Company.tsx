import React from 'react';
import { Building2, Users, Award, TrendingUp, Heart, Globe, Code, Briefcase, BookOpen } from 'lucide-react';
import Footer from '../shared/components/Footer';

const Company = () => {
  const companyInfo = [
    {
      title: "Why Career Elevator",
      description: "Discover what makes us the leading choice for career development",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI-powered career optimization",
        "Proven success track record",
        "Industry-leading technology",
        "Comprehensive support ecosystem"
      ]
    },
    {
      title: "Customer Stories",
      description: "Real success stories from professionals who transformed their careers",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Career advancement stories",
        "Salary increase testimonials",
        "Industry transition success",
        "Professional growth journeys"
      ]
    },
    {
      title: "Blog",
      description: "Latest insights, tips, and trends in career development",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      features: [
        "Career development tips",
        "Industry trend analysis",
        "Interview preparation guides",
        "Professional growth strategies"
      ]
    },
    {
      title: "Careers",
      description: "Join our team and help us revolutionize career development",
      icon: Briefcase,
      color: "from-amber-500 to-orange-500",
      features: [
        "Open positions",
        "Company culture",
        "Benefits and perks",
        "Remote work opportunities"
      ]
    },
    {
      title: "Newsroom",
      description: "Latest company news, product updates, and industry insights",
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Product announcements",
        "Company milestones",
        "Industry partnerships",
        "Media coverage"
      ]
    },
    {
      title: "Social Impact",
      description: "Our commitment to making career success accessible to everyone",
      icon: Heart,
      color: "from-rose-500 to-pink-500",
      features: [
        "Educational initiatives",
        "Community outreach",
        "Diversity and inclusion",
        "Social responsibility programs"
      ]
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "5+", icon: Award },
    { label: "Countries Served", value: "50+", icon: Globe },
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Success Rate", value: "95%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#000000] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Building2 className="w-16 h-16 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 w-16 h-16 bg-purple-400/20 rounded-full animate-ping" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Company
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn more about Career Elevator, our mission, values, and the team of 4 college students behind the platform
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 w-fit mx-auto mb-4">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Company Information</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore different aspects of our company and what we offer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-br ${info.color} rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {info.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {info.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {info.features.map((feature, idx) => (
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

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Values</h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <Heart className="w-6 h-6 text-red-500 mr-3" />
                    <h3 className="text-xl font-bold text-white">Empathy</h3>
                  </div>
                  <p className="text-gray-300">
                    We understand the challenges of career growth and design our tools with genuine care for our users' success.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <Globe className="w-6 h-6 text-blue-500 mr-3" />
                    <h3 className="text-xl font-bold text-white">Accessibility</h3>
                  </div>
                  <p className="text-gray-300">
                    Career advancement should be accessible to everyone, regardless of background, location, or experience level.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <Code className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-xl font-bold text-white">Innovation</h3>
                  </div>
                  <p className="text-gray-300">
                    We continuously push the boundaries of what's possible with AI and technology to serve our users better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white/5">
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

export default Company;
