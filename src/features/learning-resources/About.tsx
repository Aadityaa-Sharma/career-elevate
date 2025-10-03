import { BookOpen, Users, Target, Award, Lightbulb, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Learning Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive library of curated learning materials to accelerate your career growth and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <BookOpen className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Curated Content</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Every resource in our library is carefully selected and vetted by industry experts. 
              We ensure that you have access to the most relevant, up-to-date, and high-quality 
              learning materials for your professional journey.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <Users className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Community Driven</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our resource library grows with contributions from professionals across various industries. 
              Share your favorite resources and help others discover valuable learning materials 
              that have helped shape your career.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <Target className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Goal-Oriented</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Whether you're looking to learn a new skill, prepare for interviews, or advance 
              in your current role, our resources are organized to help you achieve your 
              specific career objectives efficiently.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-xl mr-4">
                <Award className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Quality Assured</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Each resource undergoes a thorough review process to ensure accuracy, relevance, 
              and educational value. We maintain high standards to provide you with only 
              the best learning materials.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
            We believe that access to quality learning resources should be universal. Our mission is to democratize 
            professional development by providing a centralized platform where individuals can discover, share, 
            and access the best learning materials across all industries and skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We continuously evolve our platform to provide cutting-edge learning experiences.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
            <p className="text-gray-600">
              Learning resources are accessible to everyone, regardless of background or location.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              We foster a supportive community where learners help each other grow and succeed.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-6 opacity-90">
            Explore our comprehensive library of resources and take your career to the next level.
          </p>
          <a
            href="/learning-resources/resources"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            Browse Resources
          </a>
        </div>
      </div>
    </div>
  );
}
