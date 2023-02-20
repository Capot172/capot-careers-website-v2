const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

const confirm_password = document.querySelector("#confirm_password");
const togglePassword2 = document.querySelector("#togglePassword2");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye icon
  this.classList.toggle('bi-eye');
});
togglePassword2.addEventListener("click", function () {
  // toggle the type attribute
  const type = confirm_password.getAttribute("type") === "password" ? "text" : "password";
  confirm_password.setAttribute("type", type);
  // toggle the eye icon
  this.classList.toggle('bi-eye');
});


