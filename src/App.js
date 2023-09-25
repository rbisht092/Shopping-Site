import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isOpen = useSelector(state => state.authentication.isOpen)
  console.log(isOpen);
  const cartItem = useSelector(state => state.cart.itemList)
  console.log(cartItem);
  return (
    <div className="App">
       {!isOpen &&<Auth />}
      {isOpen && <Layout /> }
    </div>
  );
}

export default App;
