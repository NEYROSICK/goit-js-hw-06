let counterValue = 0;
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const counterInterface = document.querySelector("#value");

decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterInterface.innerText = counterValue;
});

incrBtn.addEventListener("click", () => {
  counterValue += 1;
  counterInterface.innerText = counterValue;
});
