import React, { useContext } from 'react'
import ProductItem from './ProductItem';
import EcomContext from '../context/EcomContext';

function TopSelling() {
  const { topSellingProduct } = useContext(EcomContext);
  return (
    <div className='bg-gray-500 mt-[0]'>
    <h1 className='text-2xl my- uppercase italic font-serif font-bold text-center pb-8 pt-10'>Top Selling Product</h1>
    <div className="container max-w-6xl mt-[0] mb-[0] pb-12 m-auto">
        <div className='grid grid-cols-1 md:grid-cols-5 gap-3 mt-12'>
            {topSellingProduct.map((items, index) => (
                <ProductItem key={index} product_item_prop={items}/>
            ))}
        </div>
    </div>
</div>
  )
}

export default TopSelling;
