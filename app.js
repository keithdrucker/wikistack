const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.use(morgan("dev"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = 3000;

app.listen(port, () => {
  console.log("Listening at port 3000");
});
