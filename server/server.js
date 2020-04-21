const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var cors = require("cors");
const path = require("path");
const FoodHandler = require("./controller/index.js");
const db = require("../db/index.js");
app.use(cors());
//for local
app.use(express.static(path.join(__dirname, "../client/dist/")));
//for heroku
// app.use(express.static(path.join(__dirname, "../client/dist/index.html")));
app.use(express.urlencoded({ extended: true }));

app.get("/api/recipes", FoodHandler.getFood);

app.post("/api/recipes", FoodHandler.addFood);

app.delete("/api/recipes/:id", function (req, res) {
  console.log("delete request received from cilent");
  console.log(req.params.id);
  db.query("delete from recipeList where id = ?", req.params.id, (err) => {
    if (err) {
      console.log(err, " deleting from database");
    }
    res.send("recipe has been deleted!");
  });
});

app.listen(port, function (err) {
  if (err) {
    throw err;
    console.log("app.listen is throwing", err);
  }
  console.log(`listening on port ${port}!`);
});
