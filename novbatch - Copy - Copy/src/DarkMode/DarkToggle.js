import React, { useContext } from 'react'
import { ThemeContext } from './DarkContext'
export default function DarkToggle() {
    const {isDark,DarkToggler} = useContext(ThemeContext)
  return (
    <div>
        <label>
            <input type="checkbox" 
            checked={isDark} 
            onChange={DarkToggler}/>
        </label>
    </div>
  )
}
