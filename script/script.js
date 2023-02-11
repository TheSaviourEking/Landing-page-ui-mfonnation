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

// WORKING
const toggleBtn = document.querySelector(".toggleMenu");
const navLinks = document.querySelector(".nav-links");

const navLink = document.querySelector(".nav-link");

toggleBtn.addEventListener("click", function() {
  navLinks.classList.toggle("toggle");

  navLink.classList.remove('toggle')

  document.querySelector(".nav-link").classList.toggle('toggle')
  let image = document.getElementById('togglePic');
  if (image.src.match('Assets/cross.svg')) {
    image.src = 'Assets/menu-burger.svg';
  }
  else {
    image.src = 'Assets/cross.svg'
  }
});

// END OF WORKING

