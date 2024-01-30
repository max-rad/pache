import {initElementSizeObserver} from '../utils/element-size-observer';

const initCompleteLookSlider = () => {
  const sliders = document.querySelectorAll('[data-swiper="complete-look"]');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    initElementSizeObserver(slider);

    const swiper = new Swiper(slider, {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        hiddenClass: '.swiper-pagination-hidden',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        }
      }
    })
  })
}

export {initCompleteLookSlider};
