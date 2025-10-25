function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function rgbToHex(rgb) {
  const [r, g, b] = rgb.slice(4, -1).split(",");
  const toHex = (n) => n.toString(16).padStart(2, "0");
  return `#${toHex(+r)}${toHex(+g)}${toHex(+b)}`;
}

const bodyElem = document.querySelector("body");
const colorBtnElem = document.querySelector("button.change-color");
const colorNameElem = document.querySelector("span.color");

colorBtnElem.addEventListener("click", () => {
  const bodyColor = window.getComputedStyle(bodyElem).backgroundColor;
  let newColor = getRandomHexColor();
  while (rgbToHex(bodyColor) === newColor) {
    newColor = getRandomHexColor();
  }
  bodyElem.style.backgroundColor = newColor;
  colorNameElem.textContent = newColor;
});
