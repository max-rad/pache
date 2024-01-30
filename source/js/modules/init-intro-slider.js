const initIntroSlider = () => {
  const slider = document.querySelector('[data-swiper="intro"]');

  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hiddenClass: '.swiper-pagination-hidden',
    },
  });
}

export {initIntroSlider};
