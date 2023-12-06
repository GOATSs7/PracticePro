let text = document.getElementById("text");
let btn = document.getElementById("btn");
let para = document.getElementById("para");

text.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    // this shift the event when we enter to button
    btn.click();
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();

  // we have to create save or crete a node because we have same event in both function
  // oterwise input fild will not emply after enter
  let textNode = document.createTextNode(text.value);

  para.appendChild(textNode);
  text.value = "";
});
