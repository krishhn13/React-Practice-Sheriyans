import React from 'react'
import Card from "./components/Card"

const App = () => {
  const age = 20
  return (
    <>
    <div id = "card">
      <h1>
        Krishan Kumar Sah, {age}
      </h1>
      Lorem ipsum dolor sit amet   consectetur, adipisicing elit. Mollitia sit deleniti harum eaque illo quos provident hic, accusantium tenetur eum corporis est et placeat quisquam voluptates possimus voluptate beatae veniam.
    </div>
    <div id = "card">
      <h1>
        Krishan Kumar Sah
      </h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia sit deleniti harum eaque illo quos provident hic, accusantium tenetur eum corporis est et placeat quisquam voluptates possimus voluptate beatae veniam.
    </div>
    {Card()}
    </>
  )
}

export default App