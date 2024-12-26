import { useContext } from "react"
import { BioContext } from "."

export const About = () => {
    const {myName,age}=useContext(BioContext)
    return (
        <>
           <h3>My name is {myName}</h3>
           <h3>age is {age}</h3>
        </>
    )
}