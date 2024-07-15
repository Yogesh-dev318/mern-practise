const mongoose=require("mongoose")
main().then(()=>{
    console.log("Connection Success")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
const orderSchema=new mongoose.Schema({
    iteam:String,
    price:Number
})
const customerSchema=new mongoose.Schema({
    name:String,
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})
customerSchema.pre("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        let res=await order.deleteMany({_id:{$in: customer.orders}})
        console.log(res)
    }
})
customerSchema.post("findOneAndDelete",async()=>{
    console.log("Post middleware")
})
const order=mongoose.model("Order",orderSchema)
const customer=mongoose.model("Customer",customerSchema)

// let addOrder=async()=>{
//     let res=await order.insertMany([{
//         iteam:"Samosa",
//         price:10
//     },
//     {
//         iteam:"Chips",
//         price:10
//     },{
//         iteam:"Chocloate",
//         price:40
//     }])
//     console.log(res)
// }
// addOrder()

// let addCustomer=async()=>{
//     let cust1=new customer({
//         name:"Rahil Kumar",
//     })
//     let order1=await order.findOne({iteam:"Chips"})
//     let order2=await order.findOne({iteam:"Samosa"})

//     cust1.orders.push(order1)
//     cust1.orders.push(order2)

//     let res=await cust1.save()
//     console.log(res)
// }
// addCustomer()

let findCustomer=async()=>{
    let res=await customer.find().populate("orders")
    console.log(res[1])
}
// findCustomer()

let addCust=async()=>{
    let newCust=new customer({
        name:"Yogesh"
    })
    let newOrder=new order({
        iteam:"Burger",
        price:"50",
    })
    newCust.orders.push(newOrder);
    await newOrder.save()
    await newCust.save()
    console.log("Added new customer")
}
let delCust=async()=>{
    let data=await customer.findByIdAndDelete("6607282ecb38077437231029");
    console.log(data)
}
delCust();
// addCust();