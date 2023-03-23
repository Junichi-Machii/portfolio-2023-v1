// nav

const nav = document.getElementById('nav'),
    navToggle = document.getElementById('navToggle'),
    navLinks = document.querySelectorAll('.header__nav-link');

    navToggle?.addEventListener('click', () => {
      nav.classList.toggle('toggle');
    });

navLinks.forEach(function (li) {
  li.addEventListener('click', () => {
    nav.classList.remove('toggle');
  });
});

// swiper

const swiper = new Swiper('')