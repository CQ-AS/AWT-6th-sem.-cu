import { useEffect,useState } from "react"
import Card from "./ReuableCart";


export function UserProfiles(){
    const [user,setUsers]=useState<any[]>([])
    useEffect(()=>{
            async function FetchUsers(){
                try{
                const res=await fetch(`https://dummyjson.com/users?limit=10`,)
                const data=await (res.json())                                            
                console.log(data.users);
                setUsers(data.users)
            }
            catch(err:any){
            if(err==="AbortError"){
                console.log("Req cancelled....")
            }else{
                console.log(err);
            }
        }
        }
            FetchUsers()
        },[])


    return(
        <>
        {user.map((u:any)=>(
            <div key={u.id}>
            <Card id={u.id} image={u.image} firstName={u.firstName} lastName={u.lastName}/>
            </div>
        ))}

        </>
    )

}