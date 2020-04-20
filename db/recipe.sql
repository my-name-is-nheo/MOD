CREATE DATABASE recipe_mvp;

USE recipe_mvp;


CREATE TABLE recipeList (
  id INTEGER AUTO_INCREMENT,
  food_name VARCHAR(200) NOT NULL,
  food_description VARCHAR(300) NOT NULL,
  type VARCHAR(10) NOT NULL,
  price INTEGER,
  ingredients JSON ,
  PRIMARY KEY (id)
);
