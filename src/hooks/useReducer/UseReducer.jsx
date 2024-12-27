import { useReducer, useState } from "react"

export const UseReducer=()=>{
    const initailState={
        count:0,
        incr:2,
        decr:2
    }
    const reducer=(state,action)=>{
        if(action.type==="Increment"){
            return {...state,count: state.count+state.incr}
        }
        if(action.type==="reset"){
            return {count:0}
        }
        if (action.type==="Decrement") 
            return {...state,count: state.count-state.decr}
    }

    const [state,dispatch]=useReducer(reducer,initailState)
    
    return(
        <>
        <div className=" p-4 h-lvh flex flex-col justify-center items-center ">
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"Increment"})}>Increament</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
     </div>
     </>
     )

}