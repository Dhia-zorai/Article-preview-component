let button = document.querySelector("button");
let socialicons = document.querySelector(".social-icons");

button.addEventListener("click", () => {
  socialicons.classList.toggle("active");
  button.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!button.contains(e.target) || !button.socialicons(e.target)) {
    socialicons.classList.remove("active");
    button.classList.remove("active");
  }
});
