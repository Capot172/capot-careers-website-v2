const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const btn_sign_in = document.querySelector("#button_sign_in");
const email_pn = document.querySelector("#email");

togglePassword.addEventListener("click", function () {
   
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye icon
  this.classList.toggle('bi-eye');
});
btn_sign_in.addEventListener("click", () => {
  
});
