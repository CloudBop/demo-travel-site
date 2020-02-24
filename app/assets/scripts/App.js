import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll';

// let revealOnScoll = new RevealOnScroll();

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.testimonial'), 75);
new RevealOnScroll(document.querySelectorAll('.feature-item'), 60);
//
// alert('Hello World!');
// make changes if got
if (module.hot) {
  module.hot.accept;
}
