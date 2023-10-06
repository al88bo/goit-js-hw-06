// const decremBtn = document.querySelector('button[data-action="decrement"]');
// const valueTag = document.querySelector('#value');
// const incremBtn = document.querySelector('button[data-action="increment"]');
// let counterValue = 0;
// decremBtn.addEventListener('click', () => valueTag.textContent = --counterValue);
// incremBtn.addEventListener('click', () => valueTag.textContent = ++counterValue);

const decremBtn = document.querySelector('button[data-action="decrement"]');
const valueTag = document.querySelector('#value');
const incremBtn = document.querySelector('button[data-action="increment"]');
const letsChangeValue = e =>
    valueTag.textContent = e.target.dataset.action === 'decrement'
        ? +valueTag.textContent - 1
        : +valueTag.textContent + 1;
decremBtn.addEventListener('click', letsChangeValue);
incremBtn.addEventListener('click', letsChangeValue);