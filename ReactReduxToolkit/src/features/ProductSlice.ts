import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface ProductsType{
 id:number,
 title:string,
 description:string,
 categor:string,
 price:string,
 discountPercentage:number,
 rating:number,
 stock:number,
}


interface Products{
    items:ProductsType[],
    status:string
}

const initialState:Products={
    items:[],
    status:"pending"
}

export const ProductSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
             console.log("pending")
            console.log(action.payload)
            state.status="pending"
        })
         builder.addCase(fetchProducts.fulfilled,(state,action:PayloadAction<{}>)=>{
             console.log("fulfilled")
            console.log(action.payload)
            state.status="fulfilled"
            // state.items.push(action.payload)
        })
    }

})

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products; 
  }
);
export default ProductSlice.reducer