const breakpointMedia = window.matchMedia('(min-width: 1200px)');

const list = document.querySelector('[data-nav="list"]');
const links = document.querySelectorAll('[data-nav="link"]');

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    document.removeEventListener('click', documentHandler);

    links.forEach((link) => {
      if (link.classList.contains('is-active')) {
        link.classList.remove('is-active');
      }
    });
  } else {
    document.addEventListener('click', documentHandler);
  }
  breakpointMedia.addListener(breakpointChecker);
};

const documentHandler = (evt) => {
  const target = evt.target;

  if (!target.closest('[data-nav="item"]')) {
    return;
  }

  const item = target.closest('[data-nav="item"]');

  if (!target.closest('[data-nav="link"]')) {
    return;
  }

  const link = item.querySelector('[data-nav="link"]');
  const dropdown = item.querySelector('[data-nav="dropdown"]');

  if (link.classList.contains('is-active')) {
    link.classList.remove('is-active');
    dropdown.style.maxHeight = 0;
  } else {
    link.classList.add('is-active');
    dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
  }
}

const initHeaderAccordion = () => {
  if (!list) {
    return;
  }

  document.addEventListener('click', documentHandler);

  window.addEventListener('resize', (evt) => {
    const items = document.querySelectorAll('[data-nav="item"]');

    items.forEach((item) => {
      const link = item.querySelector('[data-nav="link"]');
      const dropdown = item.querySelector('[data-nav="dropdown"]');

      if (link.classList.contains('is-active')) {
        dropdown.style.maxHeight = scrollHeight + 'px';
      }
    });
  });

  breakpointChecker();
}

export {initHeaderAccordion};
