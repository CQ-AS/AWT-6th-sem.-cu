// useEffect Hook 

import {  useEffect,useState } from "react"

// Synax
// useEffect(setup Function,depe..)
// useEffect(()=>{},)
// depen1 : no depen. dom,runevery time when compenent rerender 
// useEffect(()=>{},[])
// depen 2 : empty Array [] : if want to perform any task once use empty array
// depen 3: [count, status] 


// Task: Update count value by 1 in every one sec by useEffect and settimeOut


export function Count(){
  const [count,setCount]=useState<number>(0);
  const [status,setStatus]=useState<boolean>(false);

  useEffect(()=>{
    console.log("component mount")

      const timer=setInterval(()=>{
          setCount(count=>count+1)
      },1000)

    return ()=>{
      clearInterval(timer)
      console.log("component unmount")
    }
  },[count])
  
  return(
  <>
  
    <p>Count Component </p>
    <h1>Count: {count}</h1>
    {status?<h1>Status True</h1>:<h1> Status False</h1>}
    {/* <button onClick={()=>{setCount(count+1)}}>Increment</button> */}
    <button onClick={()=>{setStatus(status?false:true)}} >Change Status</button>
  </>
  )
}


export function DataFetch(){

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

  },[])

  return(
  <>
    <p>useEffect Hook with fetch Api </p>
  </>
  )
}

export function Counter(){
  return(
    <>
    
  <DataFetch/>
    </>
  )
}




// import { useState,useEffect } from "react";
// export function Count() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let time=setTimeout(() => {
//       setCount((pre) => pre +1);
//       console.log(count);
//     }, 1000);

//     return ()=>clearTimeout(time);

//   });

//   return <h1>I've rendered {count} times!</h1>;
// }


// //
// export function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2); 
//   }, [count]); 

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }