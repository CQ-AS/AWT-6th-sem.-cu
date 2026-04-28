// Adv. child props , use React.React node // result :- Component/ elmement
type ChildAdvPRops={
    children:React.ReactNode
}


export function ChildAdv(props:ChildAdvPRops){
    return(
        <>
        <h3>{props.children}</h3>
        </>
    )
}

{/* <ChildAdv><child>fghbjnkml</child></ChildAdv> */}