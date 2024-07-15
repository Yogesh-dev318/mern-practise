import { useState } from "react"
import Comment from "./comment.jsx"
export default function Commentform({addnewcomment}){
    let [formdata,setformdata]=useState({
        username:"",
        remarks:"",
        rating:5
    })

    function handleinputdata(event){
        setformdata((formdata)=>{
            return {...formdata,[event.target.name]:event.target.value}
        })
    }
    function d(){
       console.log(formdata)
    }
    let handlesubmit=(event)=>{
        console.log(formdata)
        addnewcomment(formdata)
        event.preventDefault()
        setformdata({
            username:"",
            remarks:"",
            rating:5
        })
    }
    return(
        <div>
            <h4>
                Give a comment
            </h4>
            <form onSubmit={handlesubmit}>

                <input placeholder="Username" type="text" value={formdata.username} name="username" onChange={handleinputdata}></input>
                <br></br><br></br>
                <textarea placeholder="Add remarks" value={formdata.remarks} name="remarks" onChange={handleinputdata}>Remarks</textarea>
                <br></br><br></br>
                <input placeholder="Rating" type="number" min={1} max={5} value={formdata.rating} name="rating" onChange={handleinputdata}></input>
                <br></br><br></br> 
                <button>Submit</button>
            </form>
        </div>
    )
}