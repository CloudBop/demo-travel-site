//
//
const menuIcon = document.querySelector('.site-header__menu-icon'),
  menuContent = document.querySelector('.site-header__menu-content'),
  siteHeader = document.querySelector('.site-header');

//
class MobileMenu {
  constructor() {
    this.menuIcon = menuIcon;
    this.menuContent = menuContent;
    this.siteHeader = siteHeader;
    // invoke the listener onload.
    this.events();
  }

  events() {
    this.menuIcon.addEventListener(
      'click',
      // remember that fn has to be arrow or 'this' context needs to be bound to MobileMenu else this===domObject
      () => {
        this.toggleTheMenu();
      }
    );
  }
  toggleTheMenu() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    this.siteHeader.classList.toggle('site-header--is-expanded');
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;
