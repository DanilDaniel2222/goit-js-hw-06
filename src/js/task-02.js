const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
  const liIngredient = document.createElement('li');
  liIngredient.classList.add("item");
  liIngredient.textContent = ingredient;

  return liIngredient;
});

console.log(elements);
ingredientsContainerEl.append(...elements);




