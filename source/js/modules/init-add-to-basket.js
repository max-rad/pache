import {modals} from './modals/init-modals';

const initAddToBasket = () => {
  // document.addEventListener('click', (evt) => {
  //   const target = evt.target;

  //   if (!target.closest('[data-open-add-to-basket]')) {
  //     return;
  //   }

  //   const button = target.closest('[data-open-add-to-basket]');
  // });

  const wrapper = document.querySelector('.wrapper');
  const request = new XMLHttpRequest();

  request.responseType = 'document';
  request.open("GET", "http://localhost:3000/add-to-basket.html");

  request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      wrapper.after(request.response.documentElement);
      modals.open('add-to-basket');
    }
  };

  request.send();
};

export {initAddToBasket};
