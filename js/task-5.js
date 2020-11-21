// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

const handleNameInput = () => { if (!nameInput.value) { nameOutput.textContent = 'незнакомец' } else { nameOutput.textContent = nameInput.value }};
nameInput.addEventListener('input', handleNameInput);

