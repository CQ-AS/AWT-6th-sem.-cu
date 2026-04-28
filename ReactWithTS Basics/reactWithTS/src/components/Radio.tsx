type RadioProps={
    handleChang:(e:React.ChangeEvent<HTMLInputElement>)=>void
}


export function Radio(props:RadioProps){
    return(
        <>
        <input type="radio" value="M" name="gender" onChange={props.handleChang}/>M
        <input type="radio" value="F" name="gender" onChange={props.handleChang}/>F
        </>
    )
}