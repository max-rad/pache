const initShowMore = () => {
  const showMore = document.querySelectorAll('[data-show-more]');

  if (!showMore.length) {
    return;
  }

  const config = {
    attributes: true,
    attributeFilter: ['style'],
    subtree: true
  };

  showMore.forEach((element) => {
    const items = element.querySelectorAll('li:not([style="display: none;"])');
    const icon = element.querySelector('[data-show-more-button]');

    if (items.length <= 6) {
      icon.style.display = 'none';
    }

    const callback = function(mutationList, observer) {
      for (let mutation of mutationList) {
        if (mutation.type === 'attributes' && window.innerWidth < 1023) {
          const items = element.querySelectorAll('li:not([style="display: none;"])');
          const icon = element.querySelector('[data-show-more-button]');
          if (items.length <= 6) {
            icon.style.display = 'none';
          } else {
            icon.style.display = 'block';
          }
        }
      }
    }

    const observer = new MutationObserver(callback);
    observer.observe(element.querySelector('ul'), config);
  });

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-show-more-button]')) {
      return;
    }

    const button = target.closest('[data-show-more-button]').dataset.showMoreButton;
    const list = target.closest(`[data-show-more="${button}"]`);

    list.classList.toggle('is-active');
  });
}

export {initShowMore};
