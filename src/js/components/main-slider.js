import Swiper from 'swiper/bundle';

const mySwiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 5000,
  },
});
