// props Array
// Person Array: userFirstName , UserLastName

type PersonListProps={
    name:{
        firstName:string,
        lastName:string
    }[]
}

export function PersonList(props:PersonListProps){
    return(
        <>
        <h4>Person List Component</h4>
        {props.name.map(names=>{
            return (
            <div key={names.firstName}>
            <p>{names.firstName}</p>
            <p>{names.lastName}</p>
            </div>
            )

        })}
        </>
    )
}

// import App.tsx
// const list=[
//     {firstName:"user1", lastName:"user1 Last Name"},
//     {firstName:"user1", lastName:"user1 Last Name"},
//     {firstName:"user1", lastName:"user1 Last Name"}
// ]

// <PersonList name={list}/>

// <Component>this <Compontent/>
