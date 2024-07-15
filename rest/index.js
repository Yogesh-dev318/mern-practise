let express=require("express")
let app=express()
let port=3000;
const { v4: uuidv4 } = require('uuid');
let path=require("path")
var methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
let posts=[
    {
        id:uuidv4(),
        username:"Yogesh",
        content:"Good Morning"
    },
    {
        id:uuidv4(),
        username:"Yasah",
        content:"Good Night"
    },
    {
        id:uuidv4(),
        username:"Yash",
        content:"Good afternoon"
    }
]
app.get("/posts",(req,res)=>{
    console.log("connected")
    res.render("index.ejs",{posts})
    
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts",(req,res)=>{
    let id=uuidv4();
    let {username,content}=req.body;
    posts.push({id,username,content})
    res.redirect("http://localhost:3000/posts")
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    console.log(post)
    res.render("details.ejs",{post})
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    console.log(post)
    res.render("edit.ejs",{post})
})
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let areacontent=req.body.content
    let post=posts.find((p)=>id===p.id);
    post.content=areacontent;
    res.redirect("http://localhost:3000/posts")
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((q)=>id!=q.id)
    res.redirect("http://localhost:3000/posts")
})

app.listen(port,()=>{
    console.log("Server Connected",port)
})