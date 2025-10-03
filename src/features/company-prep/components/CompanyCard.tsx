import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Heart, Star, Briefcase, Building } from 'lucide-react'
import { Card, CardContent } from '../../../shared/components/ui/card'
import { Button } from '../../../shared/components/ui/button'

interface Role {
  title: string
  salaryRange: string
  averageSalary: number
  experience: string
  skills: string[]
  responsibilities: string[]
}

interface Eligibility {
  education: string
  cgpa: string
  backlog: string
  preferredColleges: string[]
}

interface Company {
  id: number
  name: string
  logo: string
  category: string
  description: string
  locations: string[]
  companySize: string
  founded: number
  roles: Role[]
  hiringProcess: string[]
  eligibility: Eligibility
  difficulty: string
  selectionRatio: number
  workLifeBalance: number
  innovation: number
  growth: number
  glassdoorRating: number
  benefits: string[]
  culture: string[]
  interviewTips: string[]
  // Optional for backward compatibility
  salary?: string
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

  // Get salary range from roles or use legacy salary field
  const getSalaryDisplay = () => {
    if (company.salary) return company.salary
    
    if (company.roles && company.roles.length > 0) {
      const minSalary = Math.min(...company.roles.map(r => {
        const match = r.salaryRange.match(/₹?([\d.]+)/);
        return match ? parseFloat(match[1]) : 0;
      }))
      const maxSalary = Math.max(...company.roles.map(r => {
        const match = r.salaryRange.match(/₹?[\d.]+\s*-\s*([\d.]+)/);
        return match ? parseFloat(match[1]) : 0;
      }))
      
      if (minSalary && maxSalary) {
        return `₹${minSalary} - ${maxSalary} LPA`
      }
    }
    
    return 'Competitive Salary'
  }

  const getLocationDisplay = () => {
    if (company.locations && company.locations.length > 0) {
      return company.locations.slice(0, 2).join(', ') + 
             (company.locations.length > 2 ? ` +${company.locations.length - 2}` : '')
    }
    return 'Multiple Locations'
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
                {company.companySize && (
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Building className="h-3 w-3" />
                    <span>{company.companySize} employees</span>
                  </div>
                )}
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

          {/* Roles Section */}
          {company.roles && company.roles.length > 0 && (
            <div className="mb-4 p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  {company.roles.length} Open Role{company.roles.length > 1 ? 's' : ''}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {company.roles.slice(0, 3).map((role, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-background rounded-md border border-border"
                  >
                    {role.title}
                  </span>
                ))}
                {company.roles.length > 3 && (
                  <span className="text-xs px-2 py-1 text-muted-foreground">
                    +{company.roles.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2 text-sm text-emerald-600 font-medium">
                <MapPin className="h-4 w-4" />
                <span>{getLocationDisplay()}</span>
              </div>
              <div className="text-xs text-muted-foreground ml-6">
                {getSalaryDisplay()}
              </div>
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

          {/* Ratings Section */}
          {company.glassdoorRating && (
            <div className="flex items-center space-x-4 mb-4 text-xs">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                <span className="font-medium">{company.glassdoorRating}</span>
                <span className="text-muted-foreground">Glassdoor</span>
              </div>
              {company.workLifeBalance && (
                <div className="text-muted-foreground">
                  WLB: {company.workLifeBalance}/5
                </div>
              )}
              {company.growth && (
                <div className="text-muted-foreground">
                  Growth: {company.growth}/5
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {company.category}
              </span>
              {company.founded && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  Est. {company.founded}
                </span>
              )}
            </div>
            
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