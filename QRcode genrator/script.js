let button = document.getElementById("btn");
button.onclick = () => {
  let inputValue = document.getElementById("inputText");
  let img = document.getElementById("img");
  img.src =
    " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputValue.value;
};
