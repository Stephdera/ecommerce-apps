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
import AdminProduct from './components/pages/admin/AdminProduct';
import Users from './components/pages/admin/Users';
import Category from './components/pages/admin/Category';
import Banner1 from '../public/img/handbag green.jpg';
import Banner2 from '../public/img/airmax.jpg';
import EmailInput from './components/pages/ResetPassword/EmailInput';

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
                  <Banner imageUrl={Banner1} title="Welcome to STAR Stores" title1="Luxury meets Perfection" showButton={true}/>
                  <FeaturedProduct/>
                  <TopSelling/>
                  <Footer/>
                </>}/>
                <Route path="/product" element={<>
                  <Header/>
                  <Banner imageUrl={Banner2}/>
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
                <Route path="/admin-product" element={<AdminProduct/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/forgot-password" element={<><EmailInput/></>}/>
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

