import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import EcomContext from '../../../context/EcomContext';

function AdminHeader() {
  const { product, users, category } = useContext(EcomContext);
  return (
    <>
      <div className='grid-container'>
      <header className='admin-header'>
          <div className='menu-icon'>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className='search-icon'>
          <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <nav className='nav-icons'>
             <ul className='flex'>
              <li><i className="fa-solid fa-bell"></i></li>
              <li><i className="fa-solid fa-envelope"></i></li>
              <li><i className="fa-solid fa-circle-user"></i></li>
             </ul>
          </nav>
     </header>

      {/* sidebar */}
       <aside id='sidebar'>
            <div className='sidebar-name'>
                 <div className='sidebar-brand'>
                    STAR STORES
                 </div>
                 <span><i className="fa-solid fa-xmark icon_header"></i></span>
            </div>

            <ul className='sidebar-list'>
              <li>
                <a href="">
                <i className="fa-solid fa-table-columns"></i> Dashboard
                </a>
              </li>
              <li>
                <Link to="/admin-product">
                <i className="fa-solid fa-box-archive"></i> Products
                </Link>
              </li>
              <li>
                <Link to="/users">
                <i className="fa-solid fa-users"></i>Customers
                </Link>
              </li>
              <li>
                <Link to="/category">
                <i className="fa-solid fa-list"></i> Categories
                </Link>
              </li>
              <li>
                <a href="">
                <i className="fa-solid fa-truck"></i> Orders
                </a>
              </li>
              <li>
                <a href="">
                <i className="fa-solid fa-gear"></i>Settings
                </a>
              </li>

            </ul>
       </aside>
      {/* sidebar done */}

      {/* Home */}
        <main className='main-containers'>
           <div className='main-title'>
              <h3>DASHBOARD</h3>
           </div>

            <div className='main-cards'>
              <div className="card space-y-20">
                <div className="card-inner">
                  <h3>PRODUCTS</h3>
                  <i className="fa-solid fa-box-archive"></i>
                </div>
                <h1>{product?.length}</h1>
              </div>

              <div className="card space-y-20">
                <div className="card-inner">
                  <h3>CATEGORIES</h3>
                  <i className="fa-solid fa-list"></i>
                </div>
                <h1>{category?.length}</h1>
              </div>

              <div className="card space-y-20">
                <div className="card-inner">
                  <h3>CUSTOMERS</h3>
                  <i className="fa-solid fa-users"></i>
                </div>
                <h1>{users?.length}</h1>
              </div>

              <div className="card space-y-20">
                <div className="card-inner">
                  <h3>ORDERS</h3>
                  <i className="fa-solid fa-truck"></i>
                </div>
                <h1>100</h1>
              </div>
            </div>
        </main>
      {/* Home done */}
      </div>

    </>
  )
}

export default AdminHeader;
