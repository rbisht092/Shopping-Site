<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {notification: null},
    reducers: {
        showNotification : (state,action)=>{
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})

export const uiActions  = uiSlice.actions

=======
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {notification: null},
    reducers: {
        showNotification : (state,action)=>{
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})

export const uiActions  = uiSlice.actions

>>>>>>> 8e6b042997d7e9e235ba41d33eeabd0f207c9761
export default uiSlice