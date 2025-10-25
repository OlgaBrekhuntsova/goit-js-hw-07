const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.children;

console.log("Number of categories:", categoriesItems.length);
for (const category of categoriesItems) {
  console.log(
    "Category: ",
    category.querySelector("h2").textContent,
    "\nElements: ",
    category.querySelector("ul").children.length
  );
}
