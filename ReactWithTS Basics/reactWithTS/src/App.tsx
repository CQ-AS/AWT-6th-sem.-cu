// import {Greet} from "./components/Greet"
// import {Person} from "./components/Person"
// import { PersonList } from "./components/PersonList"
// import { Status } from "./components/Status"
// import { Child } from "./components/Child"
// import { ChildAdv } from "./components/childAdv"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { Radio } from "./components/Radio"
import { TextArea } from "./components/TextArea"
import { Select } from "./components/Select"
// import { Form } from "./components/form"

import { useState } from "react"

function App() {

  // const PersonName ={
  //   firstName:"Aparna",
  //   lastName:"Sharma"
  // }

  // const personlist =[
  //   {firstName :"user1" , lastName :"user1 lastName"},
  //   {firstName :"user2" , lastName :"user2 lastName"},
  //   {firstName :"user3" , lastName :"user3 lastName"}
  //   ]
  const [value,setValue]=useState("")
  const [textArea,SetTextArea]=useState("")
  const [selValue,SetSelValue]=useState("")

  return (

    <>
    <Button handlClick={(e)=>{
      console.log(e)
      alert("Button clicked")
    }}></Button>
  
    <br>
    </br>

    <Input value={value} handleChange={(e)=>{
      setValue(e.target.value)
    
    }}></Input>

    <br></br>


    <Radio handleChang={(e)=>{
      console.log(e.target.value)
      alert("You Select "+e.target.value)
    }}></Radio>

    <br></br>

    <TextArea textAreaValue={textArea} handlChange={(e)=>{
      SetTextArea(e.target.value)
    }}></TextArea>

    <br></br>

    <Select value={selValue} handleChange={e=>{
      console.log(e.target.value)
      SetSelValue(e.target.value)
      alert("selected  State : "+e.target.value)
    }}></Select>


    <br></br>

    {/* <Form user={} handleChange={e=>{
      e.preventDefault()
      const formData= new FormData(e.currentTarget)
      const inputValue =formData.get("username")
      const password = formData.get("password")
      console.log(inputValue , password)
    }}></Form> */}

     {/* <h1>React with TypeScript</h1>
     <p> paragraph 1</p>
      <p> paragraph 2</p>
       <p> paragraph 3</p>
       <Greet username="ABCD" ID ={10} isLoggedIn={false}/>

       <Person name={PersonName}/> */}

       {/* <PersonList name={personlist}/>
       <Status status="error"/> */}

        {/* <Child style={{padding:10 , margin:20 , color : 'red'}}>This is Child Props</Child> */}

        {/* <ChildAdv>
            <Child>this is Child Props Component inside the Child Adv Component</Child>
        </ChildAdv> */}


    </>
  )
}

export default App
