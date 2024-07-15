import { useState } from "react"
import "./comment.css"
import Commentform from "./commentform.jsx"
export default function Comment({data}){
    let [comments,setcomment]=useState([{
        username:"Yogesh",
        remarks:"great job!",
        rating:5
    }])
    let addnewcomment=(comment)=>{
        setcomment((com)=>[...com,{comment}])
        console.log("hll")
    }
    return(
        <>
            <div>
                <h3>All Comments</h3>
               
                {comments.map((comments,idx)=>(
                    <div className="comment" key={idx}>
                    <span>{comments.rating}</span> 
                    &nbsp;
                    <span>rating={comments.rating}</span>
                    <p>- {comments.username}</p>
                    </div>
                ))}
                    
 
            </div>
            <Commentform addnewcomment={addnewcomment}/>
        </>
    )
}