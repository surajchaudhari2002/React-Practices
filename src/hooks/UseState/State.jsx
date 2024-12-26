import { useState } from "react"

export const State = () => {

    const [count, setcount] = useState(0);
    console.log("Parent Component rendered");
    const handleButtonClick = () => {
        setcount(() => count + 1)
        console.log(count)
    }
    return (<>
        <h1>{count}</h1>
        <button onClick={() => handleButtonClick()}><h1>Increment</h1></button>
        <ChildComponent count={count}/>
    </>)
}

const ChildComponent=({count})=>{
    console.log("child component rendered")
    return(
        <>
          <h2>Child component -{count}</h2>
        </>
    )
}