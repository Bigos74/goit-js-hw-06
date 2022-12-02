const listElement = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const fragment = document.createDocumentFragment();
const liElements = ingredients.forEach(ingredient => {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = ingredient;
  fragment.appendChild(liElement);
  listElement.appendChild(liElement);
});

listElement.appendChild(fragment);
