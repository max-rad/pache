export class Tabs {
  constructor() {
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._init();
  }

  _init() {
    document.addEventListener('click', this._documentClickHandler);
  }

  _documentClickHandler(evt) {
    const target = evt.target;

    if (!target.closest('[data-tabs="control"]')) {
      return;
    }


  }
}
