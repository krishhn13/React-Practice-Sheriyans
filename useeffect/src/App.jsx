import React, {useState, useEffect} from 'react'

const App = () => {
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(()=>{
    console.log("useEffect called");
  }, [num2])
  return (
    <div>
      <h2>
        num1 = {num1}
        <br />
        num2 = {num2}
      </h2>
      <button
      onMouseEnter={()=>{
        setnum1(num1+1)
      }}
      onMouseLeave={()=>{
        setnum2(num2+100)
      }}
      >
        Hover
      </button>
    </div>
  )
}

export default App