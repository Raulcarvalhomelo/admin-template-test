"use client"
import { createContext,useState,useContext } from 'react'

type  Themes= ''|'dark'

interface DarkContextProps{
  theme?:Themes
  setTheme?:()=> void
}

export const DarkContext = createContext<DarkContextProps>({})

export function DarkWrapper({children}:{
  children:React.ReactNode;}){
    const [theme,setDarkTheme] = useState<Themes>('')
    
    function setTheme(){
        setDarkTheme(theme==='dark' ? '':'dark')
    }
    return(
        <DarkContext.Provider value={{theme,setTheme}}>
            {children}
        </DarkContext.Provider>
    )
}

export function useDarkContext(){
  return useContext(DarkContext)  
}