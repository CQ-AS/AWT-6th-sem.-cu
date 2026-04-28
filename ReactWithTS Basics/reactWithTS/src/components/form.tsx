import { useState } from "react";

type FormProps={
    user:{
        firstName:string,
        lastName:string,
        password:string,
        email:string
    }
    handleChange:(e:React.SubmitEvent<HTMLFormElement>)=>void
}


export function Form(props:FormProps){
    return(
        <>
        <form onSubmit={props.handleChange}>
        <input type="text" name="fname" placeholder="UserFirstName"></input>
        <input type="text" name="lname" placeholder="UserFirstName"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="email" name="email" placeholder="Password"></input>
        <button type="submit">submit</button>
        </form>
        <div>
            <div>User Name: {}</div>
            <div>User Email:{}</div>
            <div>Address: {}</div>
        </div>
        </>
    )
}


// App.tsx
// impont Form component
// import useState
// const [value,setValue]=useState<number>(0)


type UserDetails={
    firstName:string,
    LastName:string,
    password:string,
    email:string
}


// const [userDetails,setUserDetails]=useState<UserDetails>({}as UserDetails)

// // retrun(
// //     <>
//     <Form  user={userDetails } handleChange={(e)=>{


//         const formData= new Form();
//         const firestname= formData.get('fname');
//         console.log(firestname);
        

//     }}/>
    
    
// //     </>
// // )