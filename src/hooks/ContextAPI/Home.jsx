import { use, useContext } from "react"
import { BioContext } from "."

export const Home=()=>{
    const {myName,age}=useContext(BioContext)

    return(
        <>
        <h1>Hello Context API. My Name Is {myName}</h1>
        <h1>age is {age}</h1>
        </>
    )
}