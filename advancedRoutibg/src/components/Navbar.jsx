import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-amber-600 flex flex-wrap justify-between items-center px-5 py-3 rounded-b-2xl'>

            <h2 className='text-2xl font-bold'>
                Krishan
            </h2>

            <div className="flex flex-wrap gap-4 items-center text-lg font-bold">

                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/product'}>Product</Link>

                <button
                    className='bg-cyan-600 px-3 py-1 rounded text-blue-200 cursor-pointer active:scale-95'
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>

                <button
                    className='bg-cyan-600 px-3 py-1 rounded text-blue-200 cursor-pointer active:scale-95'
                    onClick={() => navigate(1)}
                >
                    Next
                </button>

            </div>
        </div>
    )
}

export default Navbar