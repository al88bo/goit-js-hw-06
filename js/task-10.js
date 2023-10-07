
// А МОЖНА ТАК?

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
createBtn.addEventListener('click', actionsWithButtons);
destroyBtn.addEventListener('click', actionsWithButtons);

function actionsWithButtons(e) {
  if (e.target.hasAttribute('data-destroy'))
    return e.target.parentNode.nextElementSibling.innerHTML = '';
  const markup = Array.from({ length: +e.target.previousElementSibling.value }, (_, i) =>
    `<div style='width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${getRandomHexColor()}'></div>`)
    .join('');
  return e.target.parentNode.nextElementSibling.innerHTML = markup;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

// function createBoxes(amount) {
  
// }
  
// function destroyBoxes() {
  
// }
