var model = require("../model/index.js");

const FoodHandler = {
  getFood: (req, res, next) => {
    console.log("heres food!");
    model.foods.getRecipe((data) => {
      res.send(data);
    });
  },
};

module.exports = FoodHandler;
