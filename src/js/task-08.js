const correctEmail = '1@gmail.com';
const correctPassword = '1111';

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const emailValue = loginForm.elements.email.value;
    const passwordValue = loginForm.elements.password.value;

    if(emailValue === "" || passwordValue === ""){
        alert("Don't be lazy, fill up all the forms !");
    }
    console.log(emailValue);
    console.log(passwordValue);
});


