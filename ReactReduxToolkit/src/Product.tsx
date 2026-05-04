import { useEffect } from "react"
import { useDispatch} from 'react-redux';
import type { AppDispatch } from './Redux/store'
import { fetchProducts } from "./features/ProductSlice";

export function Products(){
    const dispatch=useDispatch<AppDispatch>();
    useEffect(()=>
    {
    dispatch(fetchProducts())
    },[])
    return(
        <>
        <h1>AsyncThunk....</h1>
        </>
    )
}
