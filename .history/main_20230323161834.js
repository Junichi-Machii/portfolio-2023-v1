


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

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 10,
  slidexPerView: 1,
  breakpoints: {
    660: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,

    }
  }
})


//color 

let theme = document.getElementById('theme'),
    theme_icon,
    el = document.createElement('i');

if (window.matchMedia('(prefirs-color-scheme: dark)').matches === true) {
  el.classList.add('bx', 'bxs-sun');
  theme_icon = ' sun ';
}else {
  el.classList.add('bx', 'bxs-moon');
  theme_icon = 'moon';
}
theme.appendChild(el);

theme.addEventListener('click', function() {
  let dark = getComputedStyle(document.documentElement).getPropertyValue('--bg-color'),
  light = getComputedStyle(document.documentElement).getPropertyValue('--text-color');

  document.documentElement.style.setProperty('--bg-color', light);
  document.documentElement.style.setProperty('--text-color', dark);

  if (theme_icon == 'sun') {
    theme.firstElementChild.classList = 'bx bxs-moon';
    theme_icon = 'moon';
  } else {
    theme.firstElementChild.classList = 'bx bxs-sun';
    theme_icon = 'moon';
  }
})