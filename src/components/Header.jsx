import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import EcomContext from '../context/EcomContext';

function Header() {
   const [ open, setOpen] = useState(false);
   const { deleteItem } = useLocalStorage("auth-token");
   const [ state, dispatch ] = useContext(AuthContext);
   const redirect = useNavigate();
   const { isAuthenticated, showHide, cartItems } = useContext(EcomContext);


   const logout = (e) => {
      e.preventDefault();
      dispatch({ type: "setToken", payload: null})
      deleteItem("auth-token");
      redirect("/login");
      showHide("success", "You are now logged out!...")
   }
  return (
      <> 
         <div className='bg-black text-[#fff] sticky top-0 z-[20] flex justify-between items-center py-[10px] px-[50px] header'>      
            <div className="flex-1">
               <a href="" className='flex'>
                  <h1 className='text-left text-[#fff] mt-[6px] mr-6'>STAR STORES</h1>
                  <img src="/img/Star logo.jpg" alt="" width="60px" className='rounded-full'/>
               </a>
            </div>
             {/* First Navigation */}
            <nav className=" hidden lg:flex space-x-8 text-white text-[16px] navbar">
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               {isAuthenticated ? (<>
                  {/* <Link onClick={logout}>Logout</Link> */}
               {/* mine */}
               <div className='dropDown'>
                  <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 
                    text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid fa-user"></i> <p className='ml-2'>Hi, Stephanie</p> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" 
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                   </svg></button>
                  <ul className='contents text-sm py-2 px-4'>
                     <li className="px-6 py-2"><i class="fa-solid fa-user mr-2"></i> account</li>
                     <li className="px-6 py-2">order</li>
                     <li className="px-6 py-2"><i class="fa-solid fa-envelope mr-2"></i>inbox</li>
                     <li className="px-6 py-2"><Link onClick={logout}>Log Out</Link></li>
                  </ul>
               </div>
               {/* mine done */}
               </>) : (<>
                  <Link to="/login">Login</Link>
                  <Link to="/sign">Sign up</Link>
               </>)} 
               <Link to="/cart" className='relative'><i className="fa-solid fa-cart-shopping"></i>
               <div className='absolute bottom-6 left-4 text-white bg-blue-950 text-center rounded-full h-6 w-6 text-[15px]'>
                  {cartItems.products?.length}
               </div>
               </Link>
            </nav>
            {/* First Nav done */}
            <button 
              type="button"
              className="flex justify-end lg:hidden items-center w-[35px] h-[35px]"
              onClick={() => setOpen(!open)}
            >
               <i className="fa-solid fa-bars"></i>
            </button>
            {/* Second Nav (Mobile) */}
            <div className={`fixed lg:hidden top-0 left-0 w-[300px] h-screen overflow-auto bg-[red] z-[30] transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"}`}>
               {/* XMark for closing */}
               <button className='absolute top-5 right-5 text-3xl text-black'
               onClick={() => setOpen(!open)}>
                  <i className="fa-solid fa-xmark"></i>
               </button>
               <nav onClick={() => setOpen(open)} className='flex flex-col gap-5 text-center text-black pt-20 px-10 text-[25px]'>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  {isAuthenticated ? (<>
                     <Link onClick={logout}>Logout</Link>
                     {/* expriment */}
               <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><i class="fa-solid fa-user"></i> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

               {/* <!-- Dropdown menu --> */}
               <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
               <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                 <li>
                   <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                 </li>
                 <li>
                   <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                 </li>
                 <li>
                   <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                 </li>
                 <li>
                   <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                 </li>
               </ul>
           </div>
                  </>) : (<>
                     <Link to="/login">Login</Link>
                     <Link to="/sign">SignUp</Link>
                  </>)}  
                     <Link to="/cart"> <i className="fa-solid fa-cart-shopping"></i>
                  <div className='absolute bottom-6 left-4 text-white bg-blue-950 text-center rounded-full h-6 w-6 text-[15px]'>
                  {cartItems.products?.length}
                  </div>
                  </Link>
               </nav>
            </div>
            {/* Second Nav done */}
         </div>
      </>
  )
}

export default Header;
