var db = require("../../db/index.js");
module.exports = {
  foods: {
    getRecipe: (callback) => {
      var queryString = "select * from recipeList";
      return db.query(queryString, (err, results) => {
        if (err) {
          console.log(err, " in line 8 of model ");
        }
        callback(results);
      });
    },
    addRecipe: function (params, callback) {
      console.log("new recipe has been added to the db");
      var queryString =
        "insert into recipeList(food_name, food_description, type, price, ingredients) values (?,?,?,?,?)";
      return db.query(queryString, params, function (err, results) {
        if (err) {
          console.log(err, "querying post");
        }
        callback(results);
      });
    },
  },
};
