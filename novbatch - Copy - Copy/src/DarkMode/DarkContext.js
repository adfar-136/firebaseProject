import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

export default function DarkContext({children}) {
    const [isDark,setIsDark] = useState(false);
    const DarkToggler = ()=>{
        setIsDark((prevState)=> !prevState)
    }
  return (
    <ThemeContext.Provider value={{isDark,DarkToggler}}>
       {children}
    </ThemeContext.Provider>
  )
}
export {ThemeContext}