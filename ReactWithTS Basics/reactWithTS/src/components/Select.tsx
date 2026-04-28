type SelectProps={
    value:string
    handleChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}

export function Select(props:SelectProps){
    return(
        <>
        <select value={props.value} onChange={props.handleChange}>
        
            <option value="City A" >City A</option>
            <option value="City B" >City B</option>
        </select>
        </>
    )

}
// App.tsx
// import
// const [value,setValue]=useState("")

// <Select value={value} handleChange={(e)=>{ 
//     setValue(e.target.value)
//     alert(e.target.value)
//     }}/>