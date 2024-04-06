import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import {uiActions}  from "./features/uiSlice";

// first render pe useEffect ko run hone se rokna
let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.authentication.isOpen);
  console.log(isOpen);
  const cartItem = useSelector((state) => state.cart.itemList);
  console.log(cartItem);

  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false;
      return;
    }
    console.log(uiActions.showNotification());
    
    const sendReq = async () =>{

      dispatch(uiActions.showNotification({
        message:"Sending Request",
        type:"warning",
        open:true,
      }));

      const res = await fetch("https://redux-http-cba98-default-rtdb.firebaseio.com/cartItems.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      const data = await res.json();
      dispatch(uiActions.showNotification({
        open:true,
        message:"Request sent successfully",
        type:"success"
      }));
    }
      sendReq().catch(err=>{
      dispatch(uiActions.showNotification({
        open: true,
        message:"Couldn't send request",
        type:"error" 
      }));
    });

    
  }, [cart]);

  console.log("cart: ", cart.itemList);
  // payment integration 

  

  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {!isOpen && <Auth />}
      {isOpen && <Layout />}
    </div>
  );
}

export default App;
