import { createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
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
    },
    extraReducers:(builder)=>{
      builder.addCase(incrementAsync.pending,()=>{
        console.log("pending...")
      })
      builder.addCase(incrementAsync.fulfilled,(state,action:PayloadAction<number>)=>{
        state.count+=action.payload
      })

    }
   
  }
)
// creating Dealy by using AsyncThunk and Promise

export const incrementAsync=createAsyncThunk(
  "increment/count/Async",
  async (amount:number)=>{
      await new Promise((resolve)=>setTimeout(resolve,2000))
      return amount;
  }
)



export const{increment, decrement,reset, addAmount} = CountSlice.actions
export default CountSlice.reducer;
