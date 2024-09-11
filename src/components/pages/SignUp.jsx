import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import EcomContext from '../../context/EcomContext';
import AuthContext from '../../context/AuthContext';


function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("client");
  const { setItem }= useLocalStorage("auth-token");
  const { showHide, isAuthenticated } = useContext(EcomContext);
  const [state, dispatch] = useContext(AuthContext);
  const redirect = useNavigate();

  if (isAuthenticated) {
     return <Navigate to="/"/>
  }


  const signupHandler = async (e) => {
    e.preventDefault();
    console.log("submitted")

    try{
      const res = await fetch("https://ecommerce-api-ajas.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          role,
          password,
          confirmPassword
        })
      })
      const data = await res.json();
      if (data.message) {
        showHide("error", data.message);
      }else if (data === "User already exists!...") {
        showHide("error", "User already exists!...");
      }else if(data === "Password doesn't match") {
        showHide("error", "Password doesn't match");
      }else {
        // dispatch({ type: "setToken", payload: data.token });
        // setItem(data.token)
        redirect("/login");
        showHide("success", "You have successfully Registered");
      }
    }catch (error) {
      console.log(error);
    }
  }
  return (
    <>
       <div className='mx-auto max-w-md bg-white display m-6 p-2 rounded bg-[#fff] signup'>
           <form className="p-8" onSubmit={signupHandler}>
                <h5 className='text-center font-bold text-2xl pb-4 font-serif'>CREATE AN ACCOUNT</h5>
                <hr className='pb-4' />
              <div>
                <label htmlFor="">First Name*</label>
                <input type="text" name="" id="firstName" placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="">Last Name*</label>
                <input type="text" name="" id="lastName" placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="">Email*</label>
                <input type="email" name="" id="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="">Phone number*</label>
                <input type="tel" name="" id="phone" placeholder='Enter Phone Number' onChange={(e) => setPhone(e.target.value)} />
              </div>
            
              <div>
                <label htmlFor="">Password*</label>
                <input type="password" name="" id="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div>
                <label htmlFor="">Confirm Password*</label>
                <input type="password" name="" id="confirmPassword" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <div className='text-center'>
                 <button className={"text-center text-white font-bold  bg-[#502274]  text-l hover:bg-gray-500 hover:text-black"} type="submit">Create an Account</button>
                 <p>By signing up you accept our terms and conditions
                 & privacy policy</p>
              </div>
              
               <hr />
              
              <div className='text-center account'>
                <h1 className='pt-4 text-gray-500 pb-4'>Already have an Account ?</h1>
                <Link to="/login" className='border-solid border-black  log' type="submit">Login</Link>
              </div>
           </form>
       </div>
    </>
  )
}

export default SignUp;
