import React, { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

// Recipes Json List Data
const recipes = [
  {
    "id": 1,
    "author": "John Doe",
    "name": "Spaghetti Bolognese",
    "image": "https://www.inspiredtaste.net/wp-content/uploads/2023/04/Easy-Orzo-Pasta-Recipe-Video.jpg",
    "description": "Spaghetti Bolognese is a classic Italian dish that has become a staple in many households around the world. This delicious meal features al dente spaghetti pasta topped with a rich and hearty Bolognese sauce. The sauce is made with ground beef, tomatoes, and a mix of aromatic vegetables like onions, garlic, carrots, and celery. To enhance the flavors, the sauce is slowly simmered with red wine and a blend of Italian herbs such as oregano, basil, and thyme. The result is a savory, meaty sauce that pairs perfectly with the spaghetti. This dish is often garnished with freshly grated Parmesan cheese and a sprinkle of chopped parsley. Spaghetti Bolognese is not only satisfying and comforting, but it also provides a well-rounded meal with proteins, carbohydrates, and essential nutrients. Whether you're cooking for a family dinner or hosting a gathering with friends, Spaghetti Bolognese is sure to be a hit. The key to a perfect Bolognese sauce is patience; allowing the sauce to simmer for an extended period ensures that all the flavors meld together beautifully. Serve this dish with a side of garlic bread and a fresh green salad for a complete meal. Enjoy the heartwarming flavors of Italy right at your dining table.",
    "ingredients": ["spaghetti", "minced beef", "tomato sauce", "onion", "garlic", "olive oil"],
    "time": "30 mins"
  },
  {
    "id": 2,
    "author": "Jane Smith",
    "name": "Chicken Curry",
    "image": "https://www.ambitiouskitchen.com/wp-content/uploads/2019/03/Spinach-Garlic-Parmesan-Orzo-Crispy-Bacon-2.jpg",
    "description": "Chicken Curry is a delightful and flavorful dish that originates from the Indian subcontinent but has gained popularity worldwide. This aromatic dish features tender chicken pieces cooked in a thick, spicy, and savory curry sauce. The base of the curry is made with onions, garlic, and ginger, which are sautéed until golden brown. Spices such as turmeric, cumin, coriander, and garam masala are then added to infuse the dish with a rich and complex flavor profile. Coconut milk is often included to add a creamy texture and a hint of sweetness that balances the heat from the spices. Chicken Curry is typically served with steamed rice or naan bread, making it a hearty and satisfying meal. The dish is not only delicious but also packed with nutrients from the spices and ingredients used. It's a versatile recipe that can be adjusted to suit various taste preferences, whether you prefer it mild or extra spicy. Preparing Chicken Curry can be a fun and rewarding experience, as the aromas fill your kitchen and create an inviting atmosphere. Whether you're making it for a weeknight dinner or a special occasion, this dish is sure to impress. Garnish with fresh cilantro and a squeeze of lime juice to elevate the flavors even further. Chicken Curry is a testament to the diverse and vibrant culinary traditions of India, and it's a dish that brings warmth and comfort to any dining table.",
    "ingredients": ["chicken", "curry powder", "coconut milk", "onion", "garlic", "ginger"],
    "time": "45 mins"
  },
  {
    "id": 3,
    "author": "Emily Johnson",
    "name": "Caesar Salad",
    "image": "https://www.skinnytaste.com/wp-content/uploads/2021/05/Farmer_s-Market-Orzo-Salad-8.jpg",
    "description": "Caesar Salad is a classic and beloved dish that offers a perfect blend of crispness, creaminess, and savory flavors. The salad is named after its creator, Caesar Cardini, an Italian-American restaurateur who invented it in the 1920s. This iconic salad features fresh romaine lettuce leaves, which provide a crunchy base for the other ingredients. The lettuce is generously tossed with Caesar dressing, a rich and tangy sauce made from egg yolk, lemon juice, Dijon mustard, Worcestershire sauce, garlic, anchovies, and olive oil. The dressing's creamy texture and bold flavor make it the heart of the salad. To add more texture and taste, the salad is topped with crunchy croutons and freshly grated Parmesan cheese. Some variations of Caesar Salad also include grilled chicken, shrimp, or bacon, making it a more substantial meal. The beauty of this salad lies in its simplicity and the quality of its ingredients. The key to a perfect Caesar Salad is using fresh, crisp lettuce and a homemade dressing that strikes the right balance between tanginess and creaminess. Whether served as a starter or a main course, Caesar Salad is a versatile dish that can be enjoyed on any occasion. It's a great way to add some greens to your diet while indulging in rich and satisfying flavors. Enjoy this timeless salad as a refreshing and nutritious addition to your meal repertoire.",
    "ingredients": ["romaine lettuce", "croutons", "Caesar dressing", "parmesan cheese", "chicken breast"],
    "time": "15 mins"
  },
  {
    "id": 4,
    "author": "Michael Brown",
    "name": "Beef Tacos",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHaiau6Xhq2Xgrdgw5CQkdkrjXf3AvzYBZYuUKKb7wuKtprfDLmF-WOhuTpV1TH4G6XY&usqp=CAU",
    "description": "Beef Tacos are a delicious and popular dish that hails from Mexican cuisine but has been embraced by food lovers all over the world. These tasty tacos feature seasoned ground beef that is cooked to perfection and placed inside soft or crispy taco shells. The ground beef is typically seasoned with a mix of spices such as cumin, chili powder, paprika, garlic powder, and oregano, giving it a bold and savory flavor. To complement the beef, the tacos are topped with a variety of fresh and vibrant ingredients like shredded lettuce, diced tomatoes, grated cheese, and chopped onions. Additional toppings such as sour cream, guacamole, and salsa can also be added to enhance the flavor and texture. Beef Tacos are not only delicious but also incredibly versatile, allowing you to customize them to your taste preferences. They can be served as a quick and easy weeknight dinner or as part of a festive spread for a gathering with friends and family. The key to great Beef Tacos is using fresh ingredients and perfectly seasoned beef. Whether you prefer soft tortillas or crispy shells, Beef Tacos are a crowd-pleaser that never disappoints. Enjoy the delightful combination of flavors and textures with every bite.",
    "ingredients": ["ground beef", "taco shells", "lettuce", "tomato", "cheese", "sour cream"],
    "time": "25 mins"
  },
  {
    "id": 5,
    "author": "Sarah Davis",
    "name": "Pancakes",
    "image": "https://www.joyousapron.com/wp-content/uploads/2021/03/Lemon-Orzo-Salad-Sq.jpg",
    "description": "Pancakes are a beloved breakfast staple that can be enjoyed in countless variations. These fluffy and golden delights are made from a simple batter consisting of flour, milk, eggs, baking powder, sugar, and butter. The batter is poured onto a hot griddle or frying pan and cooked until bubbles form on the surface, then flipped to cook the other side to a perfect golden brown. Pancakes can be served with a variety of toppings, making them a versatile and customizable dish. Classic toppings include maple syrup, fresh berries, and a dollop of whipped cream. For a more indulgent treat, you can add chocolate chips, banana slices, or a drizzle of honey. Pancakes are not only delicious but also easy to make, making them a popular choice for breakfast, brunch, or even dessert. The key to perfect pancakes is achieving the right consistency in the batter and cooking them at the right temperature to ensure they are fluffy on the inside and slightly crispy on the outside. Whether you're cooking for a special occasion or just a regular morning, pancakes are sure to bring smiles to the table. Enjoy them with your favorite toppings and savor the comforting flavors of this timeless dish.",
    "ingredients": ["flour", "milk", "egg", "baking powder", "sugar", "butter"],
    "time": "20 mins"
  },
  {
    "id": 6,
    "author": "David Wilson",
    "name": "Grilled Cheese Sandwich",
    "image": "https://images.themodernproper.com/billowy-turkey/production/posts/SpinachOrzoSaladWithFetaTomatoesandaBasilDressing_7.jpg?w=1200&q=82&auto=format&fit=crop&dm=1716056301&s=15b2bafde5b8d81ac5ddfd23c3724a29",
    "description": "A Grilled Cheese Sandwich is a simple yet utterly satisfying comfort food that has been enjoyed by people of all ages for generations. This classic sandwich is made by placing slices of cheese between two pieces of bread, which are then buttered and grilled until the bread is golden brown and the cheese is melted and gooey. The most popular cheese used for grilled cheese sandwiches is cheddar, but you can also use American, Swiss, mozzarella, or a combination of cheeses to suit your taste. The key to a perfect Grilled Cheese Sandwich is achieving the right balance between crispy, buttery bread and melty, flavorful cheese. You can also enhance your sandwich by adding additional ingredients such as tomato slices, bacon, or avocado. Grilled Cheese Sandwiches are incredibly versatile and can be served as a quick lunch, a hearty snack, or even a comforting dinner. They are often paired with a bowl of tomato soup for a classic and satisfying meal. Whether you're making it for yourself or for a loved one, a Grilled Cheese Sandwich is a timeless dish that always hits the spot. Enjoy the simple pleasures of this beloved sandwich and savor every cheesy bite.",
    "ingredients": ["bread", "cheese", "butter"],
    "time": "10 mins"
  },
  {
    "id": 7,
    "author": "Laura Martinez",
    "name": "Tomato Soup",
    "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/1/1/TM1920_Orzo-with-feta-and-tomatoes.jpg.rend.hgtvcom.616.462.suffix/1432468277448.webp",
    "description": "Tomato Soup is a warm and comforting dish that is perfect for chilly days or when you're in need of some comfort food. This classic soup is made from ripe tomatoes that are simmered with onions, garlic, and vegetable broth until they are soft and flavorful. The soup is then blended until smooth and creamy, and a splash of cream is added to give it a rich and velvety texture. Tomato Soup is often seasoned with herbs like basil, thyme, and oregano to enhance its natural flavors. It can be served with a variety of accompaniments, but the most popular pairing is a Grilled Cheese Sandwich, creating a classic and comforting meal that is loved by many. The key to a perfect Tomato Soup is using fresh, ripe tomatoes and allowing the flavors to develop through slow simmering. This soup is not only delicious but also packed with nutrients, making it a healthy and satisfying choice. Whether you're enjoying it as a light lunch, a starter, or a comforting dinner, Tomato Soup is a timeless dish that brings warmth and comfort to any meal. Enjoy the rich and tangy flavors of this beloved soup and savor every spoonful.",
    "ingredients": ["tomatoes", "onion", "garlic", "vegetable broth", "cream"],
    "time": "35 mins"
  },
  {
    "id": 8,
    "author": "Robert Garcia",
    "name": "Chocolate Cake",
    "image": "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipesmedia/recipes/retail/x17/2012/jan/17709-creamy-orzo-with-spinach-600x600.jpg?ext=.jpg",
    "description": "Chocolate Cake is a rich and indulgent dessert that is loved by chocolate enthusiasts all over the world. This decadent cake is made from a batter consisting of flour, cocoa powder, sugar, eggs, butter, and milk. The ingredients are mixed together and baked until the cake is moist and fluffy. The key to a perfect Chocolate Cake is achieving the right balance of sweetness and chocolate flavor. The cake can be enjoyed on its own or frosted with a luscious chocolate ganache or buttercream frosting for an extra layer of decadence. Some variations of Chocolate Cake also include chocolate chips, nuts, or a hint of coffee to enhance the chocolate flavor. This dessert is perfect for special occasions such as birthdays, anniversaries, or any time you want to indulge in a sweet treat. Chocolate Cake is not only delicious but also versatile, allowing you to get creative with decorations and flavors. Whether you're serving it at a party or enjoying a slice with a cup of coffee, Chocolate Cake is sure to satisfy your sweet tooth. Enjoy the rich and heavenly flavors of this classic dessert and savor every bite.",
    "ingredients": ["flour", "cocoa powder", "sugar", "eggs", "butter", "milk"],
    "time": "1 hour"
  },
  {
    "id": 9,
    "author": "Anna Thompson",
    "name": "Greek Salad",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdNCTuufzOk4RDIMcgDakzCGidgG6ZQ8W9A&s",
    "description": "Greek Salad is a fresh and healthy dish that offers a delightful combination of flavors and textures. This vibrant salad features crisp cucumbers, juicy tomatoes, tangy feta cheese, and briny olives, all tossed together with red onion and a simple dressing of olive oil and lemon juice. The key to a perfect Greek Salad is using fresh, high-quality ingredients that are in season. The salad is often garnished with dried oregano and a sprinkle of black pepper to enhance the flavors. Greek Salad is not only delicious but also packed with nutrients, making it a great choice for a light lunch or a refreshing side dish. It's a versatile salad that can be enjoyed on its own or paired with grilled meats, seafood, or bread. The simplicity and freshness of this salad make it a timeless favorite in Mediterranean cuisine. Whether you're enjoying it as a healthy meal or as part of a larger spread, Greek Salad is sure to please your taste buds. Enjoy the crisp and tangy flavors of this classic salad and savor every bite.",
    "ingredients": ["cucumber", "tomato", "feta cheese", "olives", "red onion", "olive oil"],
    "time": "15 mins"
  },
  {
    "id": 10,
    "author": "James White",
    "name": "BBQ Ribs",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFIvukI_vzf6PtiDQB_QOqMh-FcoToqRuE9sWgV3NIB4ji3NMOaoz0gvDWi0z38eetNc&usqp=CAU",
    "description": "BBQ Ribs are a mouthwatering and satisfying dish that is perfect for any barbecue or gathering. These delicious ribs are seasoned with a dry rub made from a blend of spices such as paprika, garlic powder, onion powder, and brown sugar, giving them a rich and smoky flavor. The ribs are then slow-cooked until they are tender and juicy, and slathered with a tangy and sweet BBQ sauce that caramelizes and creates a sticky glaze. The key to perfect BBQ Ribs is cooking them low and slow, allowing the flavors to develop and the meat to become fall-off-the-bone tender. BBQ Ribs are often served with classic sides such as coleslaw, baked beans, and cornbread, making it a hearty and satisfying meal. Whether you're cooking them on the grill, in the oven, or in a smoker, BBQ Ribs are a crowd-pleaser that never disappoints. Enjoy the rich and smoky flavors of this classic dish and savor every bite.",
    "ingredients": ["ribs", "BBQ sauce", "salt", "pepper", "garlic powder"],
    "time": "2 hours"
  }
];

const App = () => {

  // Local state
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  return (
    <>
      {/* Header  */}
      <NavBar />
        <div className="flex container mx-auto bg-gray-50 p-4 gap-4">
          {/* Recipe List  */}
          <RecipeList recipes={recipes} selectedRecipe={selectedRecipe} onRecipeClick={setSelectedRecipe} />
          {/* Recipe Details  */}
          <RecipeDetails recipe={selectedRecipe} />
        </div>
        {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
