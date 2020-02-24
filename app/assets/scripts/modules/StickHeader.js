import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
  //
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.pageSections = document.querySelectorAll('.page-section');
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.currentScrollDirection = 'down';
    this.evts();
  }
  evts() {
    window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
    // wait until resize complete
    window.addEventListener(
      'resize',
      debounce(() => {
        // console.log('resize ran', window.innerHeight)
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }
  runOnScroll() {
    this.determineScrollDirection();
    if (window.scrollY > 60) {
      this.siteHeader.classList.add('site-header--dark');
    } else {
      this.siteHeader.classList.remove('site-header--dark');
    }

    this.pageSections.forEach(el => this.calcSection(el));
  }
  calcSection(el) {
    // const sectionHeight = el.offsetTop
    // is page section in window view
    if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
      //
      let scrollPCent = el.getBoundingClientRect().y / this.browserHeight * 100;
      if (
        (scrollPCent < 18 && scrollPCent > -0.1 && this.currentScrollDirection === 'down') ||
        (scrollPCent < 33 && this.currentScrollDirection === 'up')
      ) {
        let matchLink = el.getAttribute('data-matching-link');

        document
          .querySelectorAll(`.primary-nav a:not(${matchLink})`)
          .forEach(el => el.classList.remove('is-current-link'));
        //
        document.querySelector(matchLink).classList.add('is-current-link');
      } else {
      }
    }
  }
  determineScrollDirection() {
    //
    if (window.scrollY > this.previousScrollY) {
      this.currentScrollDirection = 'down';
    } else {
      this.currentScrollDirection = 'up';
    }
    //
    this.previousScrollY = window.scrollY;
  }
}

export default StickyHeader;
