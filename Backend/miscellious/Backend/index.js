const express=require("express")
const app=express()
let port=3000
app.use(express.urlencoded({extended: true}));
app.get("/regester",(req,res)=>{
    let {user,password}=req.query;
    res.send(`Standard get accepted user=${user} andpassword=${password}`)
})

app.post("/regester",(req,res)=>{
    let {user,password}=req.body;
    res.send(`Standard Post accepted user=${user} andpassword=${password}`)
})

app.listen(port,()=>{
    console.log(`Server Started ${port}`)
})