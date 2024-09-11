import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import EcomContext from '../../context/EcomContext';

function ProductCart() {
    const { cartItems, calculateSubTotal, calculateVat, calculateTotalAmount, removeCartItems, updateCartItems } = useContext(EcomContext);
  return (
    <> 
         <Link to="/">
            <button class="button">
               <i class="fa-solid fa-arrow-left"></i>
              <div class="text">
                Continue Shopping
              </div>

            </button>
         </Link>
     <div className='cart flex space-x-4'>
        {/* <div className="container ml-[5rem] my-24"> */}
            {/* <div className='bg-black'> */}
                 <div className="p-4 table shadow-l rounded bg-white ml-[2rem] mr-[1rem] my-24">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Product Image</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.products?.map((item, index) => (
                                    <tr key={index}>
                                    <td>{item.product?.name}</td>
                                    <td className='flex align-center justify-center'><img src={item.product?.images[0].img} width="50px" alt="" /></td>
                                    <td>${item.product?.price}</td>
                                    <td>${item.amount}</td>
                                    <td>
                                        <input type="number" onChange={(e) => updateCartItems(item.product._id, e.target.value)} min={1} value={item.quantity} id="" className='w-[3.3rem] pl-[10px]  py-2 appearance-none bg-transparent outline-none'/>
                                    </td>
                                    <td>
                                        <button type="submit" onClick={() => removeCartItems(item.product._id)}><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                                ))}   
                            </tbody>
                        </table>
                        {/* <table>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className=''>Subtotal: ${calculateSubTotal()}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className=''>VAT (7.5%): ${calculateVat()}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className=''>Total: ${calculateTotalAmount()}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                <td className=''><Link to="/checkout" className='product-btn p-2 text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6]'>Checkout ({calculateTotalAmount()})</Link></td>
                                </tr>
                            </tbody>
                         </table> */}
                 {/* </div> */}
            {/* </div> */}
        </div>
         <div className='grey my-8 '>
            <h2 className='font-bold text-xl text-black-500 ml-[3rem] mr-[2rem] mt-[8px]'>Payment Summary</h2>
            <hr/>
            <br/>
            <br/>
            <table>
                <tbody>
                    <tr>
                        {/* <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> */}
                        <td className=''>Subtotal:  ${calculateSubTotal()}</td>
                    </tr>
                    <br/>
                    <tr>
                        {/* <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> */}
                        <td className=''>VAT (7.5%):  ${calculateVat()}</td>
                    </tr>
                    <br/>
                    <hr />
                    <tr>
                        {/* <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> */}
                        <td className='font-semibold pt-[10px] pb-[10px]'>Total:  ${calculateTotalAmount()}</td>
                    </tr>
                    <hr/>
                    <p className='text-red-300 text-sm mt-[0.5rem] ml-[7.1rem] font-sans-serif'>Excluding delivery charges</p>
                    <br/>
                    <tr>
                        {/* <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> */}
                        <td className=''><Link to="/checkout" className='product-btn p-2 ml-[50px] text-[#fff] rounded-md capitalize bg-[#502274] hover:bg-[#A42CD6]'>Checkout (${calculateTotalAmount()})</Link></td>
                     </tr>
                    </tbody>
                </table>
                <br />
                <hr/>
                <div className='ml-4 text-gray-400 text-sm mt-2 space-x-4 flex'>
                    <div className='mt-2'>
                        We accept:
                    </div>
                    <div className='svg flex '>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="35" viewBox="0 0 48 48">
                                   <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
                                </svg>  
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="35" viewBox="0 0 48 48">
                      <path fill="#1565C0" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"></path><path fill="#039BE5" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"></path><path fill="#283593" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="35" viewBox="0 0 48 48">
                        <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                    </svg>
                    </div>
                </div>
                <h2 className='text-sm ml-2 text-nowrap text-gray-400 mt-2'><span><i class="fa-solid fa-lock"></i></span> Transactions are 100% safe & secure</h2>
                
            </div>
        </div>
    </>
  )
}

export default ProductCart;
