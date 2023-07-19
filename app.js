//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

let universityTasks = [];
let personalTasks = [];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(3000, function () {
  console.log("Server started on port 3000 ");
});

app.get("/", function (req, res) {
  res.render("list", {
    kindOfDay: "University - " + date(),
    itemList: universityTasks,
  });
});

app.post("/", function (req, res) {
  const task = req.body.newTask;
  const listType = req.body.button;

  //   if (req.body.reset == "University") {
  //     universityTasks = [];
  //     res.redirect("/");
  //   }else{
  //     personalTasks = [];
  //     res.redirect("/personal")
  //   }

  if (task != "") {
    if (listType == "University") {
      universityTasks.push(task);
      res.redirect("/");
    } else {
      personalTasks.push(task);
      res.redirect("/personal");
    }
  }
});

app.get("/personal", function (req, res) {
  res.render("list", {
    kindOfDay: "Personal - " + date(),
    itemList: personalTasks,
  });
});
