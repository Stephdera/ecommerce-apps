import React, { useContext, useState} from 'react'
import EcomContext from '../../context/EcomContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import AuthContext from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {
    const[password, setPassword] = useState("");
    const[message, setMessage] =useState("");
    const[btnDisabled, setBtnDisabled] =useState(true);
    const[ShowPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [Password, setpassWord] = useState("");
    const { showHide, isAuthenticated,setCartItems, fetchCart } = useContext(EcomContext);
      const { setItem, getItem, deleteItem } = useLocalStorage("auth-token");
    const [state, dispatch ] = useContext(AuthContext);
    const redirect = useNavigate();

    const validatePassword = (e) => {
        if (Password === "") {
            setBtnDisabled(true);
            setMessage("Enter your password");
        }  else if (Password !== "" && password.trim().length < 7) {
            setBtnDisabled(true);
            setMessage("Your Password must be atleast 7 letters");
        }else {
            setBtnDisabled(false)
            setMessage("Valid Password")
        }
        setpassWord(e.target.value)
        e.preventDefault();
    }

     if (isAuthenticated) {
        return <Navigate to="/"/>
     }
     

//      const { showHide, isAuthenticated,setCartItems, fetchCart } = useContext(EcomContext);
//   const { setItem, getItem, deleteItem } = useLocalStorage("auth-token");

// client02@gmail.com
// qwerty456

  if (isAuthenticated) {
    return <Navigate to="/" />
  }
  
  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      showHide("error", "Email and Passowrd is required")
      return;
    } 
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.message) {
        showHide("error", data.message);
      }else {
        dispatch({ type: "setToken", payload: data.token });
        setItem(data.token);
        const cartDataItem = JSON.parse(getItem("cart"));
        if (cartDataItem) {
          console.log("request made");
          await Promise.all(cartDataItem?.products?.map(async (item) => {
            const response = await fetch("http://localhost:3000/api/addcart", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "auth-token": getItem("auth-token"),  // Use the token directly
              },
              body: JSON.stringify({ productId: item.product._id, quantity: item.quantity }),
            });

            const cartdata = await response.json();
            // console.log( "todday", cartdata);
            if (res.ok) {
              setCartItems(cartdata && cartdata.products);
              fetchCart();
              showHide("success", "added to cart successfully")
            } else {
              console.error("Failed to add items to the backend cart");
            }
          }));
          deleteItem("cart");
        }

        redirect("/");
        showHide("success", "you are now logged in");
      }
    } catch (error) {
      console.log(error);
    }
  };
    // const loginHandler = async (e) => {
    //     e.preventDefault();
    //     if (!email || !Password) {
    //         showHide("error", "Username and Password is required")
    //         return;
    //     }
    //     try {
    //         const res = await fetch("http://localhost:3000/api/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ email, password}),
    //         }); 
    //         const data = await res.json();
    //         if (data === "Invalid username"){
    //            showHide("error", "Invalid username");
    //         }else if (data === "Invalid Password") {
    //             showHide("error", "Invalid Password");
    //         }else {
    //             dispatch({ type: "setToken", payload: data.token});
    //             setItem(data.token);
    //             redirect("/");
    //             showHide("success", "you are now logged in");
    //         }
    //     } catch (error) {
    //        console.log(error); 
    //     }
    // };

     
  return (
    <>
       <div className='mx-auto max-w-md display pl-6 pr-10 mb-8 mt-8 pb-8 rounded bg-gray-300'>
            <div>
                <form className="cform ml-8 mr-8" onSubmit={loginHandler}>
                    <h5 className='text-center p-8 font-bold text-3xl'>LOGIN PAGE</h5>
                    <div className='user'>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='password mb-8'>
                        <label htmlFor="password">Password: </label>
                        {/* <input type={"password"} onChange={(e) => setpassWord(e.target.value)}/> */}
                        <input value={Password} type={ShowPassword ? "text": "password"} onChangeCapture={validatePassword} onChange={(e) => setPassword(e.target.value)}/>
                        <div className='mt-4'>
                        <label htmlFor="checkbox">Show Password</label>
                        <input type="checkbox" onClick={() => setShowPassword(!ShowPassword)}/>
                        </div>
                        {message && <p>{message}</p>}
                    </div>
                    
                    <div className='flex'>
                    {/* <button type="submit" className="bg-[#000] text-center capitalize p-3 rounded-xl text-[lime] hover:bg-zinc-500 hover:text-black" >Login</button> */}
                    <button disabled={btnDisabled} type="submit" className="bg-[#000] text-center capitalize p-3 rounded-xl text-[lime] hover:bg-zinc-500 hover:text-black" >Login</button>
                    <h5 className='text-green-400 ml-36 mt-2'>Forgot Password ?</h5>
                    </div>
                </form>
            </div>
       </div>
    </>
  )
}

export default Login;
