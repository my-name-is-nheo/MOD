import React from "react";
import $ from "jquery";
class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
      name: "",
      description: "",
      type: "",
      ingredients: [],
      ingredientCount: 0,
      price: "",
      index: 0,
    };
  }
  addClick() {
    this.setState((prevState) => ({
      ingredientCount: this.state.ingredientCount + 1,
    }));
  }

  createUI() {
    return new Array(this.state.ingredientCount).fill(0).map((vowl, i) => (
      <div key={i} className="newIngredient">
        <input
          type="text"
          placeholder="Ingredient"
          onChange={(e) => {
            this.addIngredient.bind(this, e, i)();
          }}
        ></input>
        <input
          type="button"
          value="remove"
          onClick={this.removeClick.bind(this)}
        ></input>
      </div>
    ));
  }
  removeClick(i) {
    let old = [...this.state.ingredients];
    old.splice(this.state.ingredientCount - 1, 1);
    this.setState({
      ingredients: old,
      ingredientCount: this.state.ingredientCount - 1,
    });
  }
  handleOnChange(e, key) {
    console.log(e.target.id, e.target.value);
    var oldState = {};
    oldState[key] = e.target.value;
    this.setState(oldState);
  }
  addIngredient(e, index) {
    console.log(index);
    console.log(e.target.value);
    var old = this.state.ingredients;
    old[index] = e.target.value;
    this.setState({ ingredients: old });
  }

  saveToRecipe() {
    var newArray = [
      this.state.name,
      this.state.description,
      this.state.type,
      this.state.ingredients,
      this.state.price,
    ];

    $.ajax({
      type: "POST",
      url: "/api/recipes",
      data: { newRecipe: newArray },
      success: (data) => {
        console.log("successfully sent post method: ", data);
        // res.send(data);
        window.location.reload();
      },
    });
  }

  render() {
    return (
      <div>
        <div className="newRecipeDiv">
          <p>Add a New Recipe</p>
        </div>
        <div className="nameInput">
          <input
            type="text"
            placeholder="Name of Food"
            id="name"
            onChange={(e) => {
              this.handleOnChange(e, "name");
            }}
          ></input>
        </div>
        <div className="descriptionInput">
          <input
            type="text"
            placeholder="Description"
            id="description"
            onChange={(e) => {
              this.handleOnChange(e, "description");
            }}
          ></input>
        </div>
        <div className="typeInput">
          <input
            type="text"
            placeholder="Type"
            id="type"
            onChange={(e) => {
              this.handleOnChange(e, "type");
            }}
          ></input>
        </div>

        {this.createUI()}
        <div className="priceInput">
          <input
            type="number"
            placeholder="$"
            id="money"
            onChange={(e) => {
              this.handleOnChange(e, "price");
            }}
          ></input>
        </div>

        <div className="addIngredientButton">
          <button onClick={this.addClick.bind(this)}>Add Ingredient</button>
          <button className="saveButton" onClick={this.saveToRecipe.bind(this)}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default NewRecipe;
