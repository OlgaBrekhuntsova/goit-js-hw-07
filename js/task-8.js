// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */
const amountInput = document.querySelector('div#controls input');
const createBtn = document.querySelector('div#controls button[data-action="render"]');
const removeBtn = document.querySelector('div#controls button[data-action="destroy"]');
const boxesDiv = document.querySelector('div#boxes');
const boxesArray = [];
const startWidth = 30;
const startHeight = 30;
let amount = 0;
const genColor = () => {
  let col = 0;
  while (col.length !== 7) {
    col = Math.round(255.0 * Math.random());
    const r = col.toString(16);
    col = Math.round(255.0 * Math.random());
    const g = col.toString(16);
    col = Math.round(255.0 * Math.random());
    const b = col.toString(16);
    col = '#' + r + g + b;
  }
   return col;
};
const createBoxes = (amount) => {
  amount = Number(amountInput.value);
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${startWidth + 10 * i}px`;
    box.style.height = `${startHeight + 10 * i}px`;
    box.style.backgroundColor = genColor();
    boxesArray.push(box);
  };

  boxesDiv.append(...boxesArray);
};
const destroyBoxes = () => {
  const boxesCurrent = boxesDiv.querySelectorAll('div');
   for (const boxesCurrentItem of boxesCurrent) {
    boxesDiv.removeChild(boxesCurrentItem);
  };
   amountInput.value=null;
};

createBtn.addEventListener('click', createBoxes);
removeBtn.addEventListener('click', destroyBoxes);