import { configureStore } from "@reduxjs/toolkit";
import { CountSlice } from "../features/CounterSlice";
import {TodoSlice} from "../features/TodoSlice"
import { ProductSlice } from "../features/ProductSlice";



export const store=configureStore({
    reducer:{
        counter:CountSlice.reducer,
        todos:TodoSlice.reducer,
        products:ProductSlice.reducer
    }
})

// Infer RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;