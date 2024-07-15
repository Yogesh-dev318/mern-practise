import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todolist(){
    let [todo,settodo]=useState([{task:"sample task",id:uuidv4(),isdone:false}])
    let [newtodo,setnewtodo]=useState("")
    let addnetodo=()=>{
        settodo([...todo,{task:newtodo,id:uuidv4(),isdone:false}])
        setnewtodo("")
    }
    let updatetodovalue=(event)=>{
        setnewtodo(event.target.value)
    }
    function deletetodo(id){
        let newt=todo.filter((odo)=>odo.id != id)
        console.log(newt)
        settodo(newt)
    }
    function uppercase(){
        let newarr=todo.map((todo)=>{
            return{...todo , task: todo.task.toUpperCase()}
        })
        settodo(newarr)
    }
    function uppercsae(id){
        let newarr=todo.map((todo)=>{
            if(todo.id==id){
                return{...todo , task: todo.task.toUpperCase()}
            }
            else{
                return {...todo}
            }
            
        })
        settodo(newarr)
    }
    function done(id){
        let newarr=todo.map((todo)=>{
            if(todo.id==id){
                return{...todo , isdone:true}
            }
            else{
                return {...todo}
            }
            
        })
        settodo(newarr)
    }
    return(
        <div>
            <input placeholder="add a task" value={newtodo} onChange={updatetodovalue}></input>
            <br></br>
            <br></br>
            <button onClick={addnetodo}>Add Task</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Todo List!</h4>
            <ul>
                {todo.map((todo)=>(
                 <li key={todo.id}><span style={todo.isdone ? {textDecorationLine:"line-through"} : {} }>{todo.task} &nbsp;&nbsp; 
                 <button onClick={()=>deletetodo(todo.id)}>Delete</button>
                 <button onClick={()=>uppercsae(todo.id)}>Uppercase</button>
                 <button onClick={()=>done(todo.id)}>Mark as Done</button></span></li>
                ))}
            </ul>
            <br></br>
            <button onClick={uppercase}>UpperCaseAll</button>
        </div>
    )
}