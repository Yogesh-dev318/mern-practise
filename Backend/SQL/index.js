const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
let port = 3000;
var methodOverride = require("method-override");
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "9813236240",
});
// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };
// let q="INSERT INTO user(id,username,email,password) VALUES ?"
// let data=[]
// for(let i=1;i<=20;i++){
//   data.push(getRandomUser());
// }
// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// }
// catch(error){
//     console.log(error)
// }
// connection.end();

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.send(`Some error in DB`);
  }
  // res.send("Working");
});
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // console.log(result)
      res.render("showuser.ejs", { users });
    });
  } catch (error) {
    console.log(error);
    res.send(`Some error in DB`);
  }
});
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]);
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.send(`Some error in DB`);
  }
});
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username: newUsername, password: formPass } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      if (formPass != result[0].password) {
        res.send("Wrong password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.send(`Some error in DB`);
  }
});
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  let q = `INSERT INTO user(id,username,email,password) VALUES ('${id}','${username}','${email}','${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("Added new row");
      res.redirect("/user");
    });
  } catch (error) {
    console.log(error);
    res.send("DB Error");
  }
});
app.delete("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `DELETE FROM user Where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("Deleted");
      res.redirect("/user");
    });
  } catch (error) {
    console.log(error);
    console.log("DB error");
  }
});
app.listen(port, () => {
  console.log(`Server Started ${port}`);
});