import React from 'react'
import Gadgets from './Gadgets'
import camera from "../assets/Category/cam.jpeg"
import macbook from "../assets/Category/macbook.jpeg"
import iphone from "../assets/Category/mobile.webp"
import pods from "../assets/Category/pods.jpeg"
import tab from "../assets/Category/tab.jpeg"
import tv from "../assets/Category/tv.jpeg"
import watch from "../assets/Category/watch.jpeg"
import xbox from "../assets/Category/x-box.jpeg"

function Category() {
  return (
    <div className='w-full py-8'>
      <div className='w-[80%] mx-auto flex flex-col gap-y-10 items-center'>
        <h1 className='font-bold text-4xl'>Shop by Category</h1>
        <div className='flex gap-x-5 gap-y-4 flex-wrap justify-between '>
            <Gadgets src={iphone} paragraph="Restored Cell Phones"/>
            <Gadgets src={tab} paragraph="Restored tablets"/>
            <Gadgets src={macbook} paragraph="Restored Computer"/>
            <Gadgets src={watch} paragraph="Restored Watches"/>
            <Gadgets src={pods} paragraph="Restored audio"/>
            <Gadgets src={xbox} paragraph="Restored Video Games"/>
            <Gadgets src={tv} paragraph="Restored TVs"/>
            <Gadgets src={camera} paragraph="Restored Cameras"/>
            
        </div>
      </div>
    </div>
  )
}

export default Category
