const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsMarkup = ingredients
  .map((ingredient) => {
    const ingredientsElem = document.createElement("li");
    ingredientsElem.classList.add("item");
    ingredientsElem.textContent = ingredient;
    return ingredientsElem.outerHTML;
  })
  .join("");

ingredientsList.innerHTML = ingredientsMarkup;
