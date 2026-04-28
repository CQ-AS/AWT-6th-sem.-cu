//messg: loading..
// success
// error
type StatusProps={
    status:"loading"| "sucess"| "error"
}

export function Status(props:StatusProps){
    let messg
     if(props.status=="loading"){
            messg = "Loading"
        }
        else if(props.status ==="sucess"){
            messg= "sucess"
        }else if(props.status ==="error"){
            messg= "error"
        }
    return(
        <>
        <h1>Message : {messg}</h1>
        </>
    )
}
