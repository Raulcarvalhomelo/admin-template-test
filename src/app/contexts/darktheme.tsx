"use client"
import { createContext, useState, useEffect, useContext } from 'react'

type Themes = '' | 'dark'

interface DarkContextProps {
  theme?: Themes
  setTheme?: () => void
}

export const DarkContext = createContext<DarkContextProps>({})

export function DarkWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Themes>('')

  // Na montagem do componente, leia o tema do localStorage e atualize o estado
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    setTheme(localTheme === 'dark' ? 'dark' : '')
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'dark' ? '' : 'dark'
    setTheme(newTheme)
    // Quando o tema é alterado, salve-o no localStorage
    window.localStorage.setItem('theme', newTheme)
  }

  return (
    <DarkContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {children}
    </DarkContext.Provider>
  )
}

export function useDarkContext() {
  return useContext(DarkContext)
}
