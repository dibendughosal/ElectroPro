import React, { useState } from 'react'
import { Link } from 'react-router';
import logo from "../assets/logoicon.png"
function Navbar() {
   const [isLogin, setIsLogin] = useState(false);
   const [cartValue, setcartValue] = useState(0);
   const handleLogin = ()=> {
    setIsLogin(true);
   }
   const handleLogout = ()=> {
    setIsLogin(false)
   }
  return (
    <div className='py-4 w-full flex justify-between px-14 items-center bg-black text-white border-b-2 border-b-amber-50'>
      <Link to="/" className='h-8 flex flex-col justify-center items-center'>
        <div className='h-full flex'>
          <img src={logo} alt="" className="h-full invert" />
          <h1 className='font-bold pt-2 pl-1 text-red-600 text-xl'>PRO</h1>
        </div>
        <h1 className='text-[10px] font-serif tracking-widest font-light'>ElectroPro</h1>
      </Link>
      <div className='flex gap-5'>
        <Link to="/home" className='NavStyle group'>Home
        <div className='underLine'></div>
        </Link>
        <Link to="/product" className='NavStyle group'>Product
        <div className='underLine'></div>
        </Link>
        <Link to="/cart" className='NavStyle group relative'>Cart
        <div className='underLine'></div>
        <div className='absolute -top-2 -right-3.5 font-medium px-1 text-[13px] bg-red-600 group-hover:text-white'>{cartValue}</div>
        </Link>
        <Link to="/contact" className='NavStyle group'>Contact Us
        <div className='underLine'></div>
        </Link>
        
      </div>
      <div className="font-bold border border-amber-200 px-5 py-2 rounded-3xl bg-red-700 hover:text-red-700 hover:bg-white cursor-pointer">
        {isLogin ? <button onClick={handleLogout} className='cursor-pointer'>Logout</button>: <button onClick={handleLogin} className='cursor-pointer'>Login</button>}
      </div>
      
    </div>
  )
}

export default Navbar
