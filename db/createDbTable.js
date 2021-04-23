const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    database: "welbextestdb",
    password: "qweqwe12345",
  })
  .promise();

const sql = `create table if not exists minerals(
    id int primary key auto_increment,
    date varchar(255) not null,
    name varchar(255) not null,
    quantity int not null,
    distance int not null   
)`;

connection
  .query(sql)
  .then((result) => {
    console.log("таблица созданна" + result);
  })
  .catch((error) => {
    console.log(error.message);
  });

connection.end();
