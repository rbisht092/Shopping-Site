import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart:false
    },
    reducers: {
        addToCart(state,action) {
            //check for the item if it is already in the cart
            const newItem = action.payload
            const existing = state.itemList.find((item) => item.id===newItem.id);

            if(existing){
                existing.quantity++;
                existing.totalPrice += newItem.price;
                
            }else{
                state.itemList.push({
                    id:newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                // we are only showing the quantity of unique products in the cart. 
                state.totalQuantity++;
            }
        },
        remove(state,action){
            //check if not empty
            const cartItems = state.itemList;
            if(cartItems.length===1){
                if(cartItems[0].quantity === 1){
                    state.itemList = []
                    state.totalQuantity--;
                }else{
                    cartItems[0].quantity--;
                    cartItems[0].totalPrice -= cartItems[0].price
                }
                
            }else{
                const it = state.itemList.find((item)=>item.id===action.payload)
                if(it.quantity===1){
                    state.itemList = state.itemList.filter((item)=>item.id !== action.payload)
                    state.totalQuantity--;
                }else{
                    it.quantity--;
                }
                it.totalPrice -= it.price;
            }
            
        },
        setShow(state){
            state.showCart = !state.showCart;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;