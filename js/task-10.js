function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesArray = [];
  var boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    boxesArray.push(
      `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
    );

    boxSize += 10;
  }

  const boxesMarkup = boxesArray.join("");
  boxesContainerEl.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = "";
}

const inputBoxNumEl = document.querySelector("#controls > input");
const createBoxButtonEl = document.querySelector("[data-create]");
const destroyBoxButtonEl = document.querySelector("[data-destroy]");
const boxesContainerEl = document.querySelector("#boxes");

createBoxButtonEl.addEventListener("click", () => {
  createBoxes(inputBoxNumEl.value);
});

destroyBoxButtonEl.addEventListener("click", destroyBoxes);
