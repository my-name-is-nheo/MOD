const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var cors = require("cors");
const path = require("path");
const FoodHandler = require("./controller/index.js");
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({ extended: true }));

app.get("/getList", FoodHandler.getFood);

app.listen(port, function (err) {
  if (err) {
    throw err;
    console.log("app.listen", err);
  }
  console.log(`listening on port ${port}!`);
});
