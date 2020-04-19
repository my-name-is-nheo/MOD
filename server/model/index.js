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
  },
};
