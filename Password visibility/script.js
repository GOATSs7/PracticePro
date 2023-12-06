const password = document.getElementById("password");
const span = document.getElementById("span");

function togglePassword(icon) {
  const field = document.querySelector(icon.getAttribute("toggle"));

  if (field.type === "password") {
    field.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    field.type = "password";

    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}
