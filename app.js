//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
var items = [];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, itemList: items });
});

app.post("/", function (req, res) {
  const item = req.body.newTask;
  items.push(item);
  res.redirect("/");
});
