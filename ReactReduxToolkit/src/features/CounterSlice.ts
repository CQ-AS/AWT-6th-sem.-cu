import { createSlice } from "@reduxjs/toolkit";

interface countType{
  count:number
}


const initialState:countType={
  count:0
}

export const CountSlice=createSlice(
  {
    name:"counter",
    initialState,
    reducers:{
        increment:state=>{
          state.count+=1
        },

        decrement:state=>{
          state.count-=1;
        }
        ,
        reset:state=>{
          state.count=0;
        },
        addAmount:(state,action)=>{
          state.count+=action.payload
        }

    }
  }
)

export const{increment, decrement,reset, addAmount} = CountSlice.actions
export default CountSlice.reducer;
