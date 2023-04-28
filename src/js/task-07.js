const fontSizeControlEl = document.querySelector('#font-size-control');
const textSizeEl = document.querySelector('#text');
textSizeEl.style.fontSize = fontSizeControlEl.value + "px";

fontSizeControlEl.addEventListener("input", event => {
    textSizeEl.style.fontSize = event.currentTarget.value + "px";
});






 
