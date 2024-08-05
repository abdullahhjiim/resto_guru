import React from "react";

export default function RecipeList({ recipes, selectedRecipe, onRecipeClick }) {
  return (
    <div className="w-[20%] max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="py-4 px-6 bg-gray-800 text-white font-bold">
        Recipe List
      </div>
      <div className="h-[750px] overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {recipes.map((item) => (
            <li
              key={item.id}
              className={`flex items-center p-4 cursor-pointer ${
                selectedRecipe.id === item.id ? "bg-gray-300" : ""
              }`}
              onClick={() => onRecipeClick(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full mr-4 ring-2 ring-red-300 border-2 border-white"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-sm">{item.name}</h2>
                <div className="flex gap-2">
                  <p className="text-gray-500 text-xs">{item.time} ago,</p>
                  <p className="text-gray-500 text-xs">{item.author}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
