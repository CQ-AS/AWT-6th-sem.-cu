// Concept useReducer Hook

import { useReducer } from "react"

type stateType={
    counter:number
}

type actionType={
    type:string
    value:number
}
const initialValue ={counter:0}

function reducer(state:stateType,action:actionType){
    switch(action.type){
        case "increment":
            return {counter: state.counter+action.value}
        case "decrement":
            return {counter: state.counter - action.value}
        default :
            return state

    }
}

export function Counter(){
    
    const [state,dispach]=useReducer(reducer,initialValue)

    return(
    <>
        <p>Counter: {state.counter}</p>
        <button onClick={()=>{dispach({type:"increment",value:10})}}>Increment Counter By 10</button>
        <button onClick={()=>{dispach({type:"decrement",value:5})}}>Decrement Counter By 5</button>

    </>
    )

}

