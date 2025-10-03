import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Trophy, CheckCircle, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/components/ui/card'
import { Button } from '../../../shared/components/ui/button'
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
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-primary text-lg font-semibold">
            <Calendar className="h-5 w-5" />
            Daily Challenge
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Question */}
          <p className="text-base font-medium leading-relaxed">
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
                      ? 'border-primary bg-primary/10 text-foreground' 
                      : ''}
                    ${showAsCorrect 
                      ? 'border-green-500 bg-green-500/10 text-foreground' 
                      : ''}
                    ${showAsWrong 
                      ? 'border-red-500 bg-red-500/10 text-foreground' 
                      : ''}
                    ${!isSelected && !showAsCorrect && !showAsWrong 
                      ? 'border-border text-muted-foreground hover:border-primary/50 hover:bg-primary/5' 
                      : ''}
                  `}
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full border-2 shrink-0
                      ${isSelected && !showResult ? 'border-primary bg-primary' : ''}
                      ${showAsCorrect ? 'border-green-500 bg-green-500' : ''}
                      ${showAsWrong ? 'border-red-500 bg-red-500' : ''}
                      ${!isSelected && !showAsCorrect && !showAsWrong ? 'border-muted-foreground' : ''}
                    `}
                  >
                    {(isSelected && !showResult) || showAsCorrect || showAsWrong ? (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    ) : null}
                    {showResult && (showAsCorrect ? (
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    ) : showAsWrong ? (
                      <XCircle className="w-3.5 h-3.5 text-white" />
                    ) : null)}
                  </div>
                  <span className="text-sm sm:text-base font-normal">{option}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Submit button */}
          {!showResult && selectedAnswer !== null && (
            <Button
              onClick={handleSubmit}
              className="w-full rounded-xl font-medium"
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
                  ? 'bg-green-500/10 border-green-500'
                  : 'bg-red-500/10 border-red-500'
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
              <p className="text-sm text-muted-foreground font-normal">
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
