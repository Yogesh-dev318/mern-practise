const express = require("express")
const app = express()

let port=3000
app.listen(port,()=>{
    console.log(`app is runing ${port}`)
})
app.get("/",(req,res)=>{
    res.send("root path")
})
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params
    console.log(req.params)
    let html=`<h1>hello i am root ${username} </h1>`
    res.send(html)
})
app.get("/search",(req,res)=>{
    let {q}=req.query
    if(!q){
        res.send("Nothing is searched")
    }
    // console.log(req.query)
    res.send(`These are the search query: ${q}`)
})
// app.get("/apple",(req,res)=>{
//     res.send("apple path")
// })
// app.get("/orange",(req,res)=>{
//     res.send("orange path")
// })
// app.get("*",(req,res)=>{
//     res.send("no path")
// })
// app.use((req,res)=>{
//     console.log("request recieved")
//     let code="<h1>Yogesh</h1>"
//     // res.send("this is a response")
//     res.send(code)
// })