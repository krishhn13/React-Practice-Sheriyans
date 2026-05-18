import React from 'react'

const Card = (props) => {
  return (
    <>
    
    <div className='w-64 h-64 border-4 rounded-xl p-5 flex flex-col gap-4 bg-gray-900'>
      <h2 className='text-2xl font-bold break-words'>
        {props.title}
      </h2>
      <p className='overflow-auto break-words'>
        {props.content}
      </p>
    </div>
    </>
  )
}

export default Card