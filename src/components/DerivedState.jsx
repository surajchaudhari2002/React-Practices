import { useState } from "react"

export const DerivedState=()=>{
//    const users= [
//         { name: "Alice", age: 25 },
//         { name: "Bob", age: 30 },
//         { name: "Charlie", age: 35 },
//         { name: "Angles", age: 45 },
//       ]

      const [users,setUsers]=useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 },
      ])
return (
    <>
    <h1>Hello everyone</h1>
    <ul>
    {
        users.map((curr,index)=>{
            return <li key={index}> <h3>{curr.name} is {curr.age} year old. </h3></li>
        })
    }
    </ul>
    </>
)
}