const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const layout = require("./views/layout.js");
const { db } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan("dev"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.get("", (req, res) => {
  res.send(layout(""));
});





const port = 3000;

app.listen(port, () => {
  console.log("Listening at port 3000");
});


