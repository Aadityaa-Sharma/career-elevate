import React from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Check } from 'lucide-react'
import { Input } from '../../../shared/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../shared/components/ui/dropdown-menu'
import { Button } from '../../../shared/components/ui/button'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange
}) => {
  const categories = ['All', 'Service Based', 'Product Based', 'Startups']

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex-1 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 transition-colors group-focus-within:text-indigo-600" />
            <Input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-14 pr-5 h-14 text-base bg-white/95 backdrop-blur-sm border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="h-14 px-6 bg-white/95 backdrop-blur-sm border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg" style={{ backgroundColor: '#3A72EC' }}>
                    <Filter className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">
                    {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
                  </span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
              className="w-56 p-1.5 mt-2 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl"
              align="end"
            >
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className="relative flex items-center justify-between px-4 py-3 cursor-pointer rounded-lg transition-all duration-200 hover:bg-indigo-50 focus:bg-indigo-50"
                >
                  <span className="font-medium text-gray-700">
                    {category === 'All' ? 'All Categories' : category}
                  </span>
                  {selectedCategory === category ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="flex items-center justify-center w-5 h-5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #3A72EC 0%, #5B8DEF 100%)' }}
                    >
                      <Check className="h-3 w-3 text-white stroke-[3]" />
                    </motion.div>
                  ) : (
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </div>
    </div>
  )
}

export default SearchBar