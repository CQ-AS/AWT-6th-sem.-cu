

type ButtonProps={


    handlClick:(e:React.MouseEvent<HTMLParagraphElement>)=>void

    // handlClick:(e:React.MouseEvent<HTMLButtonElement>)=>void

}

export function Button(props: ButtonProps){
    return(
        <>
            <p onClick={props.handlClick}>click me</p>
        </>
    )
}



// App.tsx

{/* <Button handlClick={(e)=>{alert("Button Clicked")}}/> */}