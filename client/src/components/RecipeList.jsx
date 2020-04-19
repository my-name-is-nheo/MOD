import React from "react";
const RecipeList = (props) => (
  <table>
    <tbody>
      <tr>
        <th>Name of Dish</th>
        <th>Date</th>
        <th>Meal Type</th>
      </tr>
      {props.list.map((food, id) => {
        console.log(props);
        console.log(food.food_name);
        return (
          <tr key={id}>
            <th>{food.food_name}</th>
            <th>{food.food_description}</th>
            <th>{food.ingredients}</th>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default RecipeList;
