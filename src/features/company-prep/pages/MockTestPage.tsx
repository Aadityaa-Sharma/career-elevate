import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Clock, Target, CheckCircle, XCircle, RotateCcw, Building } from 'lucide-react';
import MockTest from '../components/MockTest';
import questionsData from '../data/questions.json';
import companiesData from '../data/companies.json';

interface TestResults {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
  answers: { questionId: number; selectedAnswer: number; correct: boolean }[];
}

const MockTestPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState<TestResults | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [selectedTest, setSelectedTest] = useState<any>(null);

  // Function to randomly select 20 questions from mock tests
  const getRandomQuestions = (allQuestions: any[], count: number = 20) => {
    if (allQuestions.length <= count) {
      return allQuestions;
    }
    
    const shuffled = [...allQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, count);
  };

  const mockTest = selectedTest || (location.state as { test?: { questions: { id: number; question: string; options: string[]; correctAnswer: number }[] } })?.test;

  const handleTestComplete = (testResults: TestResults) => {
    setResults(testResults);
    setShowAnalytics(true);
  };

  const handleRetakeTest = () => {
    setResults(null);
    setShowAnalytics(false);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleTestSelect = (test: any) => {
    // Create a modified test with random 20 questions
    const modifiedTest = {
      ...test,
      questions: getRandomQuestions(test.questions, 20)
    };
    setSelectedTest(modifiedTest);
  };

  if (showAnalytics && results) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/company-prep')}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-base">Back to Home</span>
          </motion.button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-md p-8 mb-8 text-center">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Completed!</h1>
            <p className="text-xl text-gray-600 mb-6">{mockTest.title}</p>
            <div className={`text-6xl font-bold mb-4 ${getScoreColor(results.score)}`}>{results.score}%</div>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">{results.correctAnswers}</div>
                <div className="text-base text-gray-600">Correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{results.totalQuestions - results.correctAnswers}</div>
                <div className="text-base text-gray-600">Wrong</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{formatTime(results.timeTaken)}</div>
                <div className="text-base text-gray-600">Time Taken</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Accuracy</h3>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{Math.round((results.correctAnswers / results.totalQuestions) * 100)}%</div>
              <p className="text-base text-gray-600">{results.correctAnswers} out of {results.totalQuestions} correct</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-emerald-600" />
                <h3 className="text-lg font-semibold text-gray-900">Speed</h3>
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{Math.round(results.timeTaken / results.totalQuestions)}s</div>
              <p className="text-base text-gray-600">Average per question</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{results.score >= 80 ? 'Excellent' : results.score >= 60 ? 'Good' : 'Needs Work'}</div>
              <p className="text-base text-gray-600">Overall rating</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Question Breakdown</h3>
            <div className="space-y-4">
              {mockTest.questions.map((question: { id: number; question: string; options: string[]; correctAnswer: number }, index: number) => {
                const answer = results.answers.find(a => a.questionId === question.id);
                const isCorrect = answer?.correct || false;
                return (
                  <motion.div key={question.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className={`p-4 rounded-2xl border-2 ${isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
                    <div className="flex items-start space-x-3">
                      {isCorrect ? <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" /> : <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-base font-medium text-gray-900 mb-2">Q{index + 1}: {question.question}</p>
                        <div className="text-sm text-gray-600">
                          <p><span className="font-medium">Your answer:</span> {answer?.selectedAnswer !== -1 ? question.options[answer?.selectedAnswer] : 'Not answered'}</p>
                          <p><span className="font-medium">Correct answer:</span> {question.options[question.correct]}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleRetakeTest} className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200">
              <RotateCcw className="h-5 w-5" />
              <span>Retake Test</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/company-prep')} className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-700 transition-colors duration-200">
              Back to Home
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // Show company selection if no test is selected
  if (!mockTest) {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mock Tests</h1>
            <p className="text-xl text-gray-600">Choose a company-specific mock test to practice</p>
            <p className="text-lg text-blue-600 mt-2">20 random questions selected from each test</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questionsData.mockTests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{test.title}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Duration:</span>
                    <span className="font-medium">{test.duration} minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Questions:</span>
                    <span className="font-medium">10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Difficulty:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                      {test.difficulty}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTestSelect(test)}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Start Test
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => setSelectedTest(null)} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base">Back to Test Selection</span>
        </motion.button>
        <MockTest mockTest={mockTest} onComplete={handleTestComplete} />
      </div>
    </div>
  );
};

export default MockTestPage;


