class Modal {
  constructor() {
    this.injectHTML();
    // order of invocation matters
    this.modal = document.querySelector('.modal');
    this.closeIcon = document.querySelectorAll('.modal__close');
    this.events();
    // lazy-loaded
    // this.openModalBtns = document.querySelectorAll('.open-modal');
  }
  events() {
    // open - lazy loaded in app.js
    // this.openModalBtns.forEach(el => {
    //   el.addEventListener('click', evt => this.openTheModal(evt));
    // });
    // close
    this.closeIcon.forEach(el => {
      el.addEventListener('click', e => this.closeTheModal());
    });
    // any key
    document.addEventListener('keyup', evt => this.keyPressHandler(evt));
  }
  openTheModal() {
    // evt.preventDefault();
    this.modal.classList.add('modal--is-visible');
  }
  closeTheModal() {
    this.modal.classList.remove('modal--is-visible');
  }
  keyPressHandler(evt) {
    if (evt.keyCode == 27) {
      this.closeTheModal();
    }
  }
  injectHTML() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
    <div class="modal">
      <div class="modal__inner">
        <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
        <div class="wrapper wrapper--narrow">
          <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
        </div>

        <div class="social-icons">
          <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
          <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
          <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
          <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
        </div>
      </div>
      <div class="modal__close">X</div>
    </div>
    `
    );
  }
}

export default Modal;
