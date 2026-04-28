import { useParams } from "react-router"

export function UserDetails(){
    const param=useParams();
    const userID=param.userId
    return(
    <>
        <h1>User Details {userID}</h1> //ULR: /user/78
    </>
    )
}