import {Swiper} from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import {initElementSizeObserver} from '../utils/element-size-observer';

const initGoodsSlider = () => {
  const sliders = document.querySelectorAll('[data-swiper="goods"]');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    initElementSizeObserver(slider);

    const swiper = new Swiper(slider, {
      modules: [Navigation, Pagination],
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
