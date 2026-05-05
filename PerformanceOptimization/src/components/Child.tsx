import React from "react"
export const Child=React.memo(()=>{
    console.log("Child Component render....")
    return(
        <>
        <p> this is Child Component...</p>
        </>
    )
})