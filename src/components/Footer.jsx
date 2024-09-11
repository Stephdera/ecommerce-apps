import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
       <div>
           <div className='w-full bg-[#000] text-[#fff] p-3 pl-24'>
               <div className='container p-3'>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                          <div>
                             <h2 className='text-lg font-bold uppercase'>STAR Stores</h2>
                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda dolorum ipsa eos mollitia, qui aut!</p>
                          </div>
                          <div className='pl-24'>
                               <h2 className='text-lg font-bold uppercase '> Useful Links</h2>
                               <div>
                                 <ul>
                                    <li><Link to="">News</Link></li>
                                    <li><Link to="">FAQ</Link></li>
                                    <li><Link to="">Info</Link></li>
                                 </ul>
                               </div>
                          </div>
                           <div className='pl-24'>
                                <h2 className='text-lg font-bold uppercase'>Socials</h2>
                                <ul className='socials'>
                                     <li><Link to=""><i className="fa-brands fa-whatsapp"></i></Link></li>
                                     <li><Link to=""><i className="fa-brands fa-twitter"></i></Link></li>
                                     <li><Link to=""><i className="fa-brands fa-instagram"></i></Link></li>
                                     <li><Link to=""><i className="fa-brands fa-facebook"></i></Link></li>
                                </ul>
                           </div>
                    </div>
               </div>
                 <div className='text-start pt-3 pb-3'>
                    2024 &copy; Team collabTech | All Rights Reserved.
                 </div>
           </div>
       </div>
    </>
  )
}

export default Footer;
