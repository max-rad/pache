const initQuantityCounter = () => {
  const counters = document.querySelectorAll('[data-counter]');

  if (!counters) {
    return;
  }

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-counter]')) {
      return;
    }

    const counter = target.closest('[data-counter]');
    const buttonMinus = counter.querySelector('[data-counter-minus]');
    const buttonPlus = counter.querySelector('[data-counter-plus]');
    const amount = counter.querySelector('[data-counter-amount]');

    if (target.closest('[data-counter-minus]')) {
      if (Number(amount.innerHTML) <= 1) {
        return;
      }

      amount.innerHTML = Number(amount.innerHTML) - 1;
    }

    if (target.closest('[data-counter-plus]')) {
      if (Number(amount.innerHTML) > 99) {
        return;
      }

      amount.innerHTML = Number(amount.innerHTML) + 1;
    }
  });
}

export {initQuantityCounter};
