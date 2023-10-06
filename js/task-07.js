const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputRange.addEventListener('input', letsChangeSize);

function letsChangeSize() {
    text.style.fontSize = inputRange.value + 'px';
}