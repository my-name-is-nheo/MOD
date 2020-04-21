import React, { useState } from "react";
const moment = require("moment");
const RecipeList = (props) => {
  const [showRecipe, setShowRecipe] = React.useState(false);
  // const [selectRecipe, setSelectedRecipe] = React.useState("");

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
                    onClick={(id) => {
                      console.log(id);
                      setShowRecipe(food);
                      // setSelectedRecipe(id);
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
          <div>
            <h3>{showRecipe.food_name}</h3>
            <h4>Ingredients</h4>
            <ul>
              {JSON.parse(showRecipe.ingredients).map((ing, id) => {
                return <li key={id}>{ing}</li>;
              })}
            </ul>
            <h4>Description</h4>
            <ul>
              <li>{showRecipe.food_description}</li>
            </ul>
            <h4>Meal Type</h4>
            <ul>
              <p>{showRecipe.type}</p>
            </ul>
            <h4>Total Cost</h4>
            <ul>
              <p>${showRecipe.price}</p>
            </ul>
            <button>X</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RecipeList;
