const categories = document.querySelector("ul#categories");
console.log(`Number of categories: ${categories.children.length}`);
const itemsArray = document.querySelectorAll("li.item");
itemsArray.forEach(item => console.log(`Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.childElementCount}`));
// itemsArray.forEach(item => console.log(`Category: ${item.querySelector('h2').textContent}\nElements: ${item.querySelector('ul').childElementCount}`));
