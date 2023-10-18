const initShowMore = () => {
  const showMore = document.querySelectorAll('[data-show-more]');

  if (!showMore) {
    return;
  }

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-show-more-button]')) {
      return;
    }

    const button = target.closest('[data-show-more-button]').dataset.showMoreButton;
    const list = document.querySelector(`[data-show-more="${button}"]`);

    list.classList.toggle('is-active');
  });
}

export {initShowMore};
