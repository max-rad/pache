import {initHeaderMenu} from './modules/init-header-menu.js';
import {initIntroSlider} from './modules/init-intro-slider.js';
import {initGoodsSlider} from './modules/init-goods-slider.js';
import {initHeaderAccordion} from './modules/init-header-accordion.js';
import {initCardSlider} from './modules/init-card-slider.js';
import {initShowMore} from './modules/init-show-more.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initHeaderAccordion();
    initIntroSlider();
    initGoodsSlider();
    initCardSlider();
    initShowMore();
  });
});
