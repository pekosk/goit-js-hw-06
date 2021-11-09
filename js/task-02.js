const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(ingred => {
const item = document.createElement('li');
item.textContent = ingred;
item.classList.add('item');
return item;
})

ingredientsList.append(...ingredientsArr);