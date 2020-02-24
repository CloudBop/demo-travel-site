import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/StickHeader';
// let revealOnScoll = new RevealOnScroll();

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.testimonial'), 75);
new RevealOnScroll(document.querySelectorAll('.feature-item'), 60);

//
// alert('Hello World!');
// make changes if got
if (module.hot) {
  module.hot.accept;
}
