const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js");
var methodOverride = require("method-override");
const Expresserror = require("./Expresserror.js");

app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
main()
  .then(() => {
    console.log("Connection succesfull");
  })
  .catch((err) => console.log(err));

app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  res.render("index.ejs", { chats });
});
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/", (req, res) => {
  res.send("Working");
});
app.post("/chats", async(req, res, next) => {
  try {
    let { from, msg, to } = req.body;
    let newchat = new chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(),
    });
    console.log(newchat);
    await newchat.save()
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});
app.get("/chats/:id", async (req, res, next) => {
  let { id } = req.params;
  let chat = await chat.findById(id);
  if (!id) {
    next(new Expresserror(404, "Chat not found"));
  }
  res.render("edit.ejs", { chat });
});
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let Chat = await chat.findById(id);
  console.log(Chat);
  res.render("edit.ejs", { Chat });
});
app.patch("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newmsg } = req.body;
  let updatedchat = await chat.findByIdAndUpdate(
    id,
    { msg: newmsg },
    { runValidators: true, new: true }
  );
  console.log(updatedchat);
  res.redirect("/chats");
});
app.delete("/chats/:id", (req, res) => {
  let { id } = req.params;
  chat
    .findByIdAndDelete(id)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  res.redirect("/chats");
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error Occured" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Server is Connected");
});
