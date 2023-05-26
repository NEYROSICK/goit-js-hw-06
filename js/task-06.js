const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", () => {
  inputEl.classList.add("invalid");

  if (inputEl.value.length != inputEl.dataset.length) {
    inputEl.classList.replace("valid", "invalid");

    return;
  }

  inputEl.classList.replace("invalid", "valid");
});
