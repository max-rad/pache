import {Swiper} from '../vendor/swiper-bundle.js';

const initMapSlider = () => {
  const slider = document.querySelector('[data-swiper="map"]');

  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    allowTouchMove: false,
  });

  const list = document.querySelector('[data-map-list]');

  if (!list) {
    return;
  }

  const items = list.querySelectorAll('[data-map-item]');
  const map = document.querySelector('[data-map]');

  initItems(items);

  let currentActiveIndex = items[0].dataset.index;

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-map-item]')) {
      return;
    }

    evt.preventDefault();

    const item = target.closest('[data-map-item]');

    if (item.classList.contains('is-active')) {
      return;
    }

    const itemIndex = item.dataset.index;

    if (swiper) {
      swiper.slideTo(itemIndex);
      item.classList.add('is-active');
      items[currentActiveIndex].classList.remove('is-active');
      currentActiveIndex = itemIndex;

      if (window.innerWidth < 767) {
        map.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  });

}

const initItems = (items) => {
  items.forEach((item, index) => {
    if (item.classList.contains('is-active')) {
      item.classList.remove('is-active');
    }
    item.setAttribute('data-index', index)
  });

  items[0].classList.add('is-active');
}

export {initMapSlider};
