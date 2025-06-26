import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice.jsx";

export const store  = configureStore({
    reducer : {
        counter : counterReducer
    }
})
//for typescript
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType <typeof store.getState>;