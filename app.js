const express = require("express");
const app = express();
//protect the route
function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === "secretpassword") {
    next();
  } else {
    res.status(401);
    res.send("Not permitted");
  }
}
const port = 3000;

//code sets up a route to slash / with the syntax:
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", isAuthorized, (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    {
      id: 3,
      name: "wrench",
    },
  ];

  res.json(products);
});

//the code starts the web application by invoking the listen() method
app.listen(port, () =>
  console.log(`Example express app listening on ${port}!`)
);
