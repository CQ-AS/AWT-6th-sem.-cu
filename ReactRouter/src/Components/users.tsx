import { Outlet , useSearchParams} from "react-router"

export function Users(){
    const [searchParms,setSearchParams]=useSearchParams();
    const showActiveUSers= searchParms.get('filter')
    return(
        <>
        <p>User 1</p>
        <p>User 2</p>
        <p>User 3</p>
        <div>
            <button onClick={()=>{setSearchParams({filter:"active"})}}>Active User</button>
        </div>
        <div>
             <button onClick={()=>{setSearchParams({filter:""})}}>Reset Filter</button>
        </div>
        {showActiveUSers?(
            <h1> Active Users...</h1>
        ):(
            <h1> All Users...</h1>
        )}
        <Outlet/>
        </>

    )
}