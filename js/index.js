const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Show Nav Bar
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// Hide Nav Bar When Link is Clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Hide Nav Bar When Scrolling
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  const checkNavOpen = document.querySelector('.nav-open');
  if (checkNavOpen && prevScrollpos < currentScrollPos) {
    document.body.classList.remove('nav-open');
  }
  prevScrollpos = currentScrollPos;
};
