<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        open: (state)=>{
            state.isOpen = true
        },
        close: (state)=>{
            state.isOpen = false
        }
    }
})

export const authActions = authSlice.actions;

=======
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        open: (state)=>{
            state.isOpen = true
        },
        close: (state)=>{
            state.isOpen = false
        }
    }
})

export const authActions = authSlice.actions;

>>>>>>> 8e6b042997d7e9e235ba41d33eeabd0f207c9761
export default authSlice;