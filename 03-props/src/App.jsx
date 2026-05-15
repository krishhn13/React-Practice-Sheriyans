import React from 'react'
import Card from "./components/Card"

const App = () => {
  return (
    <>
      <Card user="Krishan" age={20} img="https://images.unsplash.com/photo-1687560466164-1eeddb3b119b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Hero" age={22} img="https://images.unsplash.com/photo-1638443523564-46b8a648c5a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </>
  )
}

export default App