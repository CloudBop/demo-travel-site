import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/StickHeader';
import Modal from './modules/Modal';

// let revealOnScoll = new RevealOnScroll();

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.testimonial'), 75);
new RevealOnScroll(document.querySelectorAll('.feature-item'), 60);
new Modal();
//
// alert('Hello World!');
// make changes if got
if (module.hot) {
  module.hot.accept;
}
