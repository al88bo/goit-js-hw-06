const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");
inputName.addEventListener("input", getOutput);

function getOutput(e) {
  outputName.textContent = e.currentTarget.value
    ? e.currentTarget.value
    : "Anonymous";
}

// document.addEventListener("keydown", (e) => {
//   console.log("key: ", e.key);
//   console.log("code: ", e.code);
// });