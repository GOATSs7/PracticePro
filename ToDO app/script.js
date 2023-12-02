// submit.getElementById("submit");
// deletec.getElementById("delete");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let titlec = title.value;
  let descc = desc.value;

  localStorage.setItem("TODO", JSON.stringify([titlec, descc]));
  todo.innerHTML = `<h1>${titlec}<h1>
  <p>${descc}<p>`;

  titlec.innerHTML = " ";
  descc.innerHTML = "";
});

deletec.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("TODO");
  todo.innerHTML = "";
});
