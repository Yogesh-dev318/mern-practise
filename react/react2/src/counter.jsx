import { useState } from "react"
export default function Counter(){
    // let [stateVariable,setStateVariable]=useState(10)
    let [count,setcount]=useState(0);
    function incount(){
        setcount(count +1)
    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incount}>Increase Count</button>
        </div>
    )
}