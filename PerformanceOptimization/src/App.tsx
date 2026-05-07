// import { useState } from 'react'

import { lazy,Suspense } from 'react'
import './App.css'
import { UserProfiles } from './components/UsersProfiles'
// import { ExpensiveComponent } from './components/CallBackExpensiveTask'

// import { Child } from './components/Child'
// import { UseMemo } from './components/UseMemo'
// import { UseCallBack } from './components/UseCallBack'
import { Fetch } from './components/Fetch'
const LazyComponent= lazy(()=>import ("./components/LazyLoading"))


function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
    {/* <Fetch/> */}
    <UserProfiles/>
{/* <Suspense fallback={<h1>Loading....</h1>}><LazyComponent/></Suspense> */}
    {/* <p>Count:{count}</p>
    <button onClick={()=>{setCount(count+1)}}>Increment</button> */}

    {/* <Child/> */}
    {/* <UseMemo/> */}
    {/* <UseCallBack/> */}
    {/* <ExpensiveComponent/> */}
    {/* <UserProfiles/> */}
    </>
  )
}

export default App
