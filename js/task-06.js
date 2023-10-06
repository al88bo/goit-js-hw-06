const inputTag = document.querySelector('input[data-length="6"]');
inputTag.addEventListener("blur", getColor);

function getColor(e) {
  inputTag.classList.contains('invalid') && inputTag.classList.remove('invalid');
  inputTag.value.length === +e.target.dataset.length
    ? inputTag.classList.add('valid')
    : inputTag.classList.add('invalid');
}