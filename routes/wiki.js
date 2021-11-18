const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const layout = require("../views/layout");

router.get("/", (req, res) => {
res.send(layout());
})

router.post("/", (req, res) => {
  res.json(req.body);
  // res.send("YEEEET POST");
})


router.get("/add", (req, res) => {
  res.send(addPage());
})

// router.post("/add", (req, res) => {
//   console.log(req)
// })



module.exports = router;
