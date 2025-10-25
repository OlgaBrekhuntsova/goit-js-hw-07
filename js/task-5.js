function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const colorBtnElem = document.querySelector("button.change-color");
const colorNameElem = document.querySelector("span.color");

colorBtnElem.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  colorNameElem.textContent = color;
});
