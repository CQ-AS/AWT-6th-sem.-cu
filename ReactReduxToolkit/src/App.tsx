import { useSelector, useDispatch} from 'react-redux'
import { increment,decrement ,reset,addAmount} from './features/CounterSlice'
import { useState } from 'react'
import './App.css'

function App() {
  const count=useSelector((state:any)=>state.counter.count)
  const dispatch=useDispatch();
const [amount,setAmount]=useState<number>(0)
function handlechaneg(e:React.ChangeEvent<HTMLInputElement>){
  setAmount(Number(e.target.value))

}
  return (
    <div>
      Count: {count}
      <input type='number' onChange={handlechaneg} placeholder='Enter Amount..'/>
       <button onClick={()=>dispatch(addAmount(amount))}>Add Amount</button>


      <br />
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
       <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App