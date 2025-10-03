import React from 'react';
import { Shield, Lock, Eye, Database, Server, CheckCircle, AlertTriangle, Clock, Heart } from 'lucide-react';
import Footer from '../shared/components/Footer';

const Security = () => {
  const securityFeatures = [
    {
      title: "Data Encryption",
      description: "All your data is encrypted using industry-standard AES-256 encryption",
      icon: Lock,
      color: "from-blue-500 to-indigo-600",
      features: [
        "End-to-end encryption",
        "Secure data transmission",
        "Encrypted data storage",
        "Key management system"
      ]
    },
    {
      title: "Privacy Protection",
      description: "Your personal information is protected with strict privacy controls",
      icon: Eye,
      color: "from-green-500 to-emerald-600",
      features: [
        "GDPR compliance",
        "Data anonymization",
        "Privacy controls",
        "Data retention policies"
      ]
    },
    {
      title: "Secure Infrastructure",
      description: "Enterprise-grade security infrastructure protects all our services",
      icon: Server,
      color: "from-purple-500 to-violet-600",
      features: [
        "Cloud security",
        "Network protection",
        "DDoS mitigation",
        "Regular security audits"
      ]
    },
    {
      title: "Access Control",
      description: "Multi-layered access controls ensure only authorized users can access your data",
      icon: Shield,
      color: "from-amber-500 to-orange-600",
      features: [
        "Multi-factor authentication",
        "Role-based access",
        "Session management",
        "Audit logging"
      ]
    },
    {
      title: "Data Backup",
      description: "Your data is safely backed up with multiple redundancy layers",
      icon: Database,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Automated backups",
        "Geographic redundancy",
        "Data recovery",
        "Backup encryption"
      ]
    },
    {
      title: "Compliance",
      description: "We maintain compliance with industry standards and regulations",
      icon: CheckCircle,
      color: "from-rose-500 to-pink-600",
      features: [
        "SOC 2 Type II",
        "ISO 27001",
        "GDPR compliance",
        "Regular assessments"
      ]
    }
  ];

  const securityStandards = [
    {
      standard: "SOC 2 Type II",
      description: "Audited security controls for data protection",
      status: "certified",
      icon: CheckCircle
    },
    {
      standard: "ISO 27001",
      description: "International standard for information security management",
      status: "certified",
      icon: CheckCircle
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance",
      status: "compliant",
      icon: CheckCircle
    },
    {
      standard: "CCPA",
      description: "California Consumer Privacy Act compliance",
      status: "compliant",
      icon: CheckCircle
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'certified':
        return (
          <div className="flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
            <CheckCircle className="w-3 h-3" />
            Certified
          </div>
        );
      case 'compliant':
        return (
          <div className="flex items-center gap-1 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            <CheckCircle className="w-3 h-3" />
            Compliant
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            In Progress
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
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Shield className="w-16 h-16 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 w-16 h-16 bg-purple-400/20 rounded-full animate-ping" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Security &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Privacy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your data security and privacy are our top priorities. Learn about our comprehensive security measures.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multi-layered security to protect your data and privacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                          {item}
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

      {/* Compliance Standards */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We maintain the highest standards of security and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 w-fit mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    {getStatusBadge(standard.status)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {standard.standard}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Data Protection</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We implement comprehensive data protection measures to ensure your personal and professional 
                information remains secure and private at all times.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">End-to-end encryption for all data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Regular security audits and assessments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Secure data centers with physical security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Employee security training and background checks</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Privacy Policy</h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Data Collection</h3>
                  <p className="text-gray-300">
                    We only collect data necessary to provide our services and improve your experience. 
                    You have full control over your data.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Data Usage</h3>
                  <p className="text-gray-300">
                    Your data is used solely to provide career development services and improve our platform. 
                    We never sell your personal information.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Your Rights</h3>
                  <p className="text-gray-300">
                    You have the right to access, modify, or delete your data at any time. 
                    Contact us to exercise these rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security Best Practices</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tips to keep your account and data secure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Account Security</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                  Use a strong, unique password
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                  Enable two-factor authentication
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                  Log out from shared devices
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                  Monitor account activity regularly
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Data Protection</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                  Be cautious with personal information
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                  Use secure networks when possible
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                  Keep your devices updated
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                  Report suspicious activity immediately
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Questions About Security?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our security team is available to answer any questions about our security measures - completely free
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

export default Security;
