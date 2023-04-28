const input = document.querySelector('#validation-input');

input.addEventListener("blur", ()=> {
    const dataLength = Number(input.getAttribute('data-length'));
    const currentValue = input.value.length;

    console.log("dataLength: ", dataLength);
    console.log("currentValue: ", currentValue);

    if(dataLength === currentValue){
        input.classList.add("valid");
        input.classList.remove("invalid");
    }else{
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
});






