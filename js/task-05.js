
// // // Option 1

// const nameInputBtn = document.querySelector('#name-input');
// const nameOutputBtn = document.querySelector('#name-output');

// nameInputBtn.addEventListener('input', callback);

// function callback(el) {
//     nameOutputBtn.textContent = el.currentTarget.value;

//     if ( el.currentTarget.value === '') {
//         nameOutputBtn.textContent = 'Anonymous'; 
//     } else {
//           nameOutputBtn.textContent = el.currentTarget.value;
//     }
// }


// // Option 2

const nameInputBtn = document.querySelector('#name-input');
const nameOutputBtn = document.querySelector('#name-output');

nameInputBtn.addEventListener('input', () => {
    const inputValue = nameInputBtn.value;

    if (inputValue === '') {
       nameOutputBtn.textContent = 'Anonymous' 
    } else {
        nameOutputBtn.textContent = inputValue;
    }
})