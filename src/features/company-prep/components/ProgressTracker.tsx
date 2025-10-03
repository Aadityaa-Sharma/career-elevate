import React from 'react'
import { motion } from 'framer-motion'
import { Target, Code, Users, MessageSquare, Trophy, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/components/ui/card'
import { Progress } from '../../../shared/components/ui/progress'

interface ProgressData {
  aptitude: number
  coding: number
  technical: number
  hr: number
  totalXP: number
  badges: string[]
}

interface ProgressTrackerProps {
  progress?: ProgressData
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ 
  progress = {
    aptitude: 75,
    coding: 60,
    technical: 80,
    hr: 45,
    totalXP: 1250,
    badges: ['First Test', 'Coding Master', 'Quick Learner']
  }
}) => {
  const categories = [
    { name: 'Aptitude', value: progress.aptitude, icon: Target, color: 'text-blue-600' },
    { name: 'Coding', value: progress.coding, icon: Code, color: 'text-green-600' },
    { name: 'Technical', value: progress.technical, icon: Users, color: 'text-purple-600' },
    { name: 'HR Round', value: progress.hr, icon: MessageSquare, color: 'text-orange-600' }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span>Your Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-primary">{progress.totalXP} XP</p>
              <p className="text-sm text-muted-foreground">Total Experience Points</p>
            </div>
            <div className="flex items-center space-x-1">
              {progress.badges.slice(0, 3).map((badge, index) => (
                <div key={index} className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center" title={badge}>
                  <Star className="h-4 w-4 text-white" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div key={category.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className={`h-4 w-4 ${category.color}`} />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm font-bold">{category.value}%</span>
                  </div>
                  <Progress value={category.value} className="h-2" />
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProgressTracker


