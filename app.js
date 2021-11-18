const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const layout = require("./views/layout.js");
const { db, Page, User} = require('./models');
const wiki = require("./routes/wiki");
const users = require("./routes/users");




db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan("dev"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});


app.use("/wiki", wiki);
app.use("/users", users);



async function tables() {
  await db.sync({ force: true });
}
tables();

const port = 3000;

app.listen(port, () => {
  console.log("Listening at port 3000");
});


