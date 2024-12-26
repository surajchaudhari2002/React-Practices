export const EventProps=()=>{
    function handleUser(user){
        alert(`hello,${user} welcome`)
    }
    
    const handleHover=()=>{
   alert("thanks for hovering ...")
    }

    return(
        <>
        <WelcomeUser clickuser={handleUser} hover={handleHover}/>
        </>
    )
}

const WelcomeUser=(props)=>{
    const{clickuser,hover}=props

     
     return(
        <>
        <button onClick={()=>clickuser("suraj")}><h1>click me</h1></button>
        <br />
        <button onMouseEnter={()=>hover()}><h1>hover me </h1></button>
        </>
     )
}