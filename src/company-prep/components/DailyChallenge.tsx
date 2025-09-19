import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Trophy, CheckCircle, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import questionsData from '../data/questions.json'

const DailyChallenge: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const challenge = questionsData.dailyChallenge['2024-01-15']

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) setShowResult(true)
  }

  const isCorrect = selectedAnswer === challenge.correct

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="max-w-xl mx-auto"
    >
      <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-400 text-lg font-semibold">
            <Calendar className="h-5 w-5" />
            Daily Challenge
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Question */}
          <p className="text-base font-medium leading-relaxed text-gray-900 dark:text-gray-100">
            {challenge.question}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {challenge.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrectOption = index === challenge.correct
              const showAsCorrect = showResult && isCorrectOption
              const showAsWrong = showResult && isSelected && !isCorrectOption

              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left
                    ${isSelected && !showResult 
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-900 dark:text-purple-100' 
                      : ''}
                    ${showAsCorrect 
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100' 
                      : ''}
                    ${showAsWrong 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100' 
                      : ''}
                    ${!isSelected && !showAsCorrect && !showAsWrong 
                      ? 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10' 
                      : ''}
                  `}
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full border-2 shrink-0
                      ${isSelected && !showResult ? 'border-purple-500 bg-purple-500' : ''}
                      ${showAsCorrect ? 'border-green-500 bg-green-500' : ''}
                      ${showAsWrong ? 'border-red-500 bg-red-500' : ''}
                      ${!isSelected && !showAsCorrect && !showAsWrong ? 'border-gray-400 dark:border-gray-500' : ''}
                    `}
                  >
                    {showResult && (showAsCorrect ? (
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    ) : showAsWrong ? (
                      <XCircle className="w-3.5 h-3.5 text-white" />
                    ) : null)}
                  </div>
                  <span className="text-sm sm:text-base">{option}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Submit button */}
          {!showResult && selectedAnswer !== null && (
            <Button
              onClick={handleSubmit}
              className="w-full rounded-xl font-medium bg-purple-600 hover:bg-purple-700 text-white"
            >
              Submit Answer
            </Button>
          )}

          {/* Result */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl border ${
                isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-600'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                )}
                <span
                  className={`font-medium text-sm sm:text-base ${
                    isCorrect
                      ? 'text-green-700 dark:text-green-300'
                      : 'text-red-700 dark:text-red-300'
                  }`}
                >
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {challenge.explanation}
              </p>
              {isCorrect && (
                <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                  +50 XP earned 🎉
                </div>
              )}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default DailyChallenge
