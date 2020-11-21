// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSizeInput = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');
console.log(fontSizeInput.value );
const handleFontSize = () =>
{console.log(fontSizeInput.value );
  return text.style.fontSize = text.style.fontSize*(100+fontSizeInput.value)/100;
};
console.log(fontSizeInput.value );
fontSizeInput.addEventListener('input', handleFontSize);
