import {initElementSizeObserver} from '../utils/element-size-observer';

const initGoodsSlider = () => {
  const sliders = document.querySelectorAll('[data-swiper="goods"]');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    initElementSizeObserver(slider);

    const buttonNext = slider.querySelector('[data-button-next="goods"]');
    const buttonPrev = slider.querySelector('[data-button-prev="goods"]');

    const swiper = new Swiper(slider, {
      slidesPerView: 3,
      spaceBetween: 64,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        hiddenClass: '.swiper-pagination-hidden',
      },
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
        hiddenClass: '.swiper-button-hidden',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 64,
        }
      }
    });
  });
}

export {initGoodsSlider};
