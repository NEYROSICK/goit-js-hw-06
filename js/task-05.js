const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", (elem) => {
  outputNameEl.textContent = elem.currentTarget.value;
  if (outputNameEl.textContent == "") {
    outputNameEl.textContent = "Anonymous";
  }
});
