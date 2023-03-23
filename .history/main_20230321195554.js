


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
  $layout-width-inner: 1200px;
  
  $breakpoints: (
    //キー : 値
    "sp": "(max-width: 767px)",
    "tab": "(min-width: 768px) and (max-width: #{$layout-width-inner - 1px})",
    "pc": "(min-width: #{$layout-width-inner})",
  );
  
  //メディアクエリー
  @mixin mq($breakpoint: sp) {
    @media #{map-get($breakpoints, $breakpoint)} {
      @content;
    }
  }
})