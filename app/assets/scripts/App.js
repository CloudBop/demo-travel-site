import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll';

let mobileMenu = new MobileMenu();
let revealOnScoll = new RevealOnScroll();

// new RevealOnScroll(document.querySelectorAll('.testimonial'));
// new RevealOnScroll(document.querySelectorAll('.feature-item'));
//
// alert('Hello World!');
// make changes if got
if (module.hot) {
  module.hot.accept;
}
