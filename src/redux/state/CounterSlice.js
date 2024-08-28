import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment:(state) => {
            state.value = state.value+1
        },
        decrement:(state) => {
            state.value = state.value-1
        },
        setVal:(state,action) => {
            state.value = action.payload;
        }
    }
});

export const {increment, decrement, setVal} = counterSlice.actions;
export default counterSlice.reducer;