import { useState } from "react"

export default function Likebutton(){
    let [isliked,setisliked]=useState(false)
    let [click,setclick]=useState(0)
    function cliked(){
        setclick(click+=1)
        setisliked(!isliked)
    }
    let style={color:"red"}
    return(
        <>
        <p>Click = {click}</p>
        <div><p onClick={cliked}>{isliked ? (<i className="fa-solid fa-heart" style={style}></i>) : (<i className="fa-regular fa-heart"></i>)}</p></div>
        </>
    )
}