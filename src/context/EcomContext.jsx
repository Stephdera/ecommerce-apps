import { createContext, useState, useEffect, useContext } from "react";
import useAlert from "../hooks/useAlert";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";


const EcomContext = createContext()

export const EcomProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const { alertInfo, showHide} = useAlert();
  const [order, setOrder] = useState(null);
  const [ cartItems, setCartItems ] = useState([]);
  const [ state, dispatch] = useContext(AuthContext);
  const isAuthenticated = state.accessToken !== null;
  const { setItem, getItem } = useLocalStorage();

  useEffect(() => {
    fetchData()
    // fetchCart()
    fetchCart()
  }, [])

 
  // added cart count
  // useEffect(() => {

  // })
  const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
  }
  const featuredProduct = product.filter((product) => product.featured === true)
  const topSellingProduct = product.filter((product) => product.topSelling === true)

   //   adding items to cart
   const addToCart = async (productId, quantity, product) => {
    // if Authenticated
       if (isAuthenticated) {
        try {
          const res = await fetch("http://localhost:3000/api/addcart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem("auth-token")}`
            },
            body: JSON.stringify({ productId, quantity })
            // body: JSON.stringify({ productId, quantity: 1 })
          })
          const data = await res.json();
          if (res.ok) {
              setCartItems(data);
              showHide("success", " Item successfully added to cart");
              
          }else {
            showHide("error", "product was not added to cart")
          }
      } catch (error) {
         console.log(error)
      }
      // if Authenticated done
    } else {
      // if unauthenticated
      const storedCart = JSON.parse(getItem("cart")) || { products: [] };
      const itemIndex = storedCart.products.findIndex(
        (item) => item.product._id === productId
      );

      if (itemIndex >= 0) {
        storedCart.products[itemIndex].quantity += 1;
        storedCart.products[itemIndex].amount =
         product.price * storedCart.products[itemIndex].quantity;
      }else {
        storedCart.products.push({
          product,
          quantity: 1,
          amount: product.price * 1,
        });
        console.log(product);
      }
      localStorage.setItem("cart", JSON.stringify(storedCart));
      showHide("success", "Product added to cart successfully");
      setCartItems(storedCart); 
      // this line sets the cartItems state to match local storage 
     }}
       
  //  fetch cart
       const fetchCart = async () => {
            if (isAuthenticated) {
              // authenticated
              const res = await fetch("http://localhost:3000/api/cart", {
                method: "GET",
                headers: {
                     "Content-Type": "application/json",
                     "auth-token": `${localStorage.getItem("auth-token")}`
                }
              })
              const data = await res.json();
              if(res.ok) {
                setCartItems(data.products && data)
              }else {
                showHide("error", "Cart is Empty")
              }
              // authenticated done
            } else {
              // unauthenticated
              const localCart = getItem("cart");
              console.log(localCart);
              if (localCart) {
                setCartItems(JSON.parse(localCart));
              } else {
                setCartItems([]);
                // clear cart items if nothing is in local storage
              }
              // unauthenticated done
            }
       };
  //  const addToCart = (prod) => {
  //     const existingItems = cartItems.findIndex(items => items.id === prod.id);
  //     if (existingItems !== -1) {
  //        const itemsInCart = [...cartItems]
  //        const updateCartItem = itemsInCart[existingItems]
  //        updateCartItem.quantity += Number(prod.quantity)
  //        updateCartItem.amount = Number(updateCartItem.price * updateCartItem.quantity)
  //        setCartItems(itemsInCart)
  //        showHide("error", `${prod.name} already exist in your cart..`)
  //     }else {
  //       setCartItems([
  //           ...cartItems,
  //           { ...prod, amount: prod.price * prod.quantity }
  //       ])
  //       showHide("success", `${prod.name} successfully added to cart`)
  //     }
    //   setCartItems([...cartItems, existingItems])
  //  }

    //    calculate subtotal
     const calculateSubTotal = () => {
        return cartItems.products?.reduce((acc, curr) => acc + curr.amount , 0)
     }

    //  calculate Vat
    const calculateVat = ( vat = 0.075) => {
        const subtotal = calculateSubTotal()
        return subtotal * vat;
    }

    // calculate total amount
    const calculateTotalAmount = () => {
        const subtotal = calculateSubTotal()
        const vat = calculateVat()
        return subtotal + vat;
    }

    // remove cart items
    const removeCartItems = async (productId) => {
       if (window.confirm("Are you sure you want to remove item from cart?...")) {
        if (isAuthenticated) {
          try {
            // authenticated
              const res = await fetch("http://localhost:3000/api/delete-cart", {
                method: "DELETE",
                headers: {
                     "Content-Type": "application/json",
                     "auth-token": `${localStorage.getItem("auth-token")}`
                },
                body: JSON.stringify({ productId }),
              });
              const data = await res.json();
              if (res.ok) {
                showHide("success", "Item successfully removed from cart");
                setCartItems(data);
                // setCartItems(data || data.products);
              }  
          } catch (error) {
            console.log(error)
          }
          // authenticated done
        } else {
          // unauthenticated 
          const storedCart = JSON.parse(localStorage.getItem("cart")) || {
            products: [],
          };
          const itemIndex = storedCart.products.findIndex(
            (item) => item.product._id === productId
          );

          if (itemIndex >= 0) {
            storedCart.products.splice(itemIndex, 1);
            localStorage.setItem("cart", JSON.stringify(storedCart));
            setCartItems(storedCart); 
            // update the state to reflect changes in local storage
            showHide("success", "Product removed from cart successfully");
          } else {
            showHide("error", "Product not found in cart");
          }
          // unauthenticated done
        }
       }
    };

    

    // update cart items
    const updateCartItems = async (productId, quantity) => {
      if (isAuthenticated) {
        try {
          const res = await fetch("http://localhost:3000/api/update-cart", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": `${localStorage.getItem("auth-token")}`,
            },
            body: JSON.stringify({ productId, quantity }),
          })
          const data = await res.json();
          if (res.status === 200){
            const existingItems = cartItems.products?.findIndex(
              (items) => items.product._id === productId
            );
            if (existingItems !== -1) {
              const itemsInCart = [...cartItems.products];
              const updateCartItem = itemsInCart[existingItems];
              updateCartItem.quantity = parseInt(quantity);
              updateCartItem.amount = updateCartItem.product.price * updateCartItem.quantity;
              setCartItems({ ...cartItems, products: itemsInCart});
            }
          }else{
            showHide("error", "Could not update cart");
          }
      } catch (error) {
        console.log(error)
      }
      } else {
        // Handle updating cart items in local storage for unauthenticated users
        const storedCart = JSON.parse(localStorage.getItem("cart")) || {
          products: [],
        };
        const itemIndex = storedCart.products.findIndex(
          (item) => item.product._id === productId
        );

        if (itemIndex >= 0) {
          if (quantity === 0) {
            storedCart.products.splice(itemIndex, 1);
          } else {
           // update quantity of item
           storedCart.products[itemIndex].quantity = parseInt(quantity, 10);
           storedCart.products[itemIndex].amount =
           storedCart.products[itemIndex].product.price * storedCart.products[itemIndex].quantity; 
          }
          localStorage.setItem("cart", JSON.stringify(storedCart));
           setCartItems(storedCart);
           showHide("success", "Cart Updated Successfully!...");
        }
      }
  };

    // const updateCartItems = (id, newQuantity) => {
    //     const existingItems = cartItems.findIndex(items => items.id === id);
    //     const itemsInCart = [...cartItems]
    //     const updateCartItem = itemsInCart[existingItems]
    //     updateCartItem.quantity = parseInt(newQuantity, 10)
    //     updateCartItem.amount = updateCartItem.price * updateCartItem.quantity
    //     setCartItems(itemsInCart)
    // }
    

    const createOrder = async (transaction_id, orderId) => {
        try {
          const res = await fetch("http://localhost:3000/api/payment/verify", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json",
                 "auth-token": `${localStorage.getItem("auth-token")}`
            },
            body: JSON.stringify({ transaction_id, orderId })
          })
          const data = await res.json();
          if(res.ok) {
             setOrder(data.order)
             console.log(data.order);
             setCartItems([]);
           }else{
              showHide("error", "Payment was Unsuccessful");
           }
        } catch (error) {
          console.log(error);
        }
    }
    

  return (
    <EcomContext.Provider value= {{
        product,
        alertInfo,
        cartItems,
        featuredProduct,
        topSellingProduct,
        isAuthenticated,
        showHide,
        addToCart,
        calculateSubTotal,
        calculateVat,
        calculateTotalAmount,
        removeCartItems,
        updateCartItems,
        createOrder,
        order,
        fetchCart,
        setCartItems
    }}>
           {children}
    </EcomContext.Provider>
  )
}

export default EcomContext;
