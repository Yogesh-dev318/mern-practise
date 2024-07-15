import { useState } from "react"
import "./lottery.css"
import { genticket} from "./helper"
export default function Lottery(){
    let [ticket,setticket]=useState(genticket(3))
    return(<div>
        <h1>Lottery</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
            <br></br>
        </div>
    </div>)
}