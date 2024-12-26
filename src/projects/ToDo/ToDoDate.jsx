import { useEffect, useState } from "react";

export const ToDoDate=()=>{

    const [dateTime, setDateTime] = useState("")

    useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date();
                const formattedDate = now.toLocaleDateString();
                const fofrmattedTime = now.toLocaleTimeString();
                setDateTime(`${formattedDate} - ${fofrmattedTime}`);
            }, 1000);
    
            // Clean up the interval when the component unmounts
            return () => clearInterval(interval);
        }, []);
    return(
        <>
        <h1 style={{ color: "black" }}>{dateTime}</h1>
        </>
    )
}