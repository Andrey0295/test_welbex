const express = require("express");
const app = express();

app.get("/minerals", (req, res, next) => {
  res.send("minerals");
});

app.listen(3001, () => {
  console.log("server started on 3001 port");
});
