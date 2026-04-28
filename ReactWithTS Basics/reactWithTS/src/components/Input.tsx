

type InputProps={
    value:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}


export function Input(Props:InputProps){

    return(
        <>
            <input value={Props.value} onChange={Props.handleChange} placeholder=" Enter your Name.."></input>
            <p>Name: {Props.value}</p>
        
        </>
    )

}

//App.tsx
// import {useState} from 'react'

// const [value,setValue]=useState("");
// <Input value={value} handleChange={(e)=>{setValue(e.target.value)}}/>