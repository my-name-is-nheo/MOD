import React from "react";
const moment = require("moment");
const RecipeList = (props) => (
  <table>
    <tbody>
      <tr>
        <th>Name of Dish</th>
        <th>Description</th>
        <th>Date</th>
        <th>Meal Type</th>
      </tr>
      {props.list.map((food, id) => {
        console.log(props);
        console.log(JSON.parse(food.ingredients));
        return (
          <tr key={id}>
            <td>{food.food_name}</td>
            <td>{food.food_description}</td>
            <td>{moment().format("MMM Do YY")}</td>
            <td>{food.type}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default RecipeList;
