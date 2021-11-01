var container = document.querySelector(".container");
var circle = document.querySelector(".circle");
var bigContainer = document.querySelector(".big-container");
circle.addEventListener("click", () => {
  circle.classList.toggle("circle-right");
  container.classList.toggle("color-Border");
  bigContainer.classList.toggle("toggle-result");
});
