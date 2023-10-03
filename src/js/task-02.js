const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const locationTag = document.querySelector('ul#ingredients');
const arrNewTags = ingredients.map(ingredient => {
    const tag = document.createElement('li');
    tag.textContent = ingredient;
    tag.classList.add('item');
    return tag;
});
locationTag.append(...arrNewTags);