import {Swiper} from 'swiper';
import {Pagination} from 'swiper/modules';

const slider = document.querySelector('[data-swiper="card"]');
const breakpointMedia = window.matchMedia('(max-width: 767px)');

let swiper;

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    initSwiper();
  } else {
    if (swiper) {
      swiper.destroy();
    }
  }

  breakpointMedia.addListener(breakpointChecker);
};

const initSwiper = () => {
  swiper = new Swiper(slider, {
    modules: [Pagination],
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

const initCardSlider = () => {
  if (!slider) {
    return;
  }

  breakpointChecker();
}

export {initCardSlider};
