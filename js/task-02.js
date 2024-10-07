const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

// const option = ingredients[0];
// console.log(option);

const findEl = document.querySelector('#ingredients')

const element = ingredients.map(option => {
const creatingElement = document.createElement('li');
creatingElement.textContent = option;
    creatingElement.classList.add('item');

    return creatingElement;
})

console.log(element);
findEl.append(...element);


