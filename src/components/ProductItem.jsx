import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem({product_item_prop}) {
  return (
    <div className=''>
        <div>
            <div className="bg-[#fff] card">
              <img src={product_item_prop.images[0].img} alt="" className='rounded-t-2xl'/>
                <div className="card-body pb-4 px-3">
                    <h2 className='text-xl font-bold uppercase pt-2 pb-2'>{product_item_prop.name}</h2>
                    <h5 className='text-xl font-bold uppercase pt-1 pb-3'>${product_item_prop.price}</h5>
                    <p className='pb-5 text-sm'>{product_item_prop.description}</p>
                    <Link to={`/details/${product_item_prop.name}`} className='product-btn p-2 text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6] '>See More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem;

