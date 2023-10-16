import {Swiper} from '../vendor/swiper-bundle';

const initNewProductsSlider = () => {
  const slider = document.querySelector('[data-swiper="new-products"]');

  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 64,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

export {initNewProductsSlider};
