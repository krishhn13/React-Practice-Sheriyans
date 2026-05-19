import React, { createContext } from 'react'


// create
export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <div>
        {/* provide */}
        <ThemeDataContext.Provider value = "Krishan">
                {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext