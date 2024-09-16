
import React, { useContext } from 'react'
import EcomContext from '../../../context/EcomContext';
import { Link } from 'react-router-dom';

function AdminProduct() {
    const { product, deleteProduct } = useContext(EcomContext);
  return (
    <>
       <div className='flex justify-between m-[3rem]'>
          <div className='font-bold text-4xl flex'>
             Products <h1 className='rounded-2xl bg-white p-2 pb-1 font-thin ml-[2px] text-sm'>{product?.length}</h1>
          </div>
           <div>
           <button className="new-product flex space-x-4 border border-black py-1 px-6">
              <div><i className="fa-solid fa-plus"></i></div>
              <div className="new-text">
                Create New
              </div>
            </button>
           </div>
       </div>

       {/* <div className='flex'> */}
          {/* <div> */}
             <table className='mx-auto max-w-md shadow admin-table'>
                 <thead className='table-product'>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Category</td>
                    <td>Edit</td>
                    <td>Delete</td>
                 </thead>
                 <tbody>
                    {product.map((item, index) => (
                    <tr key={index} >
                        <td><img src={item?.images[0].img} width="50px"/></td>
                        <td>{item?.name}</td>
                        <td>${item?.price}</td>
                        <td>{item?.category?.name}</td>
                        <td><Link><i className="fa-solid fa-pen-to-square"></i></Link></td>
                        <td><button type="submit" onClick={() => deleteProduct(item?._id)}><i className="fa-solid fa-trash"></i></button></td>
                    </tr>
                    ))}
                 </tbody>
             </table>

          {/* </div> */}
       {/* </div> */}
    </>
  )
}

export default AdminProduct;

