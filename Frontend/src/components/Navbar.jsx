import React, { useState } from 'react'
import { Link } from 'react-router';
import logo from "../assets/logoicon.png"
function Navbar() {
   const [isLogin, setIsLogin] = useState(false);
   const handleLogin = ()=> {
    setIsLogin(true);
   }
   const handleLogout = ()=> {
    setIsLogin(false)
   }
  return (
    <div className='py-4 w-full flex justify-between px-14 items-center bg-black text-white border-b-2 border-b-amber-50'>
      <Link className='h-8 flex flex-col justify-center items-center'>
        <div className='h-full flex'>
          <img src={logo} alt="" className="h-full invert" />
          <h1 className='font-bold pt-2 pl-1 text-red-600 text-xl'>PRO</h1>
        </div>
        <h1 className='text-[10px] font-serif tracking-widest font-light'>ElectroPro</h1>
      </Link>
      <div className='flex gap-4'>
        <Link to="/home" className='font-bold text-lg group hover:text-red-600 transition-all duration-200 hover:scale-[1.02]'>Home
        <div className='w-full h-1 rounded-2xl transition-transform duration-200 ease-in hidden group-hover:flex origin-left bg-white'></div>
        </Link>
        <Link to="/product" className='font-bold text-lg group hover:text-red-600 hover:scale-[1.02]'>Product
        <div className='w-full h-1 rounded-2xl transition-all duration-200 ease-in hidden group-hover:flex bg-white'></div>
        </Link>
        <Link to="/cart" className='font-bold text-lg group hover:text-red-600 hover:scale-[1.02]'>Cart
        <div className='w-full h-1 rounded-2xl transition-all duration-200 ease-in hidden group-hover:flex bg-white'></div>
        </Link>
        <Link to="/contact" className='font-bold text-lg group hover:text-red-600 hover:scale-[1.02]'>Contact Us
        <div className='w-full h-1 rounded-2xl transition-all duration-200 ease-in hidden group-hover:flex bg-white'></div>
        </Link>
        
      </div>
      <div className="font-bold border border-amber-200 px-5 py-2 rounded-3xl bg-red-700 hover:text-red-700 hover:bg-white cursor-pointer">
        {isLogin ? <button onClick={handleLogout} className='cursor-pointer'>Logout</button>: <button onClick={handleLogin} className='cursor-pointer'>Login</button>}
      </div>
      
    </div>
  )
}

export default Navbar
