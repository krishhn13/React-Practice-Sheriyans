import React from 'react'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    if(theme==='light') {
      setTheme('Dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <div className={theme === 'light'
      ? 'bg-white text-black h-screen'
      : 'bg-black text-white h-screen'}>
      App
      <br />
      <button className='px-5 py-2 bg-red-500 rounded-full cursor-pointer active:scale-95' onClick={changeTheme}>
        Click me to change the theme
      </button>
    </div>
  )
}

export default App