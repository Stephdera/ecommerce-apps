import React, { useContext, useState } from 'react'
import ProductItem from './ProductItem';
import EcomContext from '../context/EcomContext';

function Product() {
  const { product } =useContext(EcomContext);
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items per page
  const itemsPerPage = 15;
  const safeProduct = Array.isArray(product) ? product : [];

  // Calculate the current items based on page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentproduct = safeProduct.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil((safeProduct.length || 0) / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
      <div className='bg-gray-500 pep'>
        <h1 className='text-2xl px-24 uppercase italic font-bold font-serif text-center mt-[0] pt-10'>Our Products</h1>
        <div className="container mt-2 mb-16">
            <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mx-8 gap-1 space-x-2 space-y-5'>
                {currentproduct.map((items, index) => (
                    <ProductItem key={index} product_item_prop={items}/>
                ))}
            </div>
        </div>
        {/*  */}
        <div className='mx-10 mb-8'>
          <button className="px-4 py-2 bg-black text-white rounded mr-2" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
            {Array.from({ length: totalPages }, (_, index) => (
          <button className={`px-4 py-2 rounded mr-2 ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200'}`} 
            key={index + 1} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>
            {index + 1}
          </button>
          ))}
          <button className="px-4 py-2 bg-black text-white rounded" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
        {/*  */}
      </div>
  )
}

export default Product;
