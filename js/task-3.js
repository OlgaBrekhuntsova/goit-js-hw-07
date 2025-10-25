const inputElem = document.querySelector("input#name-input");
const outputElem = document.querySelector("span#name-output");
inputElem.addEventListener("input", () => {
  console.log("brutto", inputElem.value);
  console.log("trimmed", inputElem.value.trim());
  const inputValue = inputElem.value.trim();
  outputElem.textContent = inputValue ? inputValue : "Anonymous";
});
