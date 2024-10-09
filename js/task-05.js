const nameInputBtn = document.querySelector('#name-input');
const nameOutputBtn = document.querySelector('#name-output');

nameInputBtn.addEventListener('input', () => {
    const inputValue = nameInputBtn.value;



    if (inputValue === "") {
        nameOutputBtn.textContent = 'Anonymous';
    } else {
        nameOutputBtn.textContent = inputValue;
    }
});