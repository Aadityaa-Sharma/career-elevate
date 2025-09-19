import React, { useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/company-prep/hooks/useTheme'
import { Button } from '@/company-prep/components/ui/button'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  // Ensure default theme is light
  useEffect(() => {
    if (!theme) setTheme('light')
  }, [theme, setTheme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-2xl"
      title={`Theme: ${theme || 'light'}`}
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  )
}

export default ThemeToggle
