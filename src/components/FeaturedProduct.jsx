import React, { useContext, useState } from 'react'
import ProductItem from './ProductItem';
import EcomContext from '../context/EcomContext';

function FeaturedProduct() {
 const {featuredProduct} = useContext(EcomContext);
 const [currentPage, setCurrentPage] = useState(1);
 
   // Number of items per page
   const itemsPerPage = 10;
   const safefeaturedProduct = Array.isArray(featuredProduct) ? featuredProduct : [];
 
   // Calculate the current items based on page
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentfeaturedProduct = safefeaturedProduct.slice(indexOfFirstItem, indexOfLastItem);
 
   // Calculate total pages
   const totalPages = Math.ceil((safefeaturedProduct.length || 0) / itemsPerPage);
 
   // Handle page change
   const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
   };



  return (
    <div className='bg-gray-500 mb-[0]'>
        <h1 className='text-2xl my- mx-24 uppercase italic font-bold font-serif text-center mt-[0] pt-12'>Featured Product</h1>
        <div className="container max-w-6xl mt-12 mb-[0] pb-12 m-auto">
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                {currentfeaturedProduct.map((items, index) => (
                    <ProductItem key={index} product_item_prop={items}/>
                ))}
            </div>
        </div>
        {/*  */}
        <div className='px-16 pb-8'>
          <button className="px-4 py-2 bg-black text-white rounded mr-2" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><i class="fas fa-angles-left"></i></button>
            {Array.from({ length: totalPages }, (_, index) => (
          <button className={`px-4 py-2 rounded mr-2 ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200'}`} 
            key={index + 1} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>
            {index + 1}
          </button>
          ))}
          <button className="px-4 py-2 bg-black text-white rounded" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><i class="fa-solid fa-angles-right"></i></button>
        </div>
        {/*  */}
    </div>
  )
}

export default FeaturedProduct;
