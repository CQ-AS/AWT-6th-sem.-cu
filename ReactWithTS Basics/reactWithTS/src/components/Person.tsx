//props object
type PersonProps={
    Id:number
    name :{
        firstName : string,
        lastName : string
    }
}

export function Person(props : PersonProps){
    return(
        <>
        <h4>Person Component</h4>
        <p>Person first Name : {props.name.firstName}</p>
        <p>Person Last Name : {props.name.lastName}</p> 
        </>
    )

}


// import {Person} from "./"

// App(){
    // const username:{
    //     firstName:"Aparna"
    //     lastName:"Sharma"
    // }
    // return(

    //     <>
        //  <Person name={username}  ID={10}/>
    //     </>
    // )


// }

