import React from "react"
import Greet from "./greet"
import Todolist from "./todolist";

function App(){
    // react fragment <>
    //style is done in camel case instead of hyphen'-'
    return(
        <div>
            <Todolist></Todolist>
        </div>
    )
}

export default App;
