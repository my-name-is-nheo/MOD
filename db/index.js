const mysql = require("mysql");

var dbConnection = mysql.createConnection({
  user: "root",
  database: "recipe_mvp",
});

dbConnection.connect();
module.exports = dbConnection;
