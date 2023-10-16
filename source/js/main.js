import {initHeaderMenu} from './modules/init-header-menu.js';
import {initIntroSlider} from './modules/init-intro-slider.js';
import {initNewProductsSlider} from './modules/init-new-products-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initIntroSlider();
    initNewProductsSlider();
  });
});
