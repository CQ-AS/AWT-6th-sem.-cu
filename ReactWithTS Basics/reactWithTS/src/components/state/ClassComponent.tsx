// Concept Class Component and state variables in class component 
import { Component } from "react"; // state, prop, lifecycle

type props={
    messg?:string
}

type state={
    islogedin:boolean
}

export class ClassCounter extends Component<props , state>{

        state={
        islogedin:false
        }
    
    handllogin=()=>{
        this.setState({islogedin:true})
    }
    handllogout=()=>{
        this.setState({islogedin:false})
    }

    render(){
        return(
            <>
            <h3>This is Class Component</h3>
            <p>User is { this.state.islogedin? "loged IN": "Loged OUT"}</p>
            <button onClick={this.handllogin}>login</button>
            <button onClick={this.handllogout}>logout</button>
    
            </>
        )
    }

}



// diff Function component and class component
// state  useState             setState()
// latest                       old project
// useEffect(lifecycle)          built in methods (lifecycle)
                                // 1. componentDidMount ->when component is load on your page
                                // 2. componentDidUpdate -> update/ change in any StaticRange
                                // 3. componentwillunMount -> before removing any component from your UI

// React compontents , confi, flow , PRops Passings (basic number, string, union , object, Array,child props(adv React.ReactNode)

// Last Lec -> Events Handling assignment: Button, selectors, input, text area, radio , form Event
//     function Compontents state variable useState Hook (adv)

// Lec -> Last Lec revisit function Compontents state variable useState Hook (adv)
//  useReduser() , class Component and state Variables in Class components
