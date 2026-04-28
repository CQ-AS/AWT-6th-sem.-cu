import { useContext } from "react"
import { userContext } from "./Context/UserContext"


export function Greet(){
    const {name}=useContext(userContext)
    return(
    <>
    <h1>Welcome {name}</h1>
    </>
    )
}































// import { useContext } from "react";
// // import { UserContext } from "../App";
// import { UserContext } from "./Context/UserContext";

// export function Greet() {
//   const { user } = useContext(UserContext);

//   return <h1>User Name: {user}</h1>;
// }

