import React from 'react'
import { FaBars, FaEnvelope, FaInfoCircle, FaSearch, FaSignInAlt, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className=' flex justify-between items-center gap-3 bg-black text-white px-5 py-3'>
        <div className="bar">
            <FaBars className='text-4xl text-green-900 rounded-full p-1' />
        </div>
        <div className="actions w-3/5 relative">
            <input type="search" className=' w-full p-3 rounded-lg bg-transparent border-green-900 border outline-none text-black' name="search" id="saerch" placeholder='Search' />
            <button className=' absolute items-center bg-white text-blue-800 p-3 top-0 border border-green-900 rounded-r-lg flex gap-1 right-0 '>
                Search <FaSearch className=' text-blue-600' />
            </button>
        </div>
        <div className="details flex justify-between gap-4">
            <button className='flex login items-center gap-3 border border-green-900 p-2 rounded-lg'>
                Login<FaSignInAlt className='  text-green-900' />
            </button>
            <button className='flex items-center gap-3'>
                Logout<FaSignInAlt className=' text-green-900' />
            </button>
            <button className='flex items-center gap-3 p-2 rounded-md border border-green-900'>
                Admin<FaUserAlt className=' text-green-900' />
            </button>
        </div>

    </div>
  )
}

export default Header;
