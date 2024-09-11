import React, { useContext, useEffect,useState } from 'react'
import EcomContext from '../../context/EcomContext';
import { useNavigate, useParams } from 'react-router-dom';
import ProductImages from '../ProductImages';
import { Link } from 'react-router-dom';

function ProductDetails() {
  const {product, addToCart} = useContext(EcomContext);
  const params = useParams();
  // const redirect = useNavigate();
  const showItems = params.name 
  const productItems = product.find((items) => items.name === showItems);
  // const showItems = params.id
  // const productItems = product.find((items) => parseInt(items.id) === parseInt(showItems))
  const [ selectedImages, setSelectedImages ] = useState(productItems?.images?.[0].img)

  useEffect(() => {
    setSelectedImages(productItems?.images?.[0].img)
  },[productItems])
  return (
    <div>
        <div className='container max-w-5xl mx-auto my-24'>
         <h1 className='text-2xl my-5 uppercase font-bold text-center '>{productItems?.name} Detail</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 align-center justify-center'>
              <div>
                <img src={selectedImages} width="300px" alt="" className='h-[50vh] rounded-2xl'/>
                  {/* <img src={`http://localhost:3000/${productItems.img}`} alt="" /> */}
                  {/* <img src={`http://localhost:3000/${selectedImages}`} width="300px" alt="" className='h-[50vh] rounded'/> */}
              </div>
              <div>
                  <div className="card-body">
                      <h2 className='text-xl font-bold uppercase pt-3 pb-3'>{productItems?.name}</h2>
                      <h5 className='text-xl font-bold uppercase pt-3 pb-3'>${productItems?.price}</h5>
                      <p className='pb-5'>{productItems?.description}.</p>
                      <button onClick={() => addToCart( productItems._id, 1, productItems )} type="submit" className='product-btn p-2 text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6]'>Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
                      {/* <button onClick={() => addToCart({ ...productItems, quantity: 1 })} type="submit" className='product-btn p-2 text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6]'>Add to Cart <i class="fa-solid fa-cart-plus"></i></button> */}
                  </div>
                  {/*  */}
                      <ProductImages images={productItems?.images} setSelectedImages={setSelectedImages}/>
                  {/*  */}
              </div>
         </div>
        </div>
    </div>
  )
}

export default ProductDetails;
