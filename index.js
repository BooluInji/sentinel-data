// Express Server

const express = require("express");
const app = express();
const port = 9090;
const console = require("console");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
