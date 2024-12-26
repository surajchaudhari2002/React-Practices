const EventHandling = () => {
    function handleButtonClick(event ) {

        console.log(`button clickc called`)
        console .log(event)
        alert("click me works called")
    }
    const handleHelloUser=(user)=>{
        console.log(`Hello, ${user}, welcome`)
    }
    return (
        <>
            <h1>hello</h1>
            <br />

            <button onClick={()=>alert("inline function is called")}>inline function</button>
            <br />

            <button onClick={handleButtonClick}><h3>click me check </h3></button>
            <button onClick={(event)=>handleButtonClick(event)}>click me 2</button>
            <br />
            <button onClick={()=>handleHelloUser("suraj")}>hello </button>
        </>
    )
}

export default EventHandling