import React from 'react'
import Hero from './Hero'
import Arrow from './Arrow'

const LeftContent = () => {
        return (
                <div className='h-full w-1/3 flex flex-col justify-between py-2 px-2'>
                     <Hero/>
                     <Arrow/>
                </div>
        )
}

export default LeftContent