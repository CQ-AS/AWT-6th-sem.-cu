import { configureStore } from "@reduxjs/toolkit";
import { CountSlice } from "../features/CounterSlice";

export const store=configureStore({
    reducer:{
        counter:CountSlice.reducer
    }
})