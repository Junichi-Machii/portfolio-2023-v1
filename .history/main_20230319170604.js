// nav

const nav = document.getElementById('nav'),
    navToggle = document.getElementById('navToggle'),
    navLinks = document.querySelectorAll('.header__nav-link');

    navToggle?.addEventListener('click', function() {
      nav.classList.toggle('to')
    })