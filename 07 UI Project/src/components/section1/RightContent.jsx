import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  const arr = props.users;

  arr.map((user) => {
    console.log(user.img);
  });

  return (
    <div className='h-full w-2/3 p-6 flex flex-nowrap  justify-between gap-10 shrink-0 overflow-x-auto'>
      {arr.map((user, index) => (
        <RightCard key={index} img={user.img} tag = {user.tag} idx = {index+1}/>
      ))}
    </div>
  )
}

export default RightContent