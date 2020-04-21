import React, { useState } from "react";
const moment = require("moment");
const RecipeList = (props) => {
  const [showRecipe, setShowRecipe] = React.useState(false);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name of Dish</th>
          </tr>
          {props.list.map((food, id) => {
            console.log("this is props: ", props);
            console.log(
              JSON.parse(food.ingredients),
              typeof JSON.parse(food.ingredients)
            ); //parse it when you
            return (
              <tr key={id}>
                <td>
                  <button
                    className="foodButtonList"
                    onClick={() => {
                      setShowRecipe(!showRecipe);
                    }}
                  >
                    {food.food_name}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showRecipe ? (
        <div className="foodList">
          {props.list.map((food, id) => {
            return (
              <div key={id}>
                <h3>{food.food_name}</h3>
                <h4>Ingredients</h4>
                <ul>
                  {JSON.parse(food.ingredients).map((ing, id) => {
                    return <li key={id}>{ing}</li>;
                  })}
                </ul>
                <h4>Description</h4>
                <p>{food.food_description}</p>
                <h4>Meal Type</h4>
                <p>{food.type}</p>
                <h4>Total Cost</h4>
                <p>${food.price}</p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RecipeList;
/*var array = food.ingredients
.substring(1, food.ingredients.length - 1)
.split(",");*/
