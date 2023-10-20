import {Swiper} from '../vendor/swiper-bundle';

const initCompleteLookSlider = () => {
  const sliders = document.querySelectorAll('[data-swiper="complete-look"]');

  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        }
      }
    })
  })
}

export {initCompleteLookSlider};
