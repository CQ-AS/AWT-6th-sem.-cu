import { useState } from "react"

export function Count(){

    const [count,setCounter]=useState<number>(0);
    // const [username,setUserNAme]=useState<string>("")
    // const [isLogin,setISLogin]=useState<boolean>(false)

    return(
        <>
        <div>count:{count}</div>
        <button onClick={()=>{setCounter(count+1)}}>Increment</button>
        </>
    )

}
