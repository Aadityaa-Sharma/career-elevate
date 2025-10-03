import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

interface MockTestType {
  id: number;
  title: string;
  duration: number;
  questions: Question[];
}

interface TestResults {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
  answers: { questionId: number; selectedAnswer: number; correct: boolean }[];
}

interface MockTestProps {
  mockTest: MockTestType;
  onComplete: (results: TestResults) => void;
}

const MockTest: React.FC<MockTestProps> = ({ mockTest, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(mockTest.duration * 60);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, isCompleted]);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < mockTest.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const timeTaken = mockTest.duration * 60 - timeLeft;
    let correctAnswers = 0;
    const answers = mockTest.questions.map(question => {
      const selectedAnswer = selectedAnswers[question.id];
      const correct = selectedAnswer === question.correct;
      if (correct) correctAnswers++;
      return { questionId: question.id, selectedAnswer: selectedAnswer ?? -1, correct };
    });
    const results: TestResults = {
      score: Math.round((correctAnswers / mockTest.questions.length) * 100),
      totalQuestions: mockTest.questions.length,
      correctAnswers,
      timeTaken,
      answers
    };
    setIsCompleted(true);
    onComplete(results);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const currentQuestion = mockTest.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / mockTest.questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">{mockTest.title}</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <Clock className="h-5 w-5" />
              <span className="text-base font-medium">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-sm text-gray-500">
              {currentQuestionIndex + 1} of {mockTest.questions.length}
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div className="bg-blue-600 h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentQuestion.id} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{currentQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <motion.button key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleAnswerSelect(currentQuestion.id, index)} className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 ${selectedAnswers[currentQuestion.id] === index ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswers[currentQuestion.id] === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                    {selectedAnswers[currentQuestion.id] === index && <div className="w-3 h-3 rounded-full bg-white" />}
                  </div>
                  <span className="text-base">{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between">
        <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0} className="px-6 py-3 text-base font-medium text-gray-600 bg-gray-100 rounded-2xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">Previous</button>
        <div className="flex items-center space-x-4">
          {currentQuestionIndex === mockTest.questions.length - 1 ? (
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSubmit} className="px-8 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-2xl transition-colors duration-200">Submit Test</motion.button>
          ) : (
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleNextQuestion} className="px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-colors duration-200">Next</motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockTest;



