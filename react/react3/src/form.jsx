import { useState } from "react"

export default function Form(){
    let [data,setdata]=useState({
        fullname:"",
        username:""
    })
    // function namechange(event){
    //     console.log(event.target.value)
    //     setname(event.target.value)
    // }
    // function full(event){
    //     setfullname(event.target.value)
    // }
    let handleinputchamge=(event)=>{
        let fieldname=event.target.name
        let newValue=event.target.value
        console.log(fieldname)
        setdata((data)=>{
            return {...data ,[ event.target.name ]:event.target.value}
        })
    }

    return(
        <form>
            <label htmlFor="fullname">Enter Name</label>
            <input placeholder="Enter your fullname" value={data.fullname} onChange={handleinputchamge} id="fullname" name="fullname"></input>
            <button>Submit</button>

            <label htmlFor="username">Enter Name</label>
            <input placeholder="Enter your fullname" value={data.username} onChange={handleinputchamge} id="username" name="username"></input>
            <button>Submit</button>
        </form>
    )
}