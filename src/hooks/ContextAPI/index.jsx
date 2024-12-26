import { Children, createContext } from "react";

export const BioContext=createContext();

export const BioProvider=({children})=>{
    const myName="Suraj";
    const age=22;
    console.log(children)

    return(
        <>
        <BioContext.Provider value={{myName,age}} >
         {children}
            </BioContext.Provider>
        </>
    )
}