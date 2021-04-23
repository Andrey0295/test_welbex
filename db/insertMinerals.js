const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    database: "welbextestdb",
    password: "qweqwe12345",
  })
  .promise();

const minerals = [
  ["25.03.2021", "aluminum", 20, 100],
  ["25.03.2021", "basalt", 15, 300],
  ["19.07.2021", "calcite", 30, 75],
  ["19.07.2021", "chalk", 45, 150],
  ["10.05.2021", "clay", 25, 100],
  ["18.10.2021", "diamond", 15, 200],
  ["18.10.2021", "flint", 25, 300],
  ["08.06.2021", "granit", 30, 150],
  ["08.06.2021", "halite", 45, 200],
  ["10.05.2021", "lead", 30, 150],
  ["10.05.2021", "marble", 20, 400],
  ["19.07.2021", "sulfur", 50, 300],
  ["25.03.2021", "tin", 15, 170],
];

const sql = `INSERT INTO minerals(date, name, quantity,distance) VALUES ?`;

connection
  .query(sql, [minerals])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));
