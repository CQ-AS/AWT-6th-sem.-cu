import { Controlled } from "./components/Controlled"
import { ReactHookForm } from "./components/ReactHookForm"
import { UnControlled } from "./components/UnControlled"
import { YupValidation } from "./components/YupValidation"
import { ZodValidation } from "./components/ZodValidation"
import './App.css'
function App() {
  

  return (
    <>
     <h1>Form Handling</h1>
     <h3>1. Controlled  : Where Form Data is Handled by React Component State</h3>
     <h3>2. UnControlled : Where Form Data is Handled by DOM itself</h3>
     <h3>3. React-Hook-Form : third party Library (hybrid: controlled and uncontrolled)</h3>
     <br/>
     {/* <Controlled/> */}
     <br/>
     {/* <UnControlled/> */}
     <br/>
     {/* <ReactHookForm/> */}
     <br/>
     <YupValidation/>

    </>
  )
}

export default App
