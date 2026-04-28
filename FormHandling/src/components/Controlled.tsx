import  { useState } from "react";

export function Controlled() {

  // const [name, setName]=useState<string>("")
  // const [email,setEmail]=useState<string>("")
  //  const [password,setPassword]=useState<string>("")

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  })

  function handleChange(e:React.ChangeEvent<HTMLInputElement |  HTMLTextAreaElement >){
    // const {name,value}=e.target

    setFormData((prev)=>({
      ...prev,
      [e.target.name] : e.target.value // [name]:value
    }))

  }

  // function handleChange(e:React.ChangeEvent<HTMLInputElement>){
  //     setName(e.target.value);
  // }

  // function handleChangeEmail(e:React.ChangeEvent<HTMLInputElement>){
  //   setEmail(e.target.value)
  // }

  function HandleForm(e:React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    alert("Form is Submited")
  }

  return (
    <>
    <form onSubmit={HandleForm}>
      <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange}/>
      <br />
      <button type="submit">Submit</button>
    </form>

    User Name: {formData.name}<br/>
    User Email: {formData.email}<br/>
    User Password :{formData.password}<br/>

    </>
  );
}

