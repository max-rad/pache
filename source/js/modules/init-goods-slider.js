import {Swiper} from '../vendor/swiper-bundle';

const initGoodsSlider = () => {
  const sliders = document.querySelectorAll('[data-swiper="goods"]');

  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
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
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
       /*  639: {
          slidesPerView: 2,
          spaceBetween: 20,
        }, */
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
        1599: {
          slidesPerView: 3,
          spaceBetween: 64,
        }
      }
    });
  });
}

export {initGoodsSlider};
