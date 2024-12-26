import { useState } from "react"
import "./UseStateTask.css"
export const UseStateTask=()=>{
   const[count,setCount]= useState(0)
   const[step,setStep]=useState(0)
    return (<>

    <div className="counter-container">
        <h1>{count}</h1>
    <input className="counter-input" type="number" value={step} onChange={(event)=>setStep(Number(event.target.value))}/>
    
    <div >
        <button className="btn decreament-btn" onClick={()=>setCount(count-step)} disabled={count <=0}>Decrement</button>
        <button className="btn increament-btn" onClick={()=>setCount(count+step)} disabled={count >=100}>Increment</button>
        <button className="btn reset-btn" onClick={()=>{setCount(0), setStep(0)}} >Reset</button>
    </div>
</div>
    </>)
}


