import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <div className='flex justify-center gap-10 items-center p-3'>
        <Link to={'/product/men'}>Men</Link>
        <Link to={'/product/women'}>Women</Link>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <h1 className='text-5xl font-extrabold'>
        </h1>
        <Outlet />
      </div>
    </>
  )
}

export default Product