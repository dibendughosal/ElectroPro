import React from 'react'
import ProductItem from '../components/ProductItem'
import productData from '../data/productData'

function Product() {
  return (
    <div>
     {
      productData.map( (data) => {
        return <div key={data.id}>
          <ProductItem 
          brandname={data.brandName}
          />
        </div>
      })
     } 
    </div>
  )
}

export default Product
