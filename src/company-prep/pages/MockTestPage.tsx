import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Clock, Target, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import MockTest from '@/company-prep/components/MockTest';
import questionsData from '@/company-prep/data/questions.json';

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

  const mockTest = (location.state as any)?.test || questionsData.mockTests[0];

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
              {mockTest.questions.map((question: any, index: number) => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => navigate(-1)} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base">Back</span>
        </motion.button>
        <MockTest mockTest={mockTest} onComplete={handleTestComplete} />
      </div>
    </div>
  );
};

export default MockTestPage;


