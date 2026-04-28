
//Child Props
type ChildProps={
    style: React.CSSProperties
    children:string
 
}

export function Child(props:ChildProps){
    return(
    <>
        <p style ={props.style}>{props.children}</p>
    </>
    )
}

// App.tsx

{/* <child>fghbjnkml</child> */}





//app.tsx
{/* <component> // children:React.ReactNode
 <Child > this is Child Props</Child>
</component> */}
