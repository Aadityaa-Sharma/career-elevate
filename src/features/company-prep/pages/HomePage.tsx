import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SearchBar from '../components/SearchBar'
import CompanyCard from '../components/CompanyCard'
import DailyChallenge from '../components/DailyChallenge'
import companiesData from '../data/companies.json'

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [favorites, setFavorites] = useState<number[]>([])

  const companies = companiesData.companies

  const filteredCompanies = useMemo(() => {
    return companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || company.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [companies, searchTerm, selectedCategory])

  const handleCompanyClick = (companyId: number) => {
    navigate(`/company-prep/company/${companyId}`)
  }

  const handleToggleFavorite = (companyId: number) => {
    setFavorites(prev => 
      prev.includes(companyId) 
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Master Your <span className="text-primary">Placement Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive preparation resources for top companies. Practice, learn, and ace your interviews with personalized guidance.
          </p>
        </motion.div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-card rounded-2xl shadow-md p-6 text-center border">
                <div className="text-3xl font-bold text-primary mb-2">{companies.length}+</div>
                <div className="text-base text-muted-foreground">Companies</div>
              </div>
              <div className="bg-card rounded-2xl shadow-md p-6 text-center border">
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-base text-muted-foreground">Practice Questions</div>
              </div>
              <div className="bg-card rounded-2xl shadow-md p-6 text-center border">
                <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                <div className="text-base text-muted-foreground">Success Rate</div>
              </div>
            </motion.div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">
                Featured Companies ({filteredCompanies.length})
              </h2>
              {filteredCompanies.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-muted-foreground text-lg">
                    No companies found matching your criteria.
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredCompanies.map((company, index) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CompanyCard
                        company={company}
                        onClick={handleCompanyClick}
                        isFavorite={favorites.includes(company.id)}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <DailyChallenge />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage


