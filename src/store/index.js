<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/authSlice'
import cartSlice from "../features/cartSlics";
import uiSlice from "../features/uiSlice";

export const store = configureStore({
    reducer:{
        authentication:authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})

=======
import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/authSlice'
import cartSlice from "../features/cartSlics";
import uiSlice from "../features/uiSlice";

export const store = configureStore({
    reducer:{
        authentication:authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})

>>>>>>> 8e6b042997d7e9e235ba41d33eeabd0f207c9761
