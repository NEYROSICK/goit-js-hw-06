const categoryItemsList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItemsList.length}`);

categoryItemsList.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
  // console.log(`Elements: ${category.lastElementChild.childElementCount}`);
});
