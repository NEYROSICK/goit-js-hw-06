const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ingredientsElem = document.createElement("li");
  ingredientsElem.classList.add("item");
  ingredientsElem.textContent = ingredient;
  ingredientsList.append(ingredientsElem);
});
