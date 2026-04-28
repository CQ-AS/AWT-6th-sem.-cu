import {Routes,Route} from 'react-router'
import { Home } from './Components/Home'
import {About} from './Components/About'
import { Contact } from './Components/Contact'
import { NavBar } from './Components/NavBar'
import { PageNotFound } from './Components/PageNotFound'
import { Student } from './Components/Student'
import { StudentMarks } from './Components/StudentMarks'
import { StudentDetails } from './Components/StudentDetails'
import { Login } from './Components/Login'
import { Count, Counter } from './Components/Count'
import { Users } from './Components/users'
import { UserDetails } from './Components/UserDetails'
import { Admin } from './Components/Admin'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/count' element={<Count/>}/>
         <Route path='/counter' element={<Counter/>}/>
         <Route path='/count' element={<Count/>}/>

         //Dynamic Routing
         <Route path='/user' element={<Users/>}> // static Routing
           <Route path=':userId' element={<UserDetails/>}/> //ULR : /user/5678
           <Route path='admin' element={<Admin/>}/> // /user/admin
         </Route> 

         



         {/* <Route path='/user/1' element={<UserDetails/>}/>
          <Route path='/user/5' element={<UserDetails/>}/>
          <Route path='/user/10' element={<UserDetails/>}/> */}
      
        <Route path='/student' element={<Student/>}>
          <Route index element={<StudentMarks/>}/>
          <Route path='marks' element={<StudentMarks/>}/>
          <Route path='details' element={<StudentDetails/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>

    </>
  )
}

export default App
