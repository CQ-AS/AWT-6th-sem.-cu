import { useContext,useState } from "react"
import { userContext } from "./Context/UserContext";

export function Login(){
   function handlSubmit(e:React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    setName(value);
   }

   const [value,setValue]=useState("")
   const {setName}=useContext(userContext)
    return(
    <>
    <form onSubmit={handlSubmit}>
        <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}}></input>
        <button type="submit">update Name</button>
    </form>
    </>
    )
}
























// import { useContext, useState } from "react";
// import { UserContext } from "./Context/UserContext";

// export function Login() {
//   // ✅ hooks INSIDE component
//   const [value, setValue] = useState<string>("");
//   const { setUser } = useContext(UserContext);

//   function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setUser(value);
//     setValue(""); // optional
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={value}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//           setValue(e.target.value)
//         }
//         placeholder="Enter username"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
