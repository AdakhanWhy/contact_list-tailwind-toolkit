import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: function(state){
            return state + 1
        },
        decrement: function(state){
            return state - 1
        },
        reset: function(state){
            return state = 0
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;