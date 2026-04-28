import { createContext, useState} from "react"

type userContextType={
    name:string,
    setName:React.Dispatch<React.SetStateAction<string>>
}

type userContextProviderType={
    children:React.ReactNode
}


export const userContext=createContext<userContextType>({name:"Guest",setName:()=>{}})


export default function UserContextProvider(props:userContextProviderType){
    const [name,setName]=useState("Guest")
    return(
    <>
    <userContext.Provider value={{name,setName}}>
        {props.children}
    </userContext.Provider>
    </>)
}







































































// import { createContext ,useState} from "react";

// type UserContextType = {
//   user: string;
//   setUser: React.Dispatch<React.SetStateAction<string>>;
// };

// export const UserContext= createContext<UserContextType>({user:"",setUser:()=>{}})
// type UserContextProviderType={
//     children:React.ReactNode
// }
// export function UserContextProvider(props:UserContextProviderType){
//     const [user,setUser]=useState<string>("Guest")
//     return(
//     <>
//         <UserContext.Provider value={{user,setUser}}>
//             {props.children}
//         </UserContext.Provider>
//     </>
//     )
// }