import {Swiper} from 'swiper';
import {Pagination} from 'swiper/modules';

const initIntroSlider = () => {
  const slider = document.querySelector('[data-swiper="intro"]');

  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    modules: [Pagination],
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

export {initIntroSlider};
