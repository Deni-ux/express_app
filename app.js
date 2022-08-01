const express = require("express");
const app = express();
const port = 3000;

//code sets up a route to slash / with the syntax:
app.get("/", (req, res) => res.send("hello world 🔥 ffddg!"));



//the code starts the web application by invoking the listen() method
app.listen(port, () =>
  console.log(`Example express app listening on ${port}!`)
);
