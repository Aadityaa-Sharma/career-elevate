import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Code, Users, MessageSquare, Clock, Trophy } from 'lucide-react';
import PracticeSession from '../components/PracticeSession';
import questionsData from '../data/questions.json';

type PracticeCategory = 'aptitude' | 'coding' | 'technical' | 'hr';

const PracticePage: React.FC = () => {
  const { category } = useParams<{ category: PracticeCategory }>();
  const navigate = useNavigate();
  const [showSession, setShowSession] = useState(false);

  const categories = [
    {
      id: 'aptitude' as PracticeCategory,
      name: 'Aptitude',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Mathematical and logical reasoning questions',
      questionCount: questionsData.aptitude.length
    },
    {
      id: 'coding' as PracticeCategory,
      name: 'Coding',
      icon: Code,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      description: 'Programming concepts and algorithms',
      questionCount: questionsData.coding.length
    },
    {
      id: 'technical' as PracticeCategory,
      name: 'Technical',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      description: 'Computer science fundamentals',
      questionCount: questionsData.technical.length
    },
    {
      id: 'hr' as PracticeCategory,
      name: 'HR Round',
      icon: MessageSquare,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      description: 'Interview and communication skills',
      questionCount: questionsData.hr.length
    }
  ];

  const handleCategorySelect = (categoryId: PracticeCategory) => {
    navigate(`/company-prep/practice/${categoryId}`);
  };

  const handleBack = () => {
    if (showSession) {
      setShowSession(false);
    } else {
      navigate('/company-prep');
    }
  };

  const handlePracticeComplete = (results: any) => {
    // Results are handled in PracticeSession component
    console.log('Practice completed:', results);
  };

  // If a specific category is selected, show the practice session
  if (category && categories.find(c => c.id === category)) {
    const selectedCategory = categories.find(c => c.id === category)!;
    
    if (showSession) {
      return (
        <PracticeSession
          category={category}
          onComplete={handlePracticeComplete}
          onBack={handleBack}
        />
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-base">Back to Practice</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${selectedCategory.bgColor} ${selectedCategory.borderColor} border-2 mb-4`}>
              <selectedCategory.icon className={`h-8 w-8 ${selectedCategory.color}`} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedCategory.name} Practice</h1>
            <p className="text-xl text-gray-600 mb-6">{selectedCategory.description}</p>
            <div className="flex items-center justify-center space-x-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">20</div>
                <div className="text-sm text-gray-600">Random Questions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">30</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Multiple Choice</div>
                <div className="text-sm text-gray-600">Format</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Practice Instructions</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-medium">1</span>
                </div>
                <p className="text-gray-700">20 questions are randomly selected from {selectedCategory.questionCount} total questions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-medium">2</span>
                </div>
                <p className="text-gray-700">You will have 30 minutes to complete all questions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-medium">3</span>
                </div>
                <p className="text-gray-700">Select the best answer for each question</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-medium">4</span>
                </div>
                <p className="text-gray-700">You can navigate between questions freely</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-medium">5</span>
                </div>
                <p className="text-gray-700">Review your answers before submitting</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSession(true)}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
            >
              Start Practice
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBack}
              className="px-8 py-4 bg-gray-600 text-white rounded-2xl hover:bg-gray-700 transition-colors duration-200 font-medium text-lg"
            >
              Back to Categories
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // Show category selection
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/company-prep')}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base">Back to Home</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Sessions</h1>
          <p className="text-xl text-gray-600">Choose a category to start practicing</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCategorySelect(category.id)}
              className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-2xl bg-white ${category.borderColor} border-2`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600">{category.questionCount} Questions</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{category.description}</p>
              
              <div className="mb-4 p-3 bg-white rounded-xl border border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-medium text-blue-600">20 random questions</span> selected from {category.questionCount} total
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Trophy className="h-4 w-4" />
                  <span>Practice</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
