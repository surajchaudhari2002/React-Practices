export const Propsdriling=()=>{

    return(
        <>
        <Parent data="Suraj"/>
        </>
    )
}

const Parent=({data})=>{
    return (<>
    <Child data={data}/>
    </>)
}


const Child=({data})=>{
    return(
        <>
        <h1>My Name Is {data}</h1>
        </>
    )
}