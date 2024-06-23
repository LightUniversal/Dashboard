import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <div className=' justify-center flex relative top-8'>
        <Link to={"/login"} className='bg-green-300 px-10 font-medium py-4 rounded-md mx-3'>login</Link>
    </div>
  )
}

export default Logout