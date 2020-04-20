var model = require("../model/index.js");

const FoodHandler = {
  getFood: (req, res, next) => {
    console.log("heres food!");
    model.foods.getRecipe((data) => {
      res.send(data);
    });
  },
  addFood: (req, res, next) => {
    console.log(req.body);

    var payload = req.body.newRecipe;
    payload[payload.length - 1] = JSON.stringify(payload[payload.length - 1]);
    console.log("this is payload", payload);
    model.foods.addRecipe(payload, (data) => {
      console.log(data);
      res.send(data);
    });
  },
};

module.exports = FoodHandler;
