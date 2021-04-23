const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qweqwe12345",
});

connection.query("CREATE DATABASE welbextestdb", function (err, results) {
  if (err) console.log(err);
  else console.log("База данных создана");
});

connection.end();
