import React from 'react'

const App = () => {
  function btnClicked() {
    console.log("Clicked");
  }
  return (
    <div>
      <button onClick={btnClicked}>
        click
      </button>
    </div>
  )
}

export default App