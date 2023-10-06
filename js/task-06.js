const inputTag = document.querySelector('input[data-length="6"]');
inputTag.addEventListener("blur", (e) =>
  inputTag.value.length === +e.target.dataset.length
    ? inputTag.classList.add("valid")
    : inputTag.classList.add("invalid")
);