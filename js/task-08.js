const loginFormEl = document.querySelector('.login-form');


function callBack(event){
    event.preventDefault();

    const emailEl = event.currentTarget.elements.email.value;
    const passwordEl = event.currentTarget.elements.password.value;


    if(emailEl === "" || passwordEl === "") {
        return alert('Please fill out all fields')
    }

    const result = { email: emailEl, password: passwordEl }
    console.log(result);
    event.currentTarget.reset();
}


loginFormEl.addEventListener('submit', callBack);