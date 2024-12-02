const express = require("express");

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/home', (req, res) => {
    res.send({name: "Abdullah Al Abbas",
        age: "36",
        Job: "KOC"
    })
  })

  // to use jason 

  app.get('/me', (req, res) => {
    res.json({name: "Salah Al Abbas",
        age: "55",
        Job: "Teacher"
    })
  })

app.listen(port, () => {
    console.log("this is my first BackEnd Server and it is online");
  });