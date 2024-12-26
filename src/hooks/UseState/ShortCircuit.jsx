import { useState } from "react"
import "./ShortCircuit.css"
export const ShortCircuit=()=>{
    const[logged,setLogged]=useState(false)
    const[user,setUser]=useState("")
return (<>
      
        <h1>Welcome To The ShortCircuit Portal</h1>
       { logged && <p>Your Are Logged In</p>}
       { user? `Hello ${user}` : "please Login !"}
        <br />
        <div className="grid-three-cols">
            <button onClick={()=>setLogged(!logged)}>Toggle Logine State</button>
            <button onClick={()=>setUser("Suraj")}>Set User</button>
            <button onClick={()=>setUser("")}>Clear User</button>
        </div>
      
</>)
}

