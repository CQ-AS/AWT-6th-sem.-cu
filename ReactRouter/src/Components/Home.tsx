import { useNavigate } from "react-router"
export function Home(){
    const navigate=useNavigate()
    return(
        <>
        <h1>Home Page</h1>
        <button onClick={()=>{navigate('login')}}>Login</button>
        </>
    )
}

