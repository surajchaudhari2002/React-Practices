import { useState } from "react"
export const LiftStateUp=()=>{
    const [inputValue,setInputValue]=useState("")
    return (
        <>
        <InputComponennt inputValue={inputValue} setInputValue={setInputValue}/>
        <DisplayComponent inputValue={inputValue}/>
        </>
    )
}


const InputComponennt=({inputValue,setInputValue})=>{

  
    return(
        <>
        <input type="text" 
        placeholder="enter input"  
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        </>
    )
}

const DisplayComponent=({inputValue})=>{
    return(
        <>
        <h1>The Input Element Is : {inputValue}</h1>
        </>
    )
}