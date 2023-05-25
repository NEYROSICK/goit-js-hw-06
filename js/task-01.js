// debugger;
const categoryItemsList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItemsList.length}`);

categoryItemsList.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  const subcategoryItemsList = category.querySelectorAll("li");
  console.log(`Elements: ${subcategoryItemsList.length}`);
});
