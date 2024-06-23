import React from 'react'
import { FaBars, FaEnvelope, FaHome, FaInfoCircle, FaSearch, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../Actions';

const Header = () => {

//   const user  = useSelector((state) => state.user);
//   console.log(JSON.parse(localStorage.getItem("user")).user);
const navigate = useNavigate();
const dispatch = useDispatch();



  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
    navigate("/logout")
  };

 
  return (
    <>
        {
        JSON.parse(localStorage.getItem("user")) ? (

            <div className=' flex justify-between items-center gap-3 bg-black text-white px-5 py-3'>
        <div></div>
        <div className="actions w-3/5 relative">
            <input type="search" className=' text-white w-full p-3 rounded-lg bg-transparent border-green-900 border outline-none' name="search" id="saerch" placeholder='Search' />
            <button className=' absolute items-center bg-green-900 text-slate-100 p-3 py-4 top-0 border border-green-900 rounded-r-lg flex gap-1 right-0 '>
                 <FaSearch className=' text-salte-100' />
            </button>
        </div>
        <div className="details flex justify-between gap-4">
            
            <Link onClick={handleLogout}  className='flex items-center gap-3'>
                Logout<FaSignInAlt className=' text-green-900' />
            </Link>
            <Link to={"/"}  className='flex items-center gap-3'>
                <FaHome className=' text-green-900' />
            </Link>
            
        </div>

    </div>
        ) : (
            <div className=' flex justify-between items-center gap-3 bg-black text-white px-5 py-3'>
            
            <div className="actions w-3/5 relative">
                <input type="search" className=' text-white w-full p-3 rounded-lg bg-transparent border-green-900 border outline-none' name="search" id="saerch" placeholder='Search' />
                <button className=' absolute items-center bg-green-900 text-slate-100 p-3 py-4 top-0 border border-green-900 rounded-r-lg flex gap-1 right-0 '>
                     <FaSearch className=' text-salte-100' />
                </button>
            </div>
            <div className="details flex justify-between gap-4">
                <Link to={"/login"} className='flex login items-center gap-3 border border-green-900 p-2 rounded-lg'>
                    Login<FaSignInAlt className='  text-green-900' />
                </Link>
                <Link to={"/register"} className='flex login items-center gap-3 border border-green-900 p-2 rounded-lg'>
                    Register<FaSignInAlt className='  text-green-900' />
                </Link>
                
                
            </div>
    
        </div>
        )
    }
    </>
    
    
  )
}

export default Header;
