import React from 'react';

const Recipes = (props) => {
  const createElements = () => {
    return props.data.map(recipe => {
      return (
        <div>
          <h2>{recipe.title}</h2>
          <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt="picture of..."/>
        </div>
      );
    });
  }

  return (
    <>
    {createElements()}
    </>
  );
};

export default Recipes;