type GreetProps={
    username:string // string data type
    ID:number | string // union data type / optional
    isLoggedIn : boolean
}

export function Greet(props : GreetProps){
    return (
        <>
        {props.isLoggedIn ? <h1>Welcome {props.username}</h1> : <h1>Welcome Guest</h1>}
        </>
        
    )
}


