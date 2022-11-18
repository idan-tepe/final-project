const allRowsInputs = document.getElementsByClassName("row");
document.addEventListener("DOMContentLoaded", focusing);
function focusing() {
  allRowsInputs[0].firstElementChild.focus();
}
const allInputs = document.getElementsByTagName("input");
let ptr = allInputs[0];
let cnt = 0;
const allLetters = "qwertyuioplkjhgfdsazxcvbnm";
document.addEventListener("keypress", (e) => {
  ptr.focus();
  if (allLetters.includes(e.key)) {
    ptr.value = e.key;
    ptr.setAttribute("disabled", true);
    cnt++;
    if (cnt < allInputs.length) {
      ptr = allInputs[cnt];
    }
    ptr.removeAttribute("disabled");
  } else {
    ptr.value = "";
  }
});
