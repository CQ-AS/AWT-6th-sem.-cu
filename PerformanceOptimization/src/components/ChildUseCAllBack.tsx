import React from "react"
export const ChildUseCallBack= React.memo((props:{buttonName:string, handleChange:()=>void})=>{
    console.log("ChildUseCallBack Component render....")
    return(
        <>
        <p> Child Use CallBack Rerender....</p>
        <button onClick={props.handleChange}>{props.buttonName}</button>
        </>
    )
})
