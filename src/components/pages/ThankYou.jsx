import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import EcomContext from '../../context/EcomContext';

function ThankYou() {
    const { createOrder, order, isAuthenticated} = useContext(EcomContext);
    const [searchParams] = useSearchParams();
    const tx_ref = searchParams.get("tx_ref");
    const transaction_id = searchParams.get("transaction_id");

    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }
    useEffect(() => {
        if(transaction_id && tx_ref) {
            createOrder(transaction_id, tx_ref);
        }
    }, [])

  return (
    <>
      <div className='mx-auto max-w-md display pb-32 pt-32 space-y-8 thank'>
        <div class="div_image_v">
            <div class="image">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div> 
        </div> 
         
         <div>
         <div className='font-bold text-2xl'>
            <h1>Thank you, {order?.firstName} {order?.lastName}</h1>
         </div>
          <div className='space-y-2'>
              <p>Thank you {order?.firstName} for shopping on Star Stores. Your order #12345678 has been confirmed successfully.</p>
              <p>Your package will be packed and shipped within 7 days of your purchase. You will receive a notification from us once the item(s) are ready for delivery.</p>
          </div>
          <button className=''>
             <Link to="/">Home</Link>
          </button>
         </div>
      </div>
    </>
  )
}

export default ThankYou;
