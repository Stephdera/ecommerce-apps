import React from 'react'

function EmailInput() {
  return (
    <>
       <div className='place-items-center min-h-screen'>
          <img src="" alt="" />
          <h1 className='font-bold text-xl text-center'>Recover Password</h1>
          <p className='text-gray-500 text-sm text-center mb-6'>You can request a password reset below. We will send a security code to the email address, please make sure it is correct.</p>
          <div>
             <form action="">
                <div>
                    <input type="email" name="" id="" placeholder='Enter Email' className='px-8 focus:border-hidden focus:outline-none w-[100%]'/>
                </div>
                <div>
                    <button type="submit" className='bg-violet-500 mt-6 text-white w-full py-2 px-8 rounded-md font-semibold text-center'>Request Password Reset</button>
                </div>
             </form>
          </div>
          <p className='text-gray-500 text-center text-sm mt-6'>For further support, you may visit the Help Center or contact our customer service team.</p>
          <p className='text-center'>Star Stores</p>
       </div>
    </>
  )
}

export default EmailInput;
