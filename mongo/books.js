const mongoose=require("mongoose")
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
main().then(()=>{
  console.log("Connection succesfull")
})
.catch(err => console.log(err));
const bookschema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
        default:0
    },
    catagory:{
        type:String,
        enum:["Fiction","non-Fiction"]
    },
    genre:[String]
})
const Book=mongoose.model("Book",bookschema)
let book1=new Book({
    title:"hindi",
    author:"Yaspal",
    price:3999,
    catagory:"Fiction",
    genre:["Space","Galaxy"]
})
book1.save().then((result,error)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
// Book.insertMany({
//     title:"Mathamatics XII",
//     author:"RD Sharma",
//     price:1200
// }).then((result,error)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })