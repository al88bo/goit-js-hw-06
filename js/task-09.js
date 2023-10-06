const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('span.color');
button.addEventListener('click', letsChangeColor);

function letsChangeColor() {
  const tempColor = getRandomHexColor();
  body.style.backgroundColor = tempColor;
  span.textContent = tempColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}