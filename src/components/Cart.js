import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/cartSlics";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalQuantity);
  const dispatch = useDispatch()
  const handleClick =() =>{
    dispatch(cartActions.setShow())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={handleClick}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
