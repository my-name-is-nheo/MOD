import React from "react";
import ReactDOM from "react-dom";
import RecipeList from "./RecipeList.jsx";
import $ from "jquery";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
    };
  }
  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "/getList",
      success: (data) => {
        console.log(data);
        this.setState({
          test: data,
        });
      },
    });
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>M.O.D</h1>
          <p>An amazing way to share simple recipes with friends and family</p>
          <button className="addButton">Add New Recipe</button>
        </div>

        <div className="recipeList">
          <h2>Recipes</h2>
          <RecipeList />
        </div>
      </div>
    );
  }
}

export default RecipePage;
