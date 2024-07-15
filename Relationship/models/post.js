const mongoose=require("mongoose")
main().then(()=>{
    console.log("Connection Success")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
const userSchema=new mongoose.Schema({
    username:String,
    email:String
})
const postSchema=new mongoose.Schema({
    content:String,
    likes:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
const User=mongoose.model("User",userSchema)
const Post=mongoose.model("Post",postSchema)

let addData=async()=>{
    // let user1=new User({
    //     username:"Rahul Kumar",
    //     email:"Rahul@gmail.com"
    // })

    let user1=await User.findOne({username:"Rahul Kumar"})
    let post2=new Post({
        content:"Good Night",
        likes:30
    })
    post2.user=user1
    // let res=await user1.save()
    let res1=await post2.save()

    console.log(res1)
}
addData()