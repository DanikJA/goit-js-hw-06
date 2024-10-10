const valInput = document.querySelector('#validation-input');


valInput.addEventListener('blur', (event) => {
    const correctLength = parseInt(valInput.getAttribute('data-length'), 10)
    const currentLength = event.currentTarget.value.length;

    if (currentLength === correctLength) {
        valInput.classList.remove('invalid');
        valInput.classList.add('valid');
    } else {
        valInput.classList.add('invalid');
        valInput.classList.remove('invalid');
    }
});















// const input = document.getElementById('validation-input');

//     input.addEventListener('blur', () => {
//         const requiredLength = parseInt(input.getAttribute('data-length'), 10);
//         const currentLength = input.value.length;

//         if (currentLength === requiredLength) {
//             input.classList.remove('invalid');
//             input.classList.add('valid');
//         } else {
//             input.classList.remove('valid');
//             input.classList.add('invalid');
//         }
//     });


//     const myInput = document.querySelector("#validation-input");
// myInput.addEventListener("blur", onBlur);
// function onBlur(e) {
//   const input1 = e.currentTarget;
//   const inputLength = Number(input1.dataset.length);
//   if (input1.value.length === inputLength) {
//     input1.classList.remove("invalid");
//     input1.classList.add("valid");
//   } else {
//     input1.classList.remove("valid");
//     input1.classList.add("invalid");
//   }
//   //console.log(input1);
//   //console.log(inputLength);
// }
