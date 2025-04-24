import React from 'react'
import { Link } from 'react-router'

function SubNavbar() {
  return (
    <ul className='flex w-full justify-between text-lg'>
      <Link to=""><li className='px-4 hover:bg-black transition duration-200 cursor-pointer hover:font-semibold hover:text-white'>SE Series</li></Link>
      <Link><li className='px-4 hover:bg-black transition duration-200 cursor-pointer hover:font-semibold hover:text-white'>Pro Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>6 Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>7 Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>8 Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>X Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>11 Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>12 Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>13 Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>14 Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>15 Series</li></Link>
      <Link><li className='px-4 transition duration-200 cursor-pointer hover:bg-black hover:font-semibold hover:text-white'>16 Series</li></Link>
    </ul>
  )
}

export default SubNavbar
