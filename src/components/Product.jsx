import React, { useContext } from 'react'
import ProductItem from './ProductItem';
import EcomContext from '../context/EcomContext';

function Product() {
  const { product } =useContext(EcomContext);
  return (
    <div className='bg-gray-500 pep'>
        <div className="container max-w-6xl mt-12 mb-24 ml-[4rem] mr-[2rem]">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1 space-x-2 space-y-8'>
                {product.map((items, index) => (
                    <ProductItem key={index} product_item_prop={items}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Product;
