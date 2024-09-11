import React from 'react'

function AdminHeader() {
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
                <a href="">
                <i className="fa-solid fa-box-archive"></i> Products
                </a>
              </li>
              <li>
                <a href="">
                <i className="fa-solid fa-users"></i>Customers
                </a>
              </li>
              <li>
                <a href="">
                <i className="fa-solid fa-list"></i> Categories
                </a>
              </li>
              <li>
                <a href="">
                <i className="fa-solid fa-clipboard"></i> Reports
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
                <h1>300</h1>
              </div>

              <div className="card space-y-20">
                <div className="card-inner">
                  <h3>CATEGORIES</h3>
                  <i className="fa-solid fa-list"></i>
                </div>
                <h1>10</h1>
              </div>

              <div className="card space-y-20">
                <div className="card-inner">
                  <h3>CUSTOMERS</h3>
                  <i className="fa-solid fa-users"></i>
                </div>
                <h1>150</h1>
              </div>

              <div className="card space-y-20">
                <div className="card-inner">
                  <h3>ALERT</h3>
                  <i className="fa-solid fa-bell"></i>
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
