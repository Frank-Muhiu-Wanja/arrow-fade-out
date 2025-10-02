let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  console.log(position);
  if (position <= 5) {
    // At the top → show the arrow
    arrow.classList.add("fade-in");
    arrow.classList.remove("fade-out");
  } else {
    // Scrolled down → hide the arrow
    arrow.classList.add("fade-out");
    arrow.classList.remove("fade-in");
  }
});
