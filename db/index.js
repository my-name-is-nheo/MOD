const mysql = require("mysql");

// var dbConnection = mysql.createConnection({
//   user: "root",
//   database: "recipe_mvp",
// });
try {
  var dbPool = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b039ba6d119e9c",
    password: "4177f229",
    database: "heroku_2341fb153f62c79",
  });
} catch (e) {
  console.log("create connection error ", e);
}

// dbConnection.connect();
module.exports = dbPool;
// module.exports = dbConnection;
