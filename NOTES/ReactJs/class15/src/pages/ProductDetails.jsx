import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const productData= useContext(ProductDataContext)

    const {productId} =useParams()

    if (!productData.length) return <h1>Loading...</h1>

    const selectedProduct= productData.find((elem)=> elem.id==Number(productId))


  return (
    <div className='bg-zinc-400 h-screen'>
        <div className='top-1/3 left-1/2 -translate-1/2 absolute'>
            <img 
            className='px-29 object-cover object-top h-100 mt-45' 
            src={selectedProduct.image} />
            <h2 
            className='font-bold px-20 text-xl mt-15'>{selectedProduct.title}</h2>
        </div>
    </div>
  )
}

export default ProductDetails