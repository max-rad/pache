const initCatalogCardSlider = () => {
  const sliders = document.querySelectorAll('[data-swiper="catalog-card"]');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider, index) => {
    const buttonNext = slider.querySelector('[data-button-next="catalog-card"]');
    const buttonPrev = slider.querySelector('[data-button-prev="catalog-card"]');

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
        hiddenClass: '.swiper-button-hidden',
      },
    });
  });
}

export {initCatalogCardSlider};
