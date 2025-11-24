import React from "react"
import {useState} from "react"

function Greet({name}){
    const [count,setCount]= useState(0);
    return(<div>
        {count}
        <br></br>
        <button onClick={()=>{
            setCount(count+1);
        }}> click me </button>
    </div>)
}

export default Greet