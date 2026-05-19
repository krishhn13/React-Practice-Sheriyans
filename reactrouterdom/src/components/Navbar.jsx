import React from 'react'
import  {Link} from 'react-router-dom'
const Navbar = () => {
        return (
                <div className = "bg-red-500 flex justify-between px-5 py-2">
                        <div className='font-bold text-3xl'>
                                Krishan
                        </div>
                        <div className='flex justify-between gap-10 text-2xl font-semibold'>
                                <Link to = {'/'}>Home</Link>
                                <Link to = {'/about'}>About</Link>
                                <Link to = {'/contact'}>Contact</Link>
                        </div>
                </div>
        )
}

export default Navbar