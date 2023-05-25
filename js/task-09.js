function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const colorTextEl = document.querySelector(".color");

colorTextEl.parentNode.nextElementSibling.addEventListener("click", (event) => {
  const randomColorValue = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColorValue;
  colorTextEl.textContent = randomColorValue;
});
