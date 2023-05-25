const fontSizeSwitchEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeSwitchEl.addEventListener("input", () => {
  textEl.style.fontSize = `${fontSizeSwitchEl.value}px`;
});
