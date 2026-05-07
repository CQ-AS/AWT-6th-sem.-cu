import { useCallback, useEffect, useRef, useState } from "react"

export const ExpensiveComponent =()=>{
    const [count, setCount]=useState(0);
    const [input,setInput] = useState(0);
    const prevFunction = useRef<()=>number|null>(null);

    const expensiveCalulation = useCallback(()=>{
            console.log("Running expensive calculation...")
            let result=0;
            for(let i=0;i<10000000;i++){
                result+=1;
            }
            return result;
    },[count])

    useEffect(()=>{
        if(prevFunction.current){
            if(prevFunction.current===expensiveCalulation){
                    console.log("function not re-create")
            }else{
                console.log("function recreated")
            }

        }
        else{
            prevFunction.current=expensiveCalulation
        }

    },[expensiveCalulation])

    return(
        <>
        Count:{count}
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <input type="number"value={input} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInput(Number(e.target.value))}}/>
        Calculation:{expensiveCalulation()}
        </>
    )

}