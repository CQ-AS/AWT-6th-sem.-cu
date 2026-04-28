type TextAreaProps={
    textAreaValue:string
    handlChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void
}


const TextArea=(props:TextAreaProps)=>{
    return(
        <>
            <textarea value={props.textAreaValue} onChange={props.handlChange}>
            </textarea>
            <p>You Type in Text Area:{props.textAreaValue} </p>
        </>
    )
}

export {TextArea}