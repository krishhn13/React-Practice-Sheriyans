import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const btnClicked = () =>{
    navigate('/')
  }
  return (
    <>
  
    <div className="flex justify-center items-center min-h-screen">
      <br />
      <h1 className='text-5xl font-extrabold'>
        About
      </h1>
    </div>
    </>
  )
}

export default About