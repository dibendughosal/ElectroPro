import React from 'react'
import Gadgets from './Gadgets'
import img1 from "../assets/Category/cam.jpeg"
import img2 from "../assets/Category/macbook.jpeg"
import img3 from "../assets/Category/mobile.webp"
import img4 from "../assets/Category/pods.jpeg"
import img5 from "../assets/Category/tab.jpeg"
import img6 from "../assets/Category/tv.jpeg"
import img7 from "../assets/Category/watch.jpeg"
import img8 from "../assets/Category/x-box.jpeg"

function Category() {
  return (
    <div className='w-full py-10'>
      <div className='w-[80%] mx-auto flex flex-col items-center'>
        <h1>Shop by Category</h1>
        <div className='flex gap-x-5 justify-between'>
            <Gadgets src={img1} paragraph="Restored Cell PhoneS"/>
            <Gadgets src={img5} paragraph="Restored tablets"/>
            <Gadgets src={img8} paragraph="Restored Computer"/>
        </div>
      </div>
    </div>
  )
}

export default Category
