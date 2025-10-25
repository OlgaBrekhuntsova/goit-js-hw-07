const inputElem = document.querySelector("input#name-input");
const outputElem = document.querySelector("span#name-output");
inputElem.addEventListener("input", () => {
  const inputValue = inputElem.value.trim();
  outputElem.textContent = inputValue ? inputValue : "Anonymous";
});
