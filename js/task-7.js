// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSizeInput = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');
const startFontSize = Number.parseInt(window.getComputedStyle(text).fontSize);
const handleFontSize = () => text.style.fontSize = `${startFontSize*Number(fontSizeInput.value)/50}px`;
fontSizeInput.addEventListener('change', handleFontSize);
