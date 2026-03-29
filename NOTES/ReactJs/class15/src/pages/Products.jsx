import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

    const productData=useContext(ProductDataContext)

    let renderData=''

    if(productData.length>0){
        renderData= productData.map((elem,idx)=>{
            return <Link className='text-center bg-white block w-70 p-5 rounded' key={idx} to={`/products/${elem.id}`}>
            <div>
                <img className='h-50 px-8 object-cover object-top' src={elem.image} alt="" />
                <h2 className='font-bold text-xl'>{elem.title}</h2>
            </div>
            </Link>
        })
    }


  return (
    <div className='flex p-3 flex-wrap gap-5 bg-black'>
      {renderData}
    </div>
  )
}

export default Products