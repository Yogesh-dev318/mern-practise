const express=require("express")
const app=express()
const path=require("path")

let port=3000
app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/hello",(req,res)=>{
    res.send("hello")
})
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json")
    console.log(instadata)
    const data=instadata[username]
    if(data){
        res.render("instagram.ejs",{data})
    }
    else{
        res.render("error.ejs")
    }
})
app.get("/rolldice",(req,res)=>{
    let rolldice=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{rolldice})
})
app.listen(port,()=>{
    console.log(`listining on port ${port}`)
})