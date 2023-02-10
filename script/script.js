// function toggleMenu() {
//     const toggleMenu = document.querySelector(".toggleMenu");
//     const navigation = document.querySelector(".navigation");
//     toggleMenu.classList.toggle("active");
//     navigation.classList.toggle("active");
// }

// function toggleMenu() {
//     const toggleMenu = document.querySelector(".toggleMenu");
//     const navigation = document.querySelector(".navigation");
//     toggleMenu.classList.toggle("active");
//     navigation.classList.toggle("active");
// }

const toggleBtn = document.querySelector(".toggleMenu");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", function() {
  navLinks.classList.toggle("toggle");
});
