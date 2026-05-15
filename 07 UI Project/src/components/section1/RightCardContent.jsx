import React from 'react'

const RightCardContent = (props) => {
        return (
                <div className='absolute top-0 left-0 h-full w-full p-8 flex rounded-4xl flex-col flex-nowrap shrink-0 overflow-x-auto justify-between'>
                        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-xxl font-semibold'>
                                {props.idx}
                        </h2>
                        <div>
                                <p className='text-lg leading-relaxed text-white mb-10'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quasi laudantium tempore natus expedita pariatur?
                                </p>
                                <div className='flex justify-between mt-4'>
                                        <button className='bg-blue-700 rounded-full px-6 py-2 font-medium text-lg text-white'> {props.tag}</button>

                                        <button className='bg-blue-700 rounded-full px-4 py-2 font-semibold text-lg text-white'>
                                                <i className="ri-arrow-right-line"></i>
                                        </button>
                                </div>
                        </div>
                </div>

        )
}

export default RightCardContent