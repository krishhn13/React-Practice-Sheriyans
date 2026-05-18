import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  // const getData = async () =>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response.data); 
  // }
  // async function getData(){ 
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

  //   console.log(response);
  // }
  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>
      <div>
        {data.map(function(elem, idx){
          return <h3>Hello {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App