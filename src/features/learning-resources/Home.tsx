import { Link } from 'react-router-dom';
import { BookOpen, Search, Filter, Star, Users, TrendingUp, Award } from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Total Resources', value: '12+', icon: BookOpen },
    { label: 'Categories', value: '6+', icon: Filter },
    { label: 'Resource Types', value: '4+', icon: Star },
    { label: 'Active Users', value: '500+', icon: Users }
  ];

  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find exactly what you need with our intelligent search and filtering system.'
    },
    {
      icon: BookOpen,
      title: 'Curated Content',
      description: 'Hand-picked resources from industry experts and professionals.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Resources designed to accelerate your professional development.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every resource is vetted for accuracy and educational value.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Learning Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover, learn, and grow with our comprehensive library of curated educational resources 
            designed to accelerate your career development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/learning-resources/resources"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              Browse Resources
            </Link>
            <Link
              to="/learning-resources/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="bg-gray-100 p-3 rounded-xl w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-gray-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Learning Resources?
          </h2>
          <p className="text-xl text-gray-600">
            We provide everything you need to succeed in your professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="bg-gray-100 p-3 rounded-xl w-12 h-12 mb-4 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categories Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600">
            Find resources tailored to your specific area of interest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Frontend Development', count: '4 resources', color: 'from-blue-500 to-blue-600' },
            { name: 'Backend Development', count: '3 resources', color: 'from-green-500 to-green-600' },
            { name: 'Web Development', count: '3 resources', color: 'from-purple-500 to-purple-600' },
            { name: 'Database', count: '1 resource', color: 'from-orange-500 to-orange-600' },
            { name: 'DevOps', count: '1 resource', color: 'from-red-500 to-red-600' },
            { name: 'Documentation', count: 'Multiple', color: 'from-indigo-500 to-indigo-600' }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl w-12 h-12 mb-4 flex items-center justify-center`}>
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who are already advancing their careers with our resources.
          </p>
          <Link
            to="/learning-resources/resources"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            Explore All Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
