const initTitleSizeObserver = () => {
  const cards = document.querySelectorAll('[data-card]');

  if (!cards.length) {
    return;
  }

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const target = entry.target;
      const menu = target.parentElement.querySelector('[data-card-menu]');

      if (entry.contentBoxSize) {
        menu.style.setProperty('--card-menu-translate', `-${target.offsetHeight}px`)
      }
    }
  });


  cards.forEach((card) => {
    const title = card.querySelector('[data-card-title]');
    resizeObserver.observe(title);
  });
}

export {initTitleSizeObserver};
