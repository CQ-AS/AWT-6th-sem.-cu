import { useState } from "react"

type AutUser={
    name:string,
    email:string
}

export function User(){
    // const [value,setValue]=useState<number>("")
    const [user,setUser]=useState<null | AutUser >(null)
    // const [user,setUser]=useState<AutUser>({} as AutUser)

    function handleLogin(){
        setUser({
            name:"aparna",
            email:"aparna@gmail.com"
        })
    }
    function HandleLogout(){
        setUser(null)

    }

    return(
        <>
        <button onClick={handleLogin}>login</button>
        <button onClick={HandleLogout}>logout</button>

        <div>User Name: {user?.name}</div>
        <div>User Email: {user?.email}</div>
        </>
    )
}