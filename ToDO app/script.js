let title = document.getElementById("title");
let description = document.getElementById("description");
let submit = document.getElementById("submit");
let deletec = document.getElementById("deletec");
let todo = document.getElementById("todo");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let titlec = title.value;
  let descc = description.value;

  localStorage.setItem("TODO", JSON.stringify([titlec, descc]));
  todo.innerHTML = `<h1>${titlec}<h1>
  <p>${descc}<p>`;

  title.value = " ";
  description.value = " ";
});

deletec.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("TODO");
  todo.innerHTML = "";
});
