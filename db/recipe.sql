CREATE DATABASE recipe_mvp;

USE recipe_mvp;


CREATE TABLE recipeList (
  id INTEGER AUTO_INCREMENT,
  food_name VARCHAR(200) NOT NULL,
  food_description VARCHAR(300) NOT NULL,
  ingredients VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);
