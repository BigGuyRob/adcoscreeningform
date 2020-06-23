const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.post("/", (req, res) => {
  // perform operation and return response.
  res.status(200).json({ message: "It worked!" });
});

app.listen(3000, function() {
    console.log("server is running");
  });