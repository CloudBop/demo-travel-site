import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/StickHeader';
// need to attach to variables if methods need to be called or each module needs to communictae, see npm event emmitter
new MobileMenu();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.testimonial'), 75);
new RevealOnScroll(document.querySelectorAll('.feature-item'), 60);
//
let modal;
//
document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    if (typeof modal === 'undefined') {
      import(/* webpackChunkName: "modal" */ './modules/Modal')
        .then(x => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 80);
        })
        .catch(e => console.log('There was a problem.'));
    } else {
      modal.openTheModal();
    }
  });
});
//
// alert('Hello World!');
// make changes if got
if (module.hot) {
  module.hot.accept();
}
