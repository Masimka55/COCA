
// Инициализация первого слайдера
const swiperPortfolio = new Swiper(".news__swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prew',
  },
  breakpoints: {
    481:{
      slidesPerView: 2,  
      spaceBetween:16,
    },
   480: {
      slidesPerView: 1.3,  
      spaceBetween:16,
      
    },
    320: { 
      slidesPerView: 1.3,
      spaceBetween:10,
    }
  }
});

// Инициализация второго слайдера
const swiperreviews = new Swiper(".reviews__swipper", {
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 600,
  loop: false,
  navigation: {
    nextEl: ".control__next",
    prevEl: ".control__prew"
  },
 
});


document.querySelector('.mobile-menu').addEventListener('click', function() {
  const navigationList = document.querySelector('.navigation-list');
  const mobileMenu = document.querySelector('.mobile-menu__button');
  
  navigationList.classList.toggle('active-mobile-menu');
  mobileMenu.classList.toggle('close-mobile-menu');
});

