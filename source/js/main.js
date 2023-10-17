import {initHeaderMenu} from './modules/init-header-menu.js';
import {initIntroSlider} from './modules/init-intro-slider.js';
import {initGoodsSlider} from './modules/init-goods-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initIntroSlider();
    initGoodsSlider();
  });
});
