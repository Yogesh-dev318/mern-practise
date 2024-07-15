import { useEffect, useState } from "react"

export default function Joker(){
    let [Joke,setjoke]=useState({})
    const url="https://official-joke-api.appspot.com/random_joke"
    let getjoke=async()=>{
        let res=await fetch(url)
        let jsonresponse=await res.json()
        setjoke({setup: jsonresponse.setup,punchline:jsonresponse.punchline})
    }
    useEffect(()=>{async function get1stjoke(){
        let res=await fetch(url)
        let jsonresponse=await res.json()
        setjoke({setup: jsonresponse.setup,punchline:jsonresponse.punchline})
    }get1stjoke()},[])



    return(
        <div>
            <h3>Joker</h3> 
            <h3>{Joke.setup}</h3>
            <h3>{Joke.punchline}</h3>
            <button onClick={getjoke}>New Joke</button>
        </div>
    )
}