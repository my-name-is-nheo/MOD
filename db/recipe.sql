CREATE DATABASE recipe_mvp;

USE recipe_mvp;


CREATE TABLE recipeList (
  id INTEGER AUTO_INCREMENT,
  food_name VARCHAR(200) NOT NULL,
  food_description VARCHAR(300) NOT NULL,
  ingredient_one VARCHAR(300) NOT NULL,
  ingredient_two VARCHAR(300) NOT NULL,
  ingredient_three VARCHAR(300),
  ingredient_four VARCHAR(300),
  ingredient_five VARCHAR(300),
  PRIMARY KEY (id)
);
