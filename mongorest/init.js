const mongoose = require("mongoose");
const chat = require("./models/chat.js");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
main()
  .then(() => {
    console.log("Connection succesfull");
  })
  .catch((err) => console.log(err));

let allchats = [
  {
    from: "Yogesh",
    to: "Sanjay",
    msg: "Good Morning",
    created_at: new Date(),
  },
  {
    from: "Yash",
    to: "Rohan",
    msg: "Good Night",
    created_at: new Date(),
  },
  {
    from: "Vivek",
    to: "Aditya",
    msg: "How are you?",
    created_at: new Date(),
  },
  {
    from: "Aayush",
    to: "Arpan",
    msg: "teach me js callback",
    created_at: new Date(),
  },
  {
    from: "Sumit",
    to: "Amit",
    msg: "async and await",
    created_at: new Date(),
  },
];
chat.insertMany(allchats)
  .then((result, error) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });