import { useMemo, useState } from "react"

export function UseMemo(){
    const [count,setCount]=useState(0);
    const [input , setInput]=useState(0);
    console.log("useMemo component render...")
    function ExpensiveTask(val:number){
        for(let i=0;i<1000000000;i++){}
        return count*val;
    }

    let DoubleVale=useMemo( ()=>ExpensiveTask(input),[input]);

    return(
        <>
        Count:{count}
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <input type="number"value={input} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInput(Number(e.target.value))}}/>
        Double:{DoubleVale}
        </>
    )

}
