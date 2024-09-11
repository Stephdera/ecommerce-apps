import React, { useEffect } from 'react'
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Banner from './components/Banner';
import Product from './components/Product';
import ProductData from './data/ProductData';
import { useState } from 'react';
import Footer from './components/Footer';
import FeaturedProduct from './components/FeaturedProduct';
import TopSelling from './components/TopSelling';
import ProductDetails from './components/pages/ProductDetails';
import ProductCart from './components/pages/ProductCart';
import ProductCheckOut from './components/pages/ProductCheckOut';
import About from './components/pages/About';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import { EcomProvider } from './context/EcomContext';
import Alert from './components/Alert';
import Loaders from './components/Loaders';
import useLocalStorage from './hooks/useLocalStorage';
import { AuthProvider } from './context/AuthContext';
import ThankYou from './components/pages/ThankYou';
import AdminHeader from './components/pages/admin/AdminHeader';
import AdminSidebar from './components/pages/admin/AdminSidebar';

function App() {
  const { getItem } = useLocalStorage("auth-token");
  const token = getItem("auth-token");
  const authInitialToken = { accessToken: token ?? null };
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=> {
      setLoader(false)
    }, 5000)

    return () => timer;
  }, [])
  
  return (
    <> 
    {loader ? <Loaders/> : (
      <AuthProvider defaultState={authInitialToken}>
        <EcomProvider>
          <Router>
            {/* <Header/> */}
            <Alert />
              <Routes>
                <Route path="/" element={<>
                  <Header/>
                  <Banner/>
                  <FeaturedProduct/>
                  <TopSelling/>
                  <Footer/>
                </>}/>
                <Route path="/product" element={<>
                  <Header/>
                  <Banner/>
                  <Product/>
                  <Footer/>
                </>} />
                <Route path="/details/:name" element={<> 
                  <Header/>
                  <ProductDetails/>
                  <Footer/> </>}/>
                <Route path="/cart" element={<> 
                  <Header/> 
                  <ProductCart/>
                  <Footer/> </>}/>
                <Route path="/checkout" element={<>
                  <Header/>
                  <ProductCheckOut/>
                  <Footer/> </>}/>
                <Route path="/about" element={<>
                  <Header/>
                  <About/>
                  <Footer/> </>}/>
                <Route path="/login" element={<>
                  <Header/>
                  <Login/>
                  <Footer/> </>}/>
                <Route path="/sign" element={<> 
                  <Header/> 
                  <SignUp/>
                  <Footer/> </>}/>
                <Route path="/thankyou" element={<> 
                  <Header/> 
                  <ThankYou/>
                  <Footer/> </>}/>
                <Route path="/admin" element={<AdminHeader/>}/>
                <Route path="/sidebar" element={<AdminSidebar/>}/>
              </Routes>
            {/* <Footer/> */}
            </Router>
          </EcomProvider>
        </AuthProvider>
       )}
      
    </>
  )
}

export default App;

