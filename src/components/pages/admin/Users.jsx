import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import EcomContext from '../../../context/EcomContext';

function Users() {
    const { users } = useContext(EcomContext);
  return (
    <>
       <div className='flex justify-between m-[3rem]'>
          <div className='font-bold text-4xl flex'>
            <div>Customers</div>
             <h1 className='rounded-2xl bg-white p-2 pb-1 font-thin ml-[2px] text-sm'>{users?.length}</h1>
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
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                 </thead>
                 <tbody>
                    {users.map((item, index) => (
                    <tr key={index} >
                        <td>{item?.firstName} {item?.lastName}</td>
                        <td>{item?.email}</td>
                        <td>+{item?.phone}</td>
                        <td>{item?.role}</td>
                        <td><Link><i className="fa-solid fa-pen-to-square"></i></Link></td>
                        <td><button type="submit"><i className="fa-solid fa-trash"></i></button></td>
                    </tr>
                    ))}
                 </tbody>
             </table>

          {/* </div> */}
       {/* </div>  */}
    </>
  )
}

export default Users;
