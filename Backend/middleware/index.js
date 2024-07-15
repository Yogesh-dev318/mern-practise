const express=require("express")
const app=express()
const expresserror=require("./Expresserror")
let port=3000

// app.use("/",(req,res,next)=>{
//     console.log("helo")
//     next()
// })

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now());
//     console.log(req.method,req.hostname,req.path,req.time)
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("hi i am 1st middelware")
//     // res.send("1st middleware finished")
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("hi i am 2nd middelware")
//     // res.send("2nd middleware finished")
//     next()
// })
let checktoken=(req,res,next)=>{
    let {token}=req.query
    if(token==="giveaccess"){
        res.send("Woking")
        next();
    }
    throw new expresserror(401,"Access Denied")
}

app.get("/api",checktoken,(req,res)=>{
    res.send("Data")
})

app.get("/random",(req,res)=>{
    console.log("this is random page")
})
app.get("/",(req,res)=>{
    console.log("ok")
    res.send("I am root")
})

app.get("/err",(req,res)=>{
    abcd=accd
})

app.use((err,req,res,next)=>{
    let {status=500,message="Some error occured"}=err
    res.status(status).send(message)
    // res.send(err)
})

app.listen(port,()=>{
    console.log(`Server Connected ${port}`)
})