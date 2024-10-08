
// Option 1

// let counterValue = 0;

// const incrementBtn = document.querySelector('[data-action = "increment"]');
// const decrementBtn = document.querySelector('[data-action = "decrement"]');
// const valueBtn = document.querySelector('#value')


// const addingFn = () => {
//     valueBtn.textContent = counterValue;
// }

// incrementBtn.addEventListener('click', () => {
//     counterValue += 1;
//     addingFn()
// });

// decrementBtn.addEventListener('click', () => {
//     counterValue -= 1;
//     addingFn();
// })


// Option 2

let counterValue = 0;

const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const valueBtn = document.querySelector('#value')


incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueBtn.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueBtn.textContent = counterValue;
})