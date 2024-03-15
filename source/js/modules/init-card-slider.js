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
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hiddenClass: '.swiper-pagination-hidden',
    },
  });
}

const initCardSlider = () => {
  if (!slider) {
    return;
  }

  breakpointChecker();

  document.addEventListener('click', documentClickHandler);
}

const documentClickHandler = (evt) => {
  const target = evt.target;

  if (!target.closest('[data-treevalue]')) {
    return;
  }

  if (swiper) {
    swiper.update();
  }
}

export {initCardSlider};
