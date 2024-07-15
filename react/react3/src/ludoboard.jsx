import { useState } from "react"

export default function Ludoboard(){
    let [moves,setmoves]=useState({blue:0,red:0,yellow:0,green:0})
    function blue(){
        console.log(moves)
        setmoves({...moves,blue:moves.blue +1})
    }
    function Yellow(){
        console.log(moves)
        setmoves((color)=>{
            return {...color,yellow:color.yellow +1}
        })
    }
    function green(){
        console.log(moves)
        setmoves((color)=>{
            return {...color,green:color.green +1}
        })
    }
    function red(){
        console.log(moves)
        setmoves((color)=>{
            return {...color,red:color.red +1}
        })
    }
    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={blue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={Yellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={green}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={red}>+1</button>
            </div>
        </div>
    )
}