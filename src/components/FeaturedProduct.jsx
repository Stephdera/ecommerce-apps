import React, { useContext } from 'react'
import ProductItem from './ProductItem';
import EcomContext from '../context/EcomContext';

function FeaturedProduct() {
 const {featuredProduct} = useContext(EcomContext);
  return (
    <div className='bg-gray-500 mb-[0]'>
        <h1 className='text-2xl my- mx-24 uppercase italic font-bold font-serif text-center mt-[0] pt-12'>Featured Product</h1>
        <div className="container max-w-6xl mt-12 mb-[0] pb-12 m-auto">
            <div className='grid grid-cols-1 md:grid-cols-5 gap-3'>
                {featuredProduct.map((items, index) => (
                    <ProductItem key={index} product_item_prop={items}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedProduct;
