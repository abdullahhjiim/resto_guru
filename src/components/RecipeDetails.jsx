import React from "react";

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className="w-full p-4">Please select a recipe from the list.</div>
    );
  }

  return (
    <div className="w-[80%] bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-72 object-cover rounded"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
        <p className="text-gray-700 mb-4">{recipe.description}</p>
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700 text-xs capitalize">
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <div className="capitalize w-6 h-6 rounded-full bg-orange-500 text-center text-white font-semibold">
            {recipe.author[0]}
          </div>
          <p className="text-gray-700 font-semibold m-1">{recipe.author}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
