import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import EcomContext from '../../../context/EcomContext';

function Category() {
    const { category, product}= useContext(EcomContext);
  return (
    <>
       <div className='flex justify-between m-[3rem]'>
          <div className='font-bold text-4xl flex'>
            <div>Categories</div>
             <h1 className='rounded-2xl bg-white p-2 pb-1 font-thin ml-[2px] text-sm'>{category?.length}</h1>
          </div>
           <div>
           <button className="new-user flex space-x-4 border border-black py-1 px-6">
              <div><i className="fa-solid fa-plus"></i></div>
              <div className="new-text">
                Create New
              </div>
            </button>
           </div>
       </div>

       {/* <div className='bg-red-500'> */}
          {/* <div className='bg-black'> */}
             <table className='mx-auto max-w-md shadow admin-table'>
                 <thead>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Id</th>
                    {/* <th>#Products</th> */}
                    <th>Edit</th>
                    <th>Delete</th>
                 </thead>
                 <tbody>
                    {category.map((item, index) => (
                    <tr key={index} >
                        <td>{item?.name}</td>
                        <td>{item?.description}</td>
                        <td>{item?._id}</td>
                        {/* <td>{item?.product?.length}</td> */}
                        <td><Link to={`/edit-category/${item?._id}`}><i className="fa-solid fa-pen-to-square"></i></Link></td>
                        <td><button type="submit" ><i className="fa-solid fa-trash"></i></button></td>
                    </tr>
                    ))}
                 </tbody>
             </table>

          {/* </div> */}
       {/* </div>  */}
    </>
  )
}

export default Category;
