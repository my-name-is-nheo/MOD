import React from "react";
class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
  }
  addClick() {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, ""],
    }));
  }

  createUI() {
    return this.state.ingredients.map((i) => (
      <div key={i}>
        <input type="text" placeholder="Ingredient"></input>
        <input
          type="button"
          value="remove"
          onClick={this.removeClick.bind(this)}
        ></input>
      </div>
    ));
  }
  removeClick(i) {
    let ingredients = [...this.state.ingredients];
    ingredients.splice(i, 1);
    this.setState({ ingredients });
  }
  render() {
    return (
      <div>
        <h3>Add a New Recipe</h3>

        <div className="nameInput">
          <input type="text" placeholder="Name of Food"></input>
        </div>
        <div className="descriptionInput">
          <input type="text" placeholder="Description"></input>
        </div>
        <div className="ingredientInput">
          <input type="text" placeholder="Ingredient"></input>
        </div>
        {this.createUI()}
        <div className="priceInput">
          <input type="number"></input>
        </div>
        <div className="addIngredientButton">
          <button onClick={this.addClick.bind(this)}>Add Ingredient</button>
          <button className="saveButton"> Save</button>
        </div>
      </div>
    );
  }
}

export default NewRecipe;
