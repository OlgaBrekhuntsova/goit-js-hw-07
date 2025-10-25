# goit-js-hw-07

-----TASK-1-----

The HTML contains a list of categories — ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

Using DOM element properties and methods, write a script that:

Counts and logs in the console the number of categories in ul#categories — that is, the number of li.item elements.

For each li.item element in the list ul#categories, finds and logs in the console the text of the element’s title (<h2> tag) and the number of items in that category (all <li> nested inside it).

What the mentor will check:

The number of categories, their names, and the number of items are obtained using DOM properties and methods.

The data for each category is retrieved and logged in the console inside a loop or forEach() method.

The console output should look like this:

Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5

-----TASK-2-----

Write a script that creates an image gallery based on an array of data.
The HTML contains a list ul.gallery:

<ul class="gallery"></ul>

Use the images array of objects to create <img> elements nested inside <li> elements.

You can create and add HTML elements using document.createElement() and elem.append(), or use template strings with elem.insertAdjacentHTML().

All gallery elements must be added to the DOM in a single operation.

Add minimal gallery styling using flexbox via CSS classes.

const images = [
{
url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
alt: "White and Black Long Fur Cat",
},
{
url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
alt: "Orange and White Koi Fish Near Yellow Koi Fish",
},
{
url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
alt: "Group of Horses Running",
},
{
url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
alt: "Alpine Spring Meadows",
},
{
url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
alt: "Nature Landscape",
},
{
url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
alt: "Lighthouse Coast Sea",
},
];

What the mentor will check:

A gallery of six images is created and added to the DOM.

The gallery is added to ul.gallery and consists of six <li> elements, each containing an <img> element.

The image elements are created using data from the images array.

All gallery elements are added to the DOM in one operation.

The gallery is styled minimally using flexbox through CSS classes.

-----TASK-3-----

Write a script that updates the content of span#name-output with the current value from input#name-input (on the input event) as a name in a greeting message.
Trim whitespace from the input value.
If the input is empty or contains only spaces, display "Anonymous" instead.

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

What the mentor will check:

The input event is listened to on input#name-input.

While typing in the input, its current value appears in span#name-output as the greeting name.

The input value is trimmed of whitespace.

If the input is empty or contains only spaces, "Anonymous" is shown in the span.

-----TASK-4-----

Write a script to handle a login form.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>

The form submission (form.login-form) must happen on the submit event.

The page must not reload on submission.

If any form field is empty, show an alert: 'All form fields must be filled in'.
(Do not add the required attribute — validation must happen via JS.)

If all fields are filled, collect the field values into an object with two properties, where keys are input names and values are trimmed input values.
Use the elements property to access form inputs.

When the form is submitted, log the object to the console and clear the form using the reset() method.

What the mentor will check:

The submit event is being listened to.

The page does not reload on submission.

If there are empty fields, an alert is shown.

On submission, an object with input names and trimmed values is logged to the console.

After submission, form fields are cleared.

-----TASK-5-----

Write a script that changes the background color of the <body> element via inline style when the button.change-color is clicked, and displays the color value inside span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Use the following function to generate a random color:

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Note: the function returns a color in HEX format, while the background color of <body> will be shown in RGB — this is normal and doesn’t require any changes.

What the mentor will check:

The background color of <body> changes only after clicking button.change-color.

Each click applies a new random color.

The same color value appears in both <body> background and span.color.
