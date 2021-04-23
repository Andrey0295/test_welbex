const express = require("express");

const server = express();

const listener = server.listen(4444, () => {
  console.log(`Сервер запущен на порте ${listener.address().port}`);
});
