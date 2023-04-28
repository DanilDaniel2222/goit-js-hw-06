function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.color');

changeColor.addEventListener("click", () => {
  document.body.style.background = getRandomHexColor();

  backgroundColor.textContent = document.body.getAttribute('background-color');
  console.log(backgroundColor);
});

function onChangeColor(){
  const color = getRandomHexColor();
  backgroundColor.textContent = color;
  body.style.backgroundColor = color;
}







