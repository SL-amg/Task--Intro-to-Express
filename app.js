const express = require("express");

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log("this is my first BackEnd Server and it is online");
  });