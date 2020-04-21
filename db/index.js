const mysql = require("mysql");

// var dbConnection = mysql.createConnection({
//   user: "root",
//   database: "recipe_mvp",
// });
var dbConnection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b888a0a1cb3005",
  password: "7fe08e8c",
  database: "heroku_e073a55eda31fd0",
});

dbConnection.connect();
module.exports = dbConnection;
