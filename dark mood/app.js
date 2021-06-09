const btn = document.getElementById("dark");

document.body.className = "dark";

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
