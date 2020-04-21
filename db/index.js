const mysql = require("mysql");

var dbConnection = mysql.createConnection({
  user: "root",
  database: "recipe_mvp",
});
// try {
//   var dbPool = mysql.createPool({
//     connectionLimit: 10,
//     host: "us-cdbr-iron-east-01.cleardb.net",
//     user: "b888a0a1cb3005",
//     password: "7fe08e8c",
//     database: "heroku_e073a55eda31fd0",
//   });
// } catch (e) {
//   console.log("create connection error ", e);
// }

dbConnection.connect();
// module.exports = dbPool;
module.exports = dbConnection;
