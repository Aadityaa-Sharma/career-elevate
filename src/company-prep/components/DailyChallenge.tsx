import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Trophy, CheckCircle, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/company-prep/components/ui/card'
import { Button } from '@/company-prep/components/ui/button'
import questionsData from '@/company-prep/data/questions.json'

const DailyChallenge: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  
  const challenge = questionsData.dailyChallenge['2024-01-15']

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true)
    }
  }

  const isCorrect = selectedAnswer === challenge.correct

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-700 dark:text-purple-300">
            <Calendar className="h-5 w-5" />
            <span>Daily Challenge</span>
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-base font-medium">{challenge.question}</p>
            
            <div className="space-y-2">
              {challenge.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-3 rounded-2xl border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? showResult
                        ? index === challenge.correct
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300'
                          : 'border-red-500 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-300'
                        : 'border-purple-500 bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300'
                      : showResult && index === challenge.correct
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300'
                        : 'border-border hover:border-purple-300 hover:bg-purple-50/50 dark:hover:bg-purple-950/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? showResult
                          ? index === challenge.correct
                            ? 'border-green-500 bg-green-500'
                            : 'border-red-500 bg-red-500'
                          : 'border-purple-500 bg-purple-500'
                        : showResult && index === challenge.correct
                          ? 'border-green-500 bg-green-500'
                          : 'border-muted-foreground'
                    }`}>
                      {showResult && (
                        selectedAnswer === index
                          ? index === challenge.correct
                            ? <CheckCircle className="w-4 h-4 text-white" />
                            : <XCircle className="w-4 h-4 text-white" />
                          : index === challenge.correct
                            ? <CheckCircle className="w-4 h-4 text-white" />
                            : null
                      )}
                    </div>
                    <span className="text-base">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {!showResult && selectedAnswer !== null && (
              <Button 
                onClick={handleSubmit}
                className="w-full rounded-2xl"
              >
                Submit Answer
              </Button>
            )}

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl ${
                  isCorrect 
                    ? 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800' 
                    : 'bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-medium ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {challenge.explanation}
                </p>
                {isCorrect && (
                  <div className="mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
                    +50 XP earned! 🎉
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default DailyChallenge


