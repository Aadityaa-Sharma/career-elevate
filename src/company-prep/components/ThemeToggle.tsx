import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/company-prep/hooks/useTheme'
import { Button } from '@/company-prep/components/ui/button'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const next = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next as any)}
      className="rounded-2xl"
      title={`Theme: ${theme}`}
    >
      {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  )
}

export default ThemeToggle


