class RevealOnScroll {
  constructor() {
    //
    this.itemsToReveal = document.querySelectorAll('.feature-item');
    this.hideOnInit();
  }
  hideOnInit() {
    //
    this.itemsToReveal.forEach(el => el.classList.add('reveal-item'));
  }
}

export default RevealOnScroll;
