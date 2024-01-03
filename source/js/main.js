import {initHeaderMenu} from './modules/init-header-menu.js';
import {initIntroSlider} from './modules/init-intro-slider.js';
import {initGoodsSlider} from './modules/init-goods-slider.js';
import {initHeaderAccordion} from './modules/init-header-accordion.js';
import {initCardSlider} from './modules/init-card-slider.js';
import {initShowMore} from './modules/init-show-more.js';
import {initTabs} from './modules/tabs/init-tabs.js';
import {initModals} from './modules/modals/init-modals.js';
import {initMapSlider} from './modules/init-map-slider.js';
import {initCompleteLookSlider} from './modules/init-complete-look-slider.js';
import {initQuantityCounter} from './modules/init-quantity-counter.js';
import {initCatalogCardSlider} from './modules/init-catalog-card-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeaderMenu();
    initHeaderAccordion();
    initIntroSlider();
    initGoodsSlider();
    initCardSlider();
    initShowMore();
    initTabs();
    initModals();
    initMapSlider();
    initCompleteLookSlider();
    initQuantityCounter();
    initCatalogCardSlider();
  });
});
