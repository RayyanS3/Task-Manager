//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.get("/", function (req, res) {
  var today = new Date();
  const currentDay = today.getDay();
  var day = "";
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //   if (currentDay == 6 || currentDay == 0) {
  //     day = "Weekend";
  //   } else {
  //     day = "Weekday";
  //   }

  res.render("list", { kindOfDay: daysOfWeek[currentDay] });
});
