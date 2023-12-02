let container = document.getElementById("text");
let button = document.getElementById("button");
let input = document.getElementById("input");
let str = "";
let func = null;
let stringLoop = 0;
let storeNewString = "";

function autoText() {
  if (stringLoop == str.length) {
    clearInterval(func);
  } else {
    storeNewString = storeNewString + str[stringLoop];
    container.innerHTML = storeNewString;
    stringLoop++;
  }
}

button.onclick = () => {
  if (func) {
    // If function is running, reset variables and clear the interval
    clearInterval(func);
    stringLoop = 0;
    storeNewString = "";
    container.innerHTML = ""; // Clear the text in the container
  }
  str = input.value.toUpperCase();
  func = setInterval("autoText()", 100);
};
