const showMore = document.querySelectorAll('[data-show-more]');
const breakpointMedia = window.matchMedia('(max-width: 767px)');

let length = 6;

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    length = 8;
  } else {
    length = 6;
  }

  showMore.forEach((element) => {
    const items = element.querySelectorAll('li:not([style="display: none;"])');
    const icon = element.querySelector('[data-show-more-button]');

    if (items.length <= length) {
      icon.style.display = 'none';
      element.style.overflow = 'visible';
    } else {
      icon.style.display = 'block';
      element.style.overflow = 'hidden';
    }

    // const callback = function(mutationList, observer) {
    //   for (let mutation of mutationList) {
    //     if (mutation.type === 'attributes' && window.innerWidth < 1023) {
    //       const items = element.querySelectorAll('li:not([style="display: none;"])');
    //       const icon = element.querySelector('[data-show-more-button]');
    //       if (items.length <= 6) {
    //         icon.style.display = 'none';
    //       } else {
    //         icon.style.display = 'block';
    //       }
    //     }
    //   }
    // }

    // const observer = new MutationObserver(callback);
    // observer.observe(element.querySelector('ul'), config);
  });

  breakpointMedia.addListener(breakpointChecker);
};

const initShowMore = () => {
  if (!showMore.length) {
    return;
  }

  breakpointChecker();

  // const config = {
  //   attributes: true,
  //   attributeFilter: ['style'],
  //   subtree: true
  // };

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.closest('[data-show-more-button]')) {
      const button = target.closest('[data-show-more-button]').dataset.showMoreButton;
      const list = target.closest(`[data-show-more="${button}"]`);

      list.classList.toggle('is-active');
    }

    if (target.closest('[data-size]')) {
      const parent = target.closest('[data-card]');
      const showMoreButton = parent.querySelector('[data-show-more]');

      if (window.innerWidth < 1023) {
        const items = showMoreButton.querySelectorAll('li:not([style="display: none;"])');
        const icon = showMoreButton.querySelector('[data-show-more-button]');
        if (items.length <= length) {
          icon.style.display = 'none';
          showMoreButton.style.overflow = 'visible';
        } else {
          icon.style.display = 'block';
          showMoreButton.style.overflow = 'hidden';
        }
      }
    }

  });
}

export {initShowMore};
