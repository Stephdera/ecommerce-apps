import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem({product_item_prop}) {
  return (
    <div className=''>
        <div>
            <div className="p-3 bg-[#fff] card">
              <img src={product_item_prop.images[0].img} alt=""/>
                {/* <img src={`http://localhost:3000/${product_item_prop.images[0].img}`} alt=""/> */}
                <div className="card-body">
                    <h2 className='text-xl font-bold uppercase pt-3 pb-3'>{product_item_prop.name}</h2>
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

