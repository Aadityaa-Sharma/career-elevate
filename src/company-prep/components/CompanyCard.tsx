import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Heart, Star } from 'lucide-react'
import { Card, CardContent } from '@/company-prep/components/ui/card'
import { Button } from '@/company-prep/components/ui/button'

interface Company {
  id: number
  name: string
  logo: string
  category: string
  description: string
  salary: string
  difficulty: string
  selectionRatio: number
}

interface CompanyCardProps {
  company: Company
  onClick: (id: number) => void
  isFavorite?: boolean
  onToggleFavorite?: (id: number) => void
}

const CompanyCard: React.FC<CompanyCardProps> = ({ 
  company, 
  onClick, 
  isFavorite = false, 
  onToggleFavorite 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'hard': return 'text-red-600 bg-red-100'
      case 'very hard': return 'text-purple-600 bg-purple-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer"
      onClick={() => onClick(company.id)}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl border-border/50 hover:border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 rounded-2xl object-cover shadow-sm"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold truncate mb-1">
                  {company.name}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Users className="h-4 w-4" />
                  <span>{company.category}</span>
                </div>
              </div>
            </div>
            
            {onToggleFavorite && (
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleFavorite(company.id)
                }}
                className="rounded-2xl"
              >
                <Heart 
                  className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                />
              </Button>
            )}
          </div>

          <p className="text-base text-muted-foreground mb-4 line-clamp-2">
            {company.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-sm text-emerald-600 font-medium">
              <MapPin className="h-4 w-4" />
              <span>{company.salary}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(company.difficulty)}`}>
                {company.difficulty}
              </span>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3" />
                <span>{Math.round(company.selectionRatio * 100)}%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {company.category}
            </span>
            
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              className="flex items-center space-x-2 text-primary font-medium"
            >
              <span className="text-base">View Details</span>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CompanyCard


