import React from 'react'
import {Link} from 'react-router-dom'
function Item( {button,desc, heading, src} ) {
  return (
    <div className='w-[70%] flex gap-x-5 justify-between mx-auto pt-20'>
      <img src={src} alt={heading} className='h-[281px] object-cover mb-4' />
      <div className='space-y-5'>
        <div className='font-bold text-red-600 text-3xl font-[900]'>{heading}</div>
        <h1 className='text-justify'>{desc}</h1>
        <Link to="/product">
        <button className='px-4 py-2 bg-red-600 font-bold text-white rounded-3xl cursor-pointer hover:bg-white hover:text-red-600 hover:border transition-all ease-in duration-200 origin-bottom'>{button}</button></Link>
      </div>
    </div>
  )
}

export default Item
