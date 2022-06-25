// Burger
document.querySelector(".hamburger").addEventListener("click", function (e) {
  e.preventDefault();
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
    document.querySelector(".nav__burger").classList.add("disappear");
    document.querySelector(".nav__burger").classList.remove("d-fl");
  } else {
    this.classList.add("is-active");
    document.querySelector(".nav__burger").classList.add("d-fl");
    document.querySelector(".nav__burger").classList.remove("disappear");
  }
});
