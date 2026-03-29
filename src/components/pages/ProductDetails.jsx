import React, { useContext, useEffect,useState } from 'react'
import EcomContext from '../../context/EcomContext';
import { useNavigate, useParams } from 'react-router-dom';
import ProductImages from '../ProductImages';
import { Link } from 'react-router-dom';

function ProductDetails() {
  const {product, addToCart, updateCartItems, cartItems, fetchCart, removeCartItems} = useContext(EcomContext);
  const [quantity, setQuantity] = useState(0);

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


  useEffect(() => {
  fetchCart(); // Fetch cart only once when the component mounts
  }, []); // Empty dependency array ensures it runs only once

  useEffect(() => {
  if (cartItems?.products) {
    const cartItem = cartItems.products.find((item) => item.product._id === productItems?._id);
    setQuantity(cartItem ? cartItem.quantity : 0);
  }
  }, [cartItems, productItems]); // Only runs when `cartItems` or `productItems` change



  const handleAddToCart = () => {
  addToCart(productItems._id, 1, productItems);
  setQuantity(1); // Set initial quantity
};

    const handleIncrease = () => {
  setQuantity((prevQuantity) => {
    const newQuantity = prevQuantity + 1;
    updateCartItems(productItems._id, newQuantity); // Use updateCartItem
    return newQuantity;
  });
};

const handleDecrease = () => {
  if (quantity > 1) {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      updateCartItems(productItems._id, newQuantity); // Use updateCartItem
      return newQuantity;
    });
  } else {
    setQuantity(0);
    // updateCartItems(productItems._id, 0); 
    removeCartItems(productItems._id); // Remove item if quantity reaches 0
  }
};





  
  return (
    <div>
        <div className='container max-w-5xl mx-auto my-24'>
         <h1 className='text-2xl my-5 uppercase font-bold text-center '>{productItems?.name} Detail</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 align-center justify-center'>
              <div>
                <img src={selectedImages} width="300px" alt="" className='h-[50vh] rounded-2xl'/>
              </div>
              <div>
                  <div className="card-body">
                      <h2 className='text-xl font-bold uppercase pt-3 pb-3'>{productItems?.name}</h2>
                      <h5 className='text-xl font-bold uppercase pt-3 pb-3'>${productItems?.price}</h5>
                      <p className='pb-5'>{productItems?.description}.</p>
                      {/* <button onClick={() => addToCart( productItems._id, 1, productItems )} type="submit" className='product-btn p-2 text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6]'>Add to Cart <i class="fa-solid fa-cart-plus"></i></button> */}
                      { quantity === 0 ? (<button onClick={handleAddToCart} type="submit" className='product-btn p-2 text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6]'>Add to Cart <i class="fa-solid fa-cart-plus"></i></button>) : (
                        <div className='flex items-center gap-3'>
                          <button 
                            onClick={handleDecrease} 
                            className='bg-[#502274] text-white px-3 py-1 rounded'
                          >-</button>
      
                          <span className='font-bold text-lg'>{quantity}</span>
      
                          <button 
                            onClick={handleIncrease} 
                            className='bg-[#502274] text-white px-3 py-1 rounded'
                          >+</button>
                        </div>
                      )}
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
