import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
        <div>
            <h1>{product?.name}</h1>
            <img src={product.image} alt="" />
        </div>
    </div>
  )
}

export default ProductCard