//UnControled Component : form/componnent handling are those 
                     //where form data is handled by DOM by using useRef

import { useRef } from "react"
        
export function UnControlled(){
    const fnameRef=useRef<HTMLInputElement>(null);
    const lnameRef=useRef<HTMLInputElement>(null);
   
    function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(fnameRef.current?.value)
         console.log(lnameRef.current?.value)
         alert("uncontrolled form submit usename "+ fnameRef.current?.value +" " + lnameRef.current?.value)
    }

    return(
        <>
            <h5>Uncontrolled Component...</h5>
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input type="text"  name="fname" ref={fnameRef}/>
                <label>Last Name: </label>
                <input type="text" name="lname" ref={lnameRef}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}