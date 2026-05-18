import React from 'react'

const App = () => {
  const arr = [{
    user : 'Krishan', 
    age : 20,
    location : 'ambala'
  }]
  {
    arr.map(function(elem, idx){
      localStorage.setItem(elem.user, JSON.stringify(elem));
    })
  }
  return (
    <div>App</div>
  )
}

export default App