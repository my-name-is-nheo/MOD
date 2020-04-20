import React from "react";
import RecipeList from "./RecipeList.jsx";
import NewRecipe from "./NewRecipe.jsx";
import $ from "jquery";

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      toggleNew: false,
    };
  }
  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "/api/recipes",
      success: (data) => {
        console.log(data);
        this.setState({
          food: data,
        });
      },
    });
  }

  toggle() {
    this.setState({ toggleNew: !this.state.toggleNew });
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>M.O.D</h1>
          <p>An amazing way to share simple recipes with friends and family</p>
          <button onClick={this.toggle.bind(this)} className="addButton">
            Add New Recipe
          </button>
        </div>
        {this.state.toggleNew ? <NewRecipe /> : null}
        <div className="recipeList">
          <h2>Recipes</h2>
          <RecipeList list={this.state.food} />
        </div>
      </div>
    );
  }
}

export default RecipePage;
