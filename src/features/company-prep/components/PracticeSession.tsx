import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle, XCircle, RotateCcw, Trophy, Target } from 'lucide-react';
import questionsData from '../data/questions.json';

interface PracticeSessionProps {
  category: 'aptitude' | 'coding' | 'technical' | 'hr';
  onComplete: (results: PracticeResults) => void;
  onBack: () => void;
}

interface PracticeResults {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
  answers: { questionId: number; selectedAnswer: number; correct: boolean }[];
}

const PracticeSession: React.FC<PracticeSessionProps> = ({ category, onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes default
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Function to randomly select 20 questions from the category
  const getRandomQuestions = (allQuestions: any[], count: number = 20) => {
    if (allQuestions.length <= count) {
      return allQuestions;
    }
    
    // Create a copy of the array to avoid mutating the original
    const shuffled = [...allQuestions];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Return first 20 questions
    return shuffled.slice(0, count);
  };

  // Memoize the random questions selection to prevent regeneration on every render
  const questions = useMemo(() => {
    const allQuestions = questionsData[category];
    return getRandomQuestions(allQuestions, 20);
  }, [category]);

  const currentQuestion = questions[currentQuestionIndex];

  // Safety check to prevent rendering if no questions are available
  if (!questions || questions.length === 0 || !currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Questions Available</h2>
          <p className="text-gray-600 mb-6">There are no questions available for this category.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Practice
          </motion.button>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = useCallback(() => {
    const timeTaken = 30 * 60 - timeLeft;
    let correctAnswers = 0;
    const answers = questions.map(question => {
      const selectedAnswer = selectedAnswers[question.id];
      const correct = selectedAnswer === question.correct;
      if (correct) correctAnswers++;
      return { questionId: question.id, selectedAnswer: selectedAnswer ?? -1, correct };
    });
    
    const results: PracticeResults = {
      score: Math.round((correctAnswers / questions.length) * 100),
      totalQuestions: questions.length,
      correctAnswers,
      timeTaken,
      answers
    };
    
    setIsCompleted(true);
    setShowResults(true);
    onComplete(results);
  }, [timeLeft, questions, selectedAnswers, onComplete]);

  useEffect(() => {
    if (timeLeft > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isCompleted) {
      handleSubmit();
    }
  }, [timeLeft, isCompleted, handleSubmit]);

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

  const getCategoryIcon = () => {
    switch (category) {
      case 'aptitude': return <Target className="h-6 w-6 text-blue-600" />;
      case 'coding': return <Target className="h-6 w-6 text-emerald-600" />;
      case 'technical': return <Target className="h-6 w-6 text-indigo-600" />;
      case 'hr': return <Target className="h-6 w-6 text-purple-600" />;
      default: return <Target className="h-6 w-6 text-gray-600" />;
    }
  };

  const getCategoryName = () => {
    switch (category) {
      case 'aptitude': return 'Aptitude';
      case 'coding': return 'Coding';
      case 'technical': return 'Technical';
      case 'hr': return 'HR Round';
      default: return 'Practice';
    }
  };

  if (showResults) {
    const results = {
      score: Math.round((Object.values(selectedAnswers).filter((answer, index) => 
        answer === questions[index]?.correct
      ).length / questions.length) * 100),
      totalQuestions: questions.length,
      correctAnswers: Object.values(selectedAnswers).filter((answer, index) => 
        answer === questions[index]?.correct
      ).length,
      timeTaken: 30 * 60 - timeLeft,
      answers: questions.map(question => {
        const selectedAnswer = selectedAnswers[question.id];
        const correct = selectedAnswer === question.correct;
        return { questionId: question.id, selectedAnswer: selectedAnswer ?? -1, correct };
      })
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-base">Back to Practice</span>
          </motion.button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-md p-8 mb-8 text-center">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Completed!</h1>
            <p className="text-xl text-gray-600 mb-6">{getCategoryName()} Practice</p>
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

          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Question Review</h3>
            <div className="space-y-4">
              {questions.map((question, index) => {
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
                          <p><span className="font-medium">Explanation:</span> {question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => {
              setShowResults(false);
              setIsCompleted(false);
              setCurrentQuestionIndex(0);
              setSelectedAnswers({});
              setTimeLeft(30 * 60);
            }} className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200">
              <RotateCcw className="h-5 w-5" />
              <span>Retake Practice</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onBack} className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-700 transition-colors duration-200">
              Back to Practice
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base">Back</span>
        </motion.button>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getCategoryIcon()}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{getCategoryName()} Practice</h1>
                <p className="text-gray-600">Question {currentQuestionIndex + 1} of {questions.length}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-lg font-semibold text-blue-600">
              <Clock className="h-5 w-5" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </motion.div>

        {/* Main Content Area - JEE Style Layout */}
        <div className="flex gap-6">
          {/* Question Section - Left Side */}
          <div className="flex-1">
            {/* Question */}
            <motion.div 
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-md p-6 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}>
                  {currentQuestion.difficulty}
                </span>
                {currentQuestion.category && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {currentQuestion.category}
                  </span>
                )}
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentQuestion.question}</h2>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === index;
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                        isSelected 
                          ? 'border-blue-500 bg-blue-50 text-blue-900' 
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                        }`}>
                          {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </div>
                        <span className="font-medium">{String.fromCharCode(65 + index)}. {option}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Previous/Next Buttons */}
            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className={`px-6 py-3 rounded-2xl font-medium transition-colors duration-200 ${
                  currentQuestionIndex === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                Previous
              </motion.button>

              <div className="text-center">
                <div className="text-sm text-gray-600">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </div>
              </div>

              {currentQuestionIndex === questions.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  Submit
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Next
                </motion.button>
              )}
            </div>
          </div>

          {/* Question Navigation Panel - Right Side */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Question Navigation</h3>
                <p className="text-sm text-gray-600">Click any number to jump to that question</p>
              </div>
              
              {/* Question Grid - JEE Style */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {questions.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-12 h-12 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      index === currentQuestionIndex
                        ? 'bg-blue-600 text-white shadow-lg'
                        : selectedAnswers[questions[index].id] !== undefined
                        ? 'bg-green-100 text-green-800 border-2 border-green-300'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>
              
              {/* Legend */}
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span>Current Question</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <span>Not Answered</span>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Questions:</span>
                    <span className="font-medium">{questions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Answered:</span>
                    <span className="font-medium text-green-600">
                      {Object.keys(selectedAnswers).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remaining:</span>
                    <span className="font-medium text-orange-600">
                      {questions.length - Object.keys(selectedAnswers).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSession;
