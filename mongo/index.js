const mongoose=require("mongoose")
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main().then(()=>{
  console.log("Connection succesfull")
})
.catch(err => console.log(err));

const userschema=new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})
const user=mongoose.model("user",userschema)

// user.insertMany([
//   {name:"Rohan",email:"efr@gmail.com",age:21},
//   {name:"rahul",email:"efsfvr@gmail.com",age:24 }
// ]).then((result,error)=>{
//   console.log(result)
// })
// .catch((error)=>{
//   console.log(error)
// })

// const employee=mongoose.model("employee",userschema)
// let user1=new user({
//   name:"Yogesh",
//   email:"abc@gmail.com",
//   age:20
// })
// let user2=new user({
//   name:"Yash",
//   email:"abcsd@gmail.com",
//   age:19
// })
// // user1.save()
// user2.save()
// .then((result,error)=>{
//   console.log(result);
// })
// .catch((error)=>{
//   console.log(error)
// })


// user.find({age:{$gt:20}}).then((result,error)=>{
//   console.log(result[1])
// })
// .catch((error)=>{
//   console.log(error)
// })
// user.findById("65eda203b025a7641f6b90c6").then((result,error)=>{
//   console.log(result[1])
// })
// .catch((error)=>{
//   console.log(error)
// })

// user.updateOne({name:"Yash"},{age:45}).then((result,error)=>{
//   console.log(result)
// })
// .catch((error)=>{
//   console.log(error)
// })
// user.updateMany({age:21},{age:40}).then((result,error)=>{
//   console.log(result)
// })
// .catch((error)=>{
//   console.log(error)
// })
// user.findOneAndUpdate({name:"rahul"},{age:57},{new:true}).then((result,error)=>{
//   console.log(result)
// })
// .catch((error)=>{
//   console.log(error)
// })


// user.deleteOne({name:"Yash"}).then((result,error)=>{
//   console.log(result)
// })
// .catch((error)=>{
//   console.log(error)
// })
// user.deleteMany({age:40}).then((result,error)=>{
//   console.log(result)
// })
// .catch((error)=>{
//   console.log(error)
// })
user.findByIdAndDelete("65eda23e47764abfda463439").then((result,error)=>{
  console.log(result)
})
.catch((error)=>{
  console.log(error)
})