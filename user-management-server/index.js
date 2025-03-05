const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
app.use(cors());

const users = [
  {
    id: 1,
    name: "Shabana",
    email: "shabana@gmail.com",
  },
  {
    id: 2,
    name: "Rubana",
    email: "rubana@gmail.com",
  },
  {
    id: 3,
    name: "Dilruba",
    email: "dilruba@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post api hitting");
  console.log(req.body);
});

app.listen(port);
