import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/authSlice'
import cartSlice from "../features/cartSlics";

export const store = configureStore({
    reducer:{
        authentication:authSlice.reducer,
        cart: cartSlice.reducer
    }
})

