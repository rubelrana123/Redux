import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface CounterState {
  count: number
}
const initialState : CounterState = {
    count : 0
}
export const  counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers :{
        increment : (state , action) => {
           state.count += action.payload;
        },
             decrement : (state , action) => {
            state.count = state.count - action.payload;
        },
        incrementByAmount :(state, action :PayloadAction<number>)=> {
            state.count  += action.payload;

        }

    }
})
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;