import { useCallback, useState } from "react"
import { ChildUseCallBack } from "./ChildUseCAllBack"

export const UseCallBack=()=>{
    const [count,setCount]=useState(0)
    const handleChange=useCallback(()=>{
        setCount(count+1)
    },[])
    return(
        <>
        count:{count}
        <button onClick={handleChange}>Increment</button>

        <ChildUseCallBack buttonName="click me" handleChange={handleChange}/>
    
        </>
    )
     
}